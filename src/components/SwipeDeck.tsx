import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useTransform, animate } from 'motion/react';
import type { TrainingCard } from '../types';
import { useLanguage } from '../state/language';
import { FlipCard } from './FlipCard';

interface SwipeDeckProps {
  deck: TrainingCard[];
  index: number;
  onIndex: (i: number) => void;
  onResult: (metricId: string, known: boolean) => void;
}

const TAP_SLOP = 10;
const DRAG_LOCK = 12;
const VERTICAL_BIAS = 1.08;
const SWIPE_MIN_DISTANCE = 46;
const SWIPE_MAX_DISTANCE = 88;
const SWIPE_FLICK_VELOCITY = 0.42;
const SWIPE_FLICK_DISTANCE = 22;
const SWIPE_PROJECTION_MS = 150;

export function SwipeDeck({ deck, index, onIndex, onResult }: SwipeDeckProps) {
  const card = deck[index];
  const { t } = useLanguage();
  const next = deck[index + 1];
  const reduce = useReducedMotion();
  const [flipped, setFlipped] = useState(false);
  const [committing, setCommitting] = useState(false);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 0, 220], [-14, 0, 14]);
  const knownOpacity = useTransform(x, [40, 130], [0, 1]);
  const unknownOpacity = useTransform(x, [-130, -40], [1, 0]);
  const nextScale = useTransform(x, [-220, 0, 220], [1, 0.985, 1]);
  const nextY = useTransform(x, [-220, 0, 220], [0, 8, 0]);
  const nextOpacity = useTransform(x, [-220, 0, 220], [1, 0.78, 1]);
  const cardOpacity = useMotionValue(1);
  const cardScale = useMotionValue(1);

  const startX = useRef(0);
  const startY = useRef(0);
  const startTime = useRef(0);
  const lastMoveX = useRef(0);
  const lastMoveTime = useRef(0);
  const recentVelocityX = useRef(0);
  const dragging = useRef(false);
  const gestureLock = useRef<'h' | 'v' | null>(null);
  const hasCapture = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const committingRef = useRef(false);
  const activeCardId = useRef<string | undefined>(card?.id);
  const exitAnimation = useRef<ReturnType<typeof animate> | null>(null);

  useLayoutEffect(() => {
    activeCardId.current = card?.id;
    exitAnimation.current?.stop();
    exitAnimation.current = null;
    x.jump(0);
    cardOpacity.jump(1);
    cardScale.jump(1);
    setFlipped(false);
    committingRef.current = false;
    setCommitting(false);
    return () => {
      activeCardId.current = undefined;
      exitAnimation.current?.stop();
    };
  }, [card?.id, x, cardOpacity, cardScale]);

  const resetTop = () => {
    if (reduce) { x.jump(0); cardOpacity.jump(1); cardScale.jump(1); return; }
    animate(x, 0, { type: 'spring', stiffness: 400, damping: 32 });
    animate(cardOpacity, 1, { duration: 0.2 });
    animate(cardScale, 1, { duration: 0.2 });
  };

  const commit = (dir: 'known' | 'unknown') => {
    if (!card || committingRef.current) return;
    committingRef.current = true;
    setCommitting(true);
    onResult(card.id, dir === 'known');
    if (reduce) {
      onIndex(index + 1);
      return;
    }

    const outgoingId = card.id;
    const deckWidth = document.querySelector<HTMLElement>('.deck-stack')?.offsetWidth ?? 880;
    const distance = deckWidth * 0.52;
    const flyX = dir === 'known' ? distance : -distance;
    const out = animate(x, flyX, { duration: 0.42, ease: [0.32, 0.72, 0, 1] });
    animate(cardOpacity, 0, { duration: 0.32, ease: [0.32, 0.72, 0, 1] });
    animate(cardScale, 0.96, { duration: 0.42, ease: [0.32, 0.72, 0, 1] });
    exitAnimation.current = out;
    out.then(() => {
      if (activeCardId.current !== outgoingId) return;
      onIndex(index + 1);
    });
  };

  const releaseCapture = (el: HTMLElement | null, pid: number | null) => {
    if (el && pid !== null && hasCapture.current) {
      try { el.releasePointerCapture(pid); } catch { /* ignore */ }
    }
    hasCapture.current = false;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (committingRef.current) return;
    // only primary touch / left mouse
    if (e.button !== 0) return;
    dragging.current = true;
    gestureLock.current = null;
    hasCapture.current = false;
    pointerIdRef.current = e.pointerId;
    startX.current = e.clientX;
    startY.current = e.clientY;
    startTime.current = Date.now();
    lastMoveX.current = e.clientX;
    lastMoveTime.current = performance.now();
    recentVelocityX.current = 0;
    // Mouse drags can leave the card before the gesture locks. Touch waits for a
    // horizontal lock so the browser remains free to handle vertical scrolling.
    if (e.pointerType === 'mouse') {
      try {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        hasCapture.current = true;
      } catch {
        hasCapture.current = false;
      }
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;
    const adx = Math.abs(dx);
    const ady = Math.abs(dy);
    const moveTime = performance.now();
    const moveDt = moveTime - lastMoveTime.current;
    if (moveDt > 0 && moveDt < 100) {
      recentVelocityX.current = (e.clientX - lastMoveX.current) / moveDt;
    }
    lastMoveX.current = e.clientX;
    lastMoveTime.current = moveTime;

    if (gestureLock.current === null) {
      if (Math.hypot(adx, ady) < DRAG_LOCK) return;
      if (ady > adx * VERTICAL_BIAS) {
        gestureLock.current = 'v';
        releaseCapture(e.currentTarget as HTMLElement, pointerIdRef.current);
        dragging.current = false;
        x.jump(0);
        return;
      }
      // Once there is enough travel to read intent, a broadly horizontal thumb
      // arc belongs to the card. Only clearly vertical movement belongs to scroll.
      gestureLock.current = 'h';
      if (!hasCapture.current) {
        try {
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          hasCapture.current = true;
        } catch {
          hasCapture.current = false;
        }
      }
    }

    if (gestureLock.current === 'v') return;
    x.set(dx);
    if (e.cancelable) e.preventDefault();
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const wasDragging = dragging.current || gestureLock.current !== null;
    const pid = pointerIdRef.current;
    const el = e.currentTarget as HTMLElement;
    // unlock regardless
    dragging.current = false;

    if (!wasDragging && gestureLock.current === null) {
      // pointerDown without meaningful move — treat as candidate tap
      // but if it was already released as vertical, ignore
      releaseCapture(el, pid);
      gestureLock.current = null;
      pointerIdRef.current = null;
      return;
    }

    if (gestureLock.current === 'v') {
      releaseCapture(el, pid);
      gestureLock.current = null;
      pointerIdRef.current = null;
      resetTop();
      return;
    }

    releaseCapture(el, pid);
    const dx = e.clientX - startX.current;
    const dy = Math.abs(e.clientY - startY.current);
    const dt = Math.max(1, Date.now() - startTime.current);
    const recentSampleAge = performance.now() - lastMoveTime.current;
    const vx = recentSampleAge < 100 ? recentVelocityX.current : dx / dt;
    gestureLock.current = null;
    pointerIdRef.current = null;

    if (Math.abs(dx) < TAP_SLOP && dy < 14 && dt < 500) {
      resetTop();
      setFlipped(f => !f);
      return;
    }
    // A narrow card needs a thumb-sized travel, while desktop still requires a
    // deliberate drag. Projected velocity lets a short, confident flick commit.
    const stackW = (el.closest('.deck-stack') as HTMLElement | null)?.offsetWidth ?? el.offsetWidth ?? 360;
    const distanceThreshold = Math.min(SWIPE_MAX_DISTANCE, Math.max(SWIPE_MIN_DISTANCE, stackW * 0.13));
    const projectedX = dx + vx * SWIPE_PROJECTION_MS;
    const isFlick = Math.abs(vx) >= SWIPE_FLICK_VELOCITY
      && Math.abs(dx) >= SWIPE_FLICK_DISTANCE
      && Math.abs(projectedX) >= distanceThreshold;
    if (dx >= distanceThreshold || (isFlick && projectedX > 0)) commit('known');
    else if (dx <= -distanceThreshold || (isFlick && projectedX < 0)) commit('unknown');
    else resetTop();
  };

  const onPointerCancel = (e: React.PointerEvent) => {
    dragging.current = false;
    gestureLock.current = null;
    releaseCapture(e.currentTarget as HTMLElement, pointerIdRef.current);
    pointerIdRef.current = null;
    hasCapture.current = false;
    resetTop();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t?.closest('button, a, input, textarea, select, [role="tab"], [contenteditable="true"]')) return;
      if (committingRef.current) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); commit('known'); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); commit('unknown'); }
      else if (e.key === ' ') { e.preventDefault(); setFlipped(f => !f); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, card?.id, reduce]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!card) return null;

  return (
    <div className="deck">
      <div className="deck-stack">
        {next && (
          <motion.div className="behind" aria-hidden="true" style={{ scale: nextScale, y: nextY, opacity: nextOpacity }}>
            <FlipCard card={next} flipped={false} index={index + 1} />
          </motion.div>
        )}

        <motion.div
          className="swipe-hit"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          style={{ x, rotate, opacity: cardOpacity, scale: cardScale }}
          drag={false}
          role="button"
          tabIndex={0}
          aria-disabled={committing}
          aria-pressed={flipped}
          aria-label={flipped
            ? t('card.backAria', { a: card.answer, b: card.backInfo, f: card.formula ? t('card.formulaPart', { f: card.formula }) : '' })
            : t('card.revealAria', { q: card.frontQuestion, s: card.frontScenario })}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !committingRef.current) { e.preventDefault(); setFlipped(f => !f); }
          }}
        >
          <motion.div className="swipe-overlay known" style={{ opacity: knownOpacity }}>
            <span className="tag known">{t('card.knowIt')}</span>
          </motion.div>
          <motion.div className="swipe-overlay unknown" style={{ opacity: unknownOpacity }}>
            <span className="tag unknown">{t('card.review')}</span>
          </motion.div>
          <FlipCard card={card} flipped={flipped} index={index} />
        </motion.div>
      </div>

      <div className="act-row">
        <button className="act review" onClick={() => commit('unknown')} disabled={committing}>
          <span className="act-edge"><svg className="act-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></span>
          <span className="act-label">{t('card.review')}</span>
          <span className="act-edge" aria-hidden="true" />
        </button>
        <button className="act known" onClick={() => commit('known')} disabled={committing}>
          <span className="act-edge" aria-hidden="true" />
          <span className="act-label">{t('card.knowIt')}</span>
          <span className="act-edge"><svg className="act-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></span>
        </button>
      </div>
    </div>
  );
}
