import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { cards } from '../data/cards';
import { groups } from '../data/taxonomy';
import { localizeCards } from '../i18n/cardOverrides';
import { useStore } from '../state/store';
import { useLanguage } from '../state/language';
import { duePriority } from '../state/spacedRepetition';
import { SwipeDeck } from '../components/SwipeDeck';

type Filter = 'all' | string;

export function Learn() {
  const { state, seen, answer } = useStore();
  const { t, groupTitle, lang } = useLanguage();
  const cardsForLang = useMemo(() => localizeCards(cards, lang), [lang]);
  const [filter, setFilter] = useState<Filter>('all');
  const [idx, setIdx] = useState(0);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [sessionId, setSessionId] = useState(0);

  const createDeck = (activeFilter: Filter) => {
    let list = cardsForLang;
    if (activeFilter !== 'all') list = list.filter(c => c.group === activeFilter);
    const probe = { level: 0, seen: false, lastSeen: 0, correct: 0, wrong: 0, streak: 0, confused: {}, isHard: false, interval: 0, dueAt: 0 };
    return [...list].sort((a, b) => duePriority(state.progress[b.id] ?? probe, false) - duePriority(state.progress[a.id] ?? probe, false));
  };

  const [deck, setDeck] = useState(() => createDeck('all'));

  const safeIdx = Math.min(idx, deck.length - 1);
  const completedCards = Math.min(idx, deck.length);
  const sessionRatio = deck.length ? completedCards / deck.length : 0;
  const sessionPct = Math.round(sessionRatio * 100);
  const knownCount = Object.values(results).filter(Boolean).length;
  const reviewIds = Object.entries(results).filter(([, known]) => !known).map(([id]) => id);
  const reviewCount = reviewIds.length;
  const accuracyPct = deck.length ? Math.round((knownCount / deck.length) * 100) : 0;

  const beginSession = (activeFilter: Filter, nextDeck?: typeof deck) => {
    setDeck(nextDeck ?? createDeck(activeFilter));
    setIdx(0);
    setResults({});
    setSessionId(current => current + 1);
  };

  const changeFilter = (nextFilter: Filter) => {
    setFilter(nextFilter);
    beginSession(nextFilter);
  };

  // Rebuild the deck when the language changes so card texts switch cleanly.
  useEffect(() => {
    setDeck(createDeck(filter));
    setIdx(0);
    setResults({});
    setSessionId(current => current + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const recordResult = (metricId: string, known: boolean) => {
    setResults(current => ({ ...current, [metricId]: known }));
    answer(metricId, known);
  };

  useEffect(() => {
    const current = deck[Math.min(idx, deck.length - 1)];
    if (current) seen(current.id);
  }, [idx, deck]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!deck.length) return <div className="empty">{t('learn.empty')}</div>;

  if (idx >= deck.length) {
    const completedAll = knownCount === deck.length;
    const completedNone = knownCount === 0;
    return (
      <div className="screen learn-screen">
        <section className="learn-workspace session-complete">
          <div className="completion-card">
            <div className="completion-mark" aria-hidden="true">{completedAll ? '✓' : completedNone ? '↺' : '·'}</div>
            <h1>{completedAll ? t('learn.cleanSweep') : completedNone ? t('learn.nothingStuck') : t('learn.sessionComplete')}</h1>
            <p>
              {completedAll
                ? t('learn.cleanSweepDesc', { n: deck.length })
                : completedNone
                  ? t('learn.noneDesc', { n: deck.length })
                  : t('learn.partialDesc', { known: knownCount, review: reviewCount })}
            </p>
            <div className="completion-stats" aria-label={t('learn.sessionStats')}>
              <span><strong>{knownCount}</strong>{t('learn.knownStat')}</span>
              <span><strong>{reviewCount}</strong>{t('learn.reviewStat')}</span>
              <span><strong>{accuracyPct}%</strong>{t('learn.recallStat')}</span>
            </div>
            <div className="completion-actions">
              {reviewCount > 0 && (
                <button className="btn accent" onClick={() => beginSession(filter, deck.filter(card => reviewIds.includes(card.id)))}>
                  {completedNone ? t('learn.secondPass') : t('learn.practiceMissed')}
                </button>
              )}
              {!completedNone && <button className="btn ghost" onClick={() => beginSession(filter)}>{t('learn.repeatTopic')}</button>}
              <Link className="btn quiet" to="/test">{t('learn.takeTest')}</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="screen learn-screen">
      <section className="learn-workspace">
        <header className="learn-head">
          <h1>{t('learn.title')}</h1>
          <div className="learn-session-count" aria-label={t('learn.cardCounter', { a: safeIdx + 1, b: deck.length })}>
            <strong>{String(safeIdx + 1).padStart(2, '0')}</strong>
            <span>/</span>
            <span>{String(deck.length).padStart(3, '0')}</span>
          </div>
        </header>

        <div className="filters" role="tablist" aria-label={t('learn.filterByTopic')}>
          <button role="tab" aria-selected={filter === 'all'} className={`f-tab ${filter === 'all' ? 'on' : ''}`} onClick={() => changeFilter('all')}>{t('learn.all')}</button>
          {groups.map(g => (
            <button key={g.id} role="tab" aria-selected={filter === g.id} className={`f-tab ${filter === g.id ? 'on' : ''}`} onClick={() => changeFilter(g.id)}>
              {groupTitle(g.id)}
            </button>
          ))}
        </div>

        <div className="mastery">
          <div
            className="m-rule"
            role="progressbar"
            aria-label={t('learn.sessionProgress')}
            aria-valuenow={sessionPct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext={t('learn.cardCounter', { a: completedCards, b: deck.length })}
          >
            <div className="m-fill" style={{ transform: `scaleX(${sessionRatio})` }} />
          </div>
        </div>

        <SwipeDeck
          key={sessionId}
          deck={deck}
          index={safeIdx}
          onIndex={setIdx}
          onResult={recordResult}
        />
      </section>
    </div>
  );
}
