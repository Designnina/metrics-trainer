import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useTransform, animate } from 'motion/react';
import type { Metric } from '../types';
import { FlipCard } from './FlipCard';

interface SwipeDeckProps {
  deck: Metric[];
  index: number;
  onIndex: (i: number) => void;
  onResult: (metricId: string, known: boolean) => void;
}

const THRESHOLD = 110;

export function SwipeDeck({ deck, index, onIndex, onResult }: SwipeDeckProps) {
  const metric = deck[index];
  const next = deck[index + 1];
  const reduce = useReducedMotion();
  const [flipped, setFlipped] = useState(false);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 0, 220], [-14, 0, 14]);
  const knownOpacity = useTransform(x, [40, 130], [0, 1]);
  const unknownOpacity = useTransform(x, [-130, -40], [1, 0]);

  const moved = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const dragging = useRef(false);

  const resetTop = () => {
    if (reduce) { x.set(0); return; }
    animate(x, 0, { type: 'spring', stiffness: 400, damping: 32 });
  };

  const commit = (dir: 'known' | 'unknown') => {
    if (!metric) return;
    onResult(metric.id, dir === 'known');
    setFlipped(false);
    const flyX = dir === 'known' ? 560 : -560;
    // Fly the top card out with a small overshoot, then reveal the stack.
    const out = animate(x, flyX, { duration: 0.26, ease: [0.5, 0, 0.75, 0.2] });
    out.then(() => {
      x.jump(0);
      onIndex(index + 1);
    });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    moved.current = false;
    startX.current = e.clientX;
    startY.current = e.clientY;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;
    if (Math.abs(dx) > 8) moved.current = true;
    x.set(dx);
  };
  const onPointerUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    const v = x.get();
    if (v > THRESHOLD) commit('known');
    else if (v < -THRESHOLD) commit('unknown');
    else resetTop();
  };

  const handleFlip = (v: boolean) => {
    if (moved.current) { moved.current = false; return; }
    setFlipped(v);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); commit('known'); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); commit('unknown'); }
      else if (e.key === ' ') { e.preventDefault(); setFlipped(f => !f); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, metric?.id, reduce]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!metric) return null;

  return (
    <div className="deck">
      <div className="deck-stack" style={{ height: 400 }}>
        {next && (
          <div className="swipe-wrap" style={{ transform: 'scale(0.96) translateY(10px)', opacity: 0.7 }}>
            <div className="flip-inner">
              <div className="flip-face flip-front card" style={{ padding: 'var(--sp-6)' }}>
                <span className="chip">{next.name.toUpperCase()}</span>
              </div>
            </div>
          </div>
        )}

        <motion.div
          className="swipe-wrap"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{ x, rotate }}
          drag={false}
        >
          <motion.div className="swipe-overlay" style={{ opacity: knownOpacity }}>
            <span className="tag known">Знаю →</span>
          </motion.div>
          <motion.div className="swipe-overlay" style={{ opacity: unknownOpacity }}>
            <span className="tag unknown">← Не знаю</span>
          </motion.div>
          <FlipCard metric={metric} flipped={flipped} onFlip={handleFlip} />
        </motion.div>
      </div>

      <div className="deck-actions">
        <button className="btn warn" onClick={() => commit('unknown')}>← Не знаю</button>
        <button className="btn tint" onClick={() => commit('known')}>Знаю →</button>
      </div>
      <div className="tiny muted" style={{ textAlign: 'center', marginTop: 10 }}>
        Свайп: вправо — знаю, влево — не знаю · нажми по карточке, чтобы перевернуть
      </div>
    </div>
  );
}
