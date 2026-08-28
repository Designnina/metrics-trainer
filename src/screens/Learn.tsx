import { useEffect, useMemo, useState } from 'react';
import { metrics } from '../data/metrics';
import { families } from '../data/taxonomy';
import { useStore } from '../state/store';
import { duePriority } from '../state/spacedRepetition';
import { FlipCard } from '../components/FlipCard';
import { FamilyBadge } from '../components/MetricBadge';
import { ProgressBar } from '../components/ProgressBar';

type Filter = 'all' | string;

export function Learn() {
  const { state, seen, hard } = useStore();
  const [filter, setFilter] = useState<Filter>('all');
  const [idx, setIdx] = useState(0);
  const [touchX, setTouchX] = useState<number | null>(null);

  const deck = useMemo(() => {
    let list = metrics;
    if (filter !== 'all') list = list.filter(m => m.family === filter);
    return [...list].sort((a, b) => {
      const pa = duePriority(state.progress[a.id] ?? { level: 0, seen: false, lastSeen: 0, correct: 0, wrong: 0, streak: 0, confused: {}, isHard: false, interval: 0, dueAt: 0 }, false);
      const pb = duePriority(state.progress[b.id] ?? { level: 0, seen: false, lastSeen: 0, correct: 0, wrong: 0, streak: 0, confused: {}, isHard: false, interval: 0, dueAt: 0 }, false);
      return pb - pa;
    });
  }, [filter, state.progress]);

  const safeIdx = Math.min(idx, deck.length - 1);
  const metric = deck[safeIdx];
  const seenInDeck = deck.filter(m => state.progress[m.id]?.seen).length;

  useEffect(() => { if (metric) seen(metric.id); }, [metric?.id]);

  const go = (dir: 1 | -1) => {
    const next = safeIdx + dir;
    if (next >= 0 && next < deck.length) {
      setIdx(next);
      if (metric) seen(metric.id);
    }
  };

  const onTouchStart = (x: number) => setTouchX(x);
  const onTouchEnd = (x: number) => {
    if (touchX == null) return;
    const dx = x - touchX;
    if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
    setTouchX(null);
  };

  if (!metric) return <div className="empty">Нет метрик для изучения.</div>;

  return (
    <div className="screen">
      <div className="row-flex" style={{ marginBottom: 16 }}>
        <div>
          <div className="eyebrow">Learn</div>
          <div className="h2">Карточки</div>
        </div>
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

      <div
        onTouchStart={(e) => onTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onTouchEnd(e.changedTouches[0].clientX)}
      >
        <FlipCard metric={metric} />
      </div>

      <div className="row-flex">
        <button className="btn ghost small" onClick={() => go(-1)} disabled={safeIdx === 0}>← Назад</button>
        <button className="btn small ghost" onClick={() => { hard(metric.id); setIdx((safeIdx + 1) % deck.length); }} aria-label="Отметить как сложную">★ Сложная</button>
        <button className="btn small" onClick={() => go(1)} disabled={safeIdx >= deck.length - 1}>Вперёд →</button>
      </div>

      <div className="tiny muted" style={{ marginTop: 14, textAlign: 'center' }}>
        Тап по карточке — переворот · свайп или кнопки — листание
      </div>
    </div>
  );
}
