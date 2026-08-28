import { useEffect, useMemo, useState } from 'react';
import { metrics } from '../data/metrics';
import { families } from '../data/taxonomy';
import { useStore } from '../state/store';
import { duePriority } from '../state/spacedRepetition';
import { SwipeDeck } from '../components/SwipeDeck';

type Filter = 'all' | string;

export function Learn() {
  const { state, seen, answer } = useStore();
  const [filter, setFilter] = useState<Filter>('all');
  const [idx, setIdx] = useState(0);

  const deck = useMemo(() => {
    let list = metrics;
    if (filter !== 'all') list = list.filter(m => m.family === filter);
    const probe = { level: 0, seen: false, lastSeen: 0, correct: 0, wrong: 0, streak: 0, confused: {}, isHard: false, interval: 0, dueAt: 0 };
    return [...list].sort((a, b) => duePriority(state.progress[b.id] ?? probe, false) - duePriority(state.progress[a.id] ?? probe, false));
  }, [filter, state.progress]);

  const safeIdx = Math.min(idx, deck.length - 1);
  const seenInDeck = deck.filter(m => state.progress[m.id]?.seen).length;
  const masteryPct = deck.length ? Math.round((seenInDeck / deck.length) * 100) : 0;

  useEffect(() => {
    if (deck.length) seen(deck[Math.min(idx, deck.length - 1)].id);
  }, [idx, filter, deck.length]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!deck.length) return <div className="empty">Нет метрик для изучения.</div>;

  return (
    <div className="screen">
      <header className="screen-head">
        <span className="screen-meta">Learn / 01</span>
        <span className="screen-count">Card 01—{String(deck.length).padStart(2, '0')}</span>
        <h1 className="screen-title">Свайп-<br />карточки</h1>
      </header>

      <div className="filters" role="tablist" aria-label="Фильтр по группам">
        <button role="tab" aria-selected={filter === 'all'} className={`f-tab ${filter === 'all' ? 'on' : ''}`} onClick={() => { setFilter('all'); setIdx(0); }}>All</button>
        {families.map(f => (
          <button key={f.id} role="tab" aria-selected={filter === f.id} className={`f-tab ${filter === f.id ? 'on' : ''}`} onClick={() => { setFilter(f.id); setIdx(0); }}>
            {f.title}
          </button>
        ))}
      </div>

      <div className="mastery">
        <div className="m-row">
          <span className="m-label">Mastery</span>
          <span className="m-pct">{masteryPct}%</span>
        </div>
        <div className="m-rule" role="progressbar" aria-valuenow={masteryPct} aria-valuemin={0} aria-valuemax={100} aria-label="Освоение колоды">
          <div className="m-fill" style={{ width: `${masteryPct}%` }} />
        </div>
      </div>

      <SwipeDeck
        deck={deck}
        index={safeIdx}
        onIndex={setIdx}
        onResult={(mid, known) => answer(mid, known, known ? undefined : (deck[safeIdx]?.confusedWith[0] ?? undefined))}
      />
    </div>
  );
}
