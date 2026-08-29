import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { cards } from '../data/cards';
import { groups, domainById } from '../data/taxonomy';
import { useStore } from '../state/store';

export function Library() {
  const { state } = useStore();
  const [group, setGroup] = useState<string>('all');
  const [q, setQ] = useState('');

  const list = useMemo(() => {
    let l = cards;
    if (group !== 'all') l = l.filter(c => c.group === group);
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      l = l.filter(c =>
        c.answer.toLowerCase().includes(s) ||
        c.frontQuestion.toLowerCase().includes(s) ||
        c.backInfo.toLowerCase().includes(s),
      );
    }
    return [...l].sort((a, b) => a.answer.localeCompare(b.answer));
  }, [group, q]);

  return (
    <div className="screen">
      <header className="screen-head">
        <h1 className="screen-title">Все<br />карточки</h1>
        <span className="screen-count">{String(list.length).padStart(3, '0')}</span>
      </header>

      <div className="filters" role="tablist" aria-label="Фильтр по группам">
        <button role="tab" aria-selected={group === 'all'} className={`f-tab ${group === 'all' ? 'on' : ''}`} onClick={() => setGroup('all')}>All</button>
        {groups.map(g => (
          <button key={g.id} role="tab" aria-selected={group === g.id} className={`f-tab ${group === g.id ? 'on' : ''}`} onClick={() => setGroup(g.id)}>
            {g.title}
          </button>
        ))}
      </div>

      <input className="search" value={q} onChange={e => setQ(e.target.value)} placeholder="Поиск: activation, RAG, SUS…" aria-label="Поиск карточек" />

      <div className="li-grid" style={{ marginTop: 32 }}>
        <div className="list">
          {list.slice(0, Math.ceil(list.length / 2)).map((c, i) => <LiRow key={c.id} c={c} i={i} lvl={state.progress[c.id]?.level ?? 0} />)}
        </div>
        <div className="list">
          {list.slice(Math.ceil(list.length / 2)).map((c, i) => <LiRow key={c.id} c={c} i={Math.ceil(list.length / 2) + i} lvl={state.progress[c.id]?.level ?? 0} />)}
        </div>
      </div>
    </div>
  );
}

function LiRow({ c, i, lvl }: { c: { id: string; answer: string; frontQuestion: string; category: string }; i: number; lvl: number }) {
  return (
    <Link to={`/metric/${c.id}`} className="li li-link">
      <span className="li-num">{String(i + 1).padStart(2, '0')}</span>
      <span className="grow">
        <span className="li-name">{c.answer}</span>
        <div className="li-meta">{c.frontQuestion}</div>
      </span>
      <span className="li-right">{domainById[c.category]?.title ?? c.category}{lvl >= 5 ? ' · ✓' : ''}</span>
    </Link>
  );
}
