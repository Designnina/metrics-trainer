import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { metrics } from '../data/metrics';
import { families, categoriesByFamily } from '../data/taxonomy';
import { FamilyBadge } from '../components/MetricBadge';
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
      <div className="eyebrow">Library</div>
      <div className="h1" style={{ fontSize: 26 }}>Все метрики</div>

      <div className="seg" style={{ margin: '16px 0' }} role="tablist" aria-label="Фильтр по группам">
        <button role="tab" aria-selected={family === 'all'} className={family === 'all' ? 'on' : ''} onClick={() => setFamily('all')}>Все</button>
        {families.map(f => (
          <button key={f.id} role="tab" aria-selected={family === f.id} className={family === f.id ? 'on' : ''} onClick={() => setFamily(f.id)}>
            {f.title}
          </button>
        ))}
      </div>

      <input
          className="search"
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Поиск: conversion, retention, nps…"
          aria-label="Поиск метрик"
        />

      <div className="list">
        {list.map(m => {
          const lvl = state.progress[m.id]?.level ?? 0;
          return (
            <Link to={`/metric/${m.id}`} className="row" key={m.id}>
              <div className="grow">
                <div style={{ fontWeight: 650 }}>{m.name}</div>
                <div className="meta">{m.tagline}</div>
              </div>
              <FamilyBadge family={m.family} />
              {lvl >= 5 && <span className="mono tiny" aria-label="освоено">✓</span>}
            </Link>
          );
        })}
      </div>

      {family !== 'all' && (
        <div className="stack-sm" style={{ marginTop: 20 }}>
          <div className="eyebrow">Категории</div>
          {categoriesByFamily(family).map(c => (
            <Link key={c.id} to={`/library`} className="row" onClick={() => { setQ(''); setFamily('all'); }}>
              <div className="grow">
                <div style={{ fontWeight: 600 }}>{c.title}</div>
                <div className="meta">{c.description}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
