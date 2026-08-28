import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { metrics, metricById } from '../data/metrics';
import { families } from '../data/taxonomy';
import { useStore } from '../state/store';

export function Library() {
  const { state } = useStore();
  const [family, setFamily] = useState<string>('all');
  const [q, setQ] = useState('');

  const list = useMemo(() => {
    let l = metrics;
    if (family !== 'all') l = l.filter(m => m.family === family);
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      l = l.filter(m => m.name.toLowerCase().includes(s) || m.tagline.toLowerCase().includes(s));
    }
    return [...l].sort((a, b) => a.name.localeCompare(b.name));
  }, [family, q]);

  return (
    <div className="screen">
      <header className="screen-head">
        <span className="screen-meta">Metrics / 03</span>
        <span className="screen-count">{String(list.length).padStart(2, '0')} метрик</span>
        <h1 className="screen-title">Все<br />метрики</h1>
      </header>

      <div className="filters" role="tablist" aria-label="Фильтр по группам">
        <button role="tab" aria-selected={family === 'all'} className={`f-tab ${family === 'all' ? 'on' : ''}`} onClick={() => setFamily('all')}>All</button>
        {families.map(f => (
          <button key={f.id} role="tab" aria-selected={family === f.id} className={`f-tab ${family === f.id ? 'on' : ''}`} onClick={() => setFamily(f.id)}>
            {f.title}
          </button>
        ))}
      </div>

      <input className="search" value={q} onChange={e => setQ(e.target.value)} placeholder="Поиск: conversion, retention, nps…" aria-label="Поиск метрик" />

      <div className="li-grid" style={{ marginTop: 30 }}>
        <div className="list">
          {list.slice(0, Math.ceil(list.length / 2)).map((m, i) => <LiRow key={m.id} m={m} i={i} lvl={state.progress[m.id]?.level ?? 0} />)}
        </div>
        <div className="list">
          {list.slice(Math.ceil(list.length / 2)).map((m, i) => <LiRow key={m.id} m={m} i={Math.ceil(list.length / 2) + i} lvl={state.progress[m.id]?.level ?? 0} />)}
        </div>
      </div>

      {family !== 'all' && (
        <div style={{ marginTop: 56 }}>
          <div className="sec-label">Категории</div>
          <div className="tag-row">
            {metrics.filter(m => m.family === family).map(m => metricById[m.id]).filter(Boolean).map((m, i) => (
              <Link key={m.id} to={`/metric/${m.id}`} className="chip">{String(i + 1).padStart(2, '0')} · {m.categoryId.split('-')[1]}</Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function LiRow({ m, i, lvl }: { m: { id: string; name: string; tagline: string; family: string }; i: number; lvl: number }) {
  const famTitles: Record<string, string> = { product: 'PRODUCT', business: 'BUSINESS', ux: 'UX', usability: 'USABILITY', experimentation: 'EXPERIMENT' };
  return (
    <Link to={`/metric/${m.id}`} className="li li-link">
      <span className="li-num">{String(i + 1).padStart(2, '0')}</span>
      <span className="grow">
        <span className="li-name">{m.name}</span>
        <div className="li-meta">{m.tagline}</div>
      </span>
      <span className="li-right">{famTitles[m.family]}{lvl >= 5 ? ' · ✓' : ''}</span>
    </Link>
  );
}
