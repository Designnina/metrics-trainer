import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { cards, cardById } from '../data/cards';
import { groups } from '../data/taxonomy';
import { localizeCards } from '../i18n/cardOverrides';
import { useLanguage } from '../state/language';
import { useStore } from '../state/store';
import type { TrainingCard } from '../types';

export function Library() {
  const { state } = useStore();
  const { t, lang, groupTitle, domainTitle } = useLanguage();
  void lang;
  const [params, setParams] = useSearchParams();
  const rawGroup = params.get('f') ?? 'all';
  const group = rawGroup === 'all' || groups.some(g => g.id === rawGroup) ? rawGroup : 'all';
  const [q, setQ] = useState('');

  const list = useMemo(() => {
    let l = localizeCards(cards, lang);
    if (group !== 'all') l = l.filter(c => c.group === group);
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      l = l.filter(c => {
        const en = cardById[c.id];
        return (
          c.answer.toLowerCase().includes(s) ||
          c.frontQuestion.toLowerCase().includes(s) ||
          c.backInfo.toLowerCase().includes(s) ||
          (en != null && en !== c && (
            en.frontQuestion.toLowerCase().includes(s) ||
            en.backInfo.toLowerCase().includes(s)
          ))
        );
      });
    }
    return [...l].sort((a, b) => a.answer.localeCompare(b.answer));
  }, [group, q, lang]);

  return (
    <div className="screen metrics-screen">
      <section className="metrics-workspace">
        <header className="metrics-head">
          <h1>{t('metrics.title')}</h1>
          <span role="status" aria-live="polite">{t('metrics.of', { a: list.length, b: cards.length })}</span>
        </header>
        <p className="metrics-intro">{t('metrics.intro')}</p>
        <p style={{ marginTop: 12 }}>
          <Link to="/groups" className="btn quiet">{t('metrics.viewGroups')}</Link>
        </p>

        <div className="filters" aria-label={t('learn.filterByTopic')}>
          <button aria-pressed={group === 'all'} className={`f-tab ${group === 'all' ? 'on' : ''}`} onClick={() => void setParams({})}>{t('learn.all')}</button>
          {groups.map(g => (
            <button key={g.id} aria-pressed={group === g.id} className={`f-tab ${group === g.id ? 'on' : ''}`} onClick={() => void setParams({ f: g.id })}>
              {groupTitle(g.id)}
            </button>
          ))}
        </div>

        <div className="metrics-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" />
          </svg>
          <label className="sr-only" htmlFor="metric-search">{t('metrics.searchLabel')}</label>
          <input id="metric-search" value={q} onChange={e => setQ(e.target.value)} placeholder={t('metrics.searchPh')} />
          {q && <button type="button" onClick={() => setQ('')} aria-label={t('metrics.clearSearch')}>{t('metrics.clear')}</button>}
        </div>

        {list.length === 0 ? (
          <div className="metrics-empty">
            <h2>{t('metrics.noMatch')}</h2>
            <p>{t('metrics.tryBroader')}</p>
            <button className="btn quiet" onClick={() => { setQ(''); void setParams({}); }}>{t('metrics.showAll')}</button>
          </div>
        ) : (
          <div className="metrics-list">
            {list.map((c, i) => <MetricRow key={c.id} c={c} i={i} lvl={state.progress[c.id]?.level ?? 0} />)}
          </div>
        )}
      </section>
    </div>
  );
}

function MetricRow({ c, i, lvl }: { c: TrainingCard; i: number; lvl: number }) {
  const { t, domainTitle } = useLanguage();
  return (
    <Link to={`/metric/${c.id}`} className="metric-index-row" aria-label={t('metrics.open', { name: c.answer })}>
      <span className="metric-index-num">{String(i + 1).padStart(3, '0')}</span>
      <span className="metric-index-copy">
        <span className="metric-index-name">{c.answer}</span>
        <span className="metric-index-question">{c.frontQuestion}</span>
        <span className="metric-index-meta">
          <span className="metric-index-topic">{domainTitle(c.category)}</span>
          <span className="metric-index-status">
            <span className="metric-index-level">{t(`level.${c.level}` as string)}</span>
            {lvl >= 5 && <span className="metric-mastered">{t('metrics.mastered')}</span>}
          </span>
        </span>
      </span>
      <svg className="metric-index-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M14 7l5 5-5 5" />
      </svg>
    </Link>
  );
}
