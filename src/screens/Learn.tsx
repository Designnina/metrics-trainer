import { useEffect, useMemo, useState } from 'react';
import { metrics } from '../data/metrics';
import { families } from '../data/taxonomy';
import { useStore } from '../state/store';
import { duePriority } from '../state/spacedRepetition';
import { SwipeDeck } from '../components/SwipeDeck';
import { ProgressBar } from '../components/ProgressBar';

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

  useEffect(() => {
    if (deck.length) seen(deck[Math.min(idx, deck.length - 1)].id);
  }, [idx, filter, deck.length]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!deck.length) return <div className="empty">Нет метрик для изучения.</div>;
  const metric = deck[safeIdx];

  return (
    <div className="screen">
      <div className="row-flex" style={{ marginBottom: 16 }}>
        <div><div className="eyebrow">Learn</div><div className="h2">Свайп-карточки</div></div>
        <div className="mono muted">{safeIdx + 1} / {deck.length}</div>
      </div>

      <div className="seg" style={{ marginBottom: 16 }} role="tablist" aria-label="Фильтр по группам">
        <button role="tab" aria-selected={filter === 'all'} className={filter === 'all' ? 'on' : ''} onClick={() => { setFilter('all'); setIdx(0); }}>Все</button>
        {families.map(f => (
          <button key={f.id} role="tab" aria-selected={filter === f.id} className={filter === f.id ? 'on' : ''} onClick={() => { setFilter(f.id); setIdx(0); }}>
            {f.title}
          </button>
        ))}
      </div>

      <ProgressBar value={seenInDeck} max={deck.length} label="Изучено в колоде" />
      <div style={{ height: 20 }} />

      <SwipeDeck
        deck={deck}
        index={safeIdx}
        onIndex={setIdx}
        onResult={(mid, known) => answer(mid, known, known ? undefined : (deck[safeIdx]?.confusedWith[0] ?? undefined))}
      />
    </div>
  );
}
