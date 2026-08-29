import { motion, useReducedMotion } from 'motion/react';
import type { TrainingCard } from '../types';
import { domainTitle } from '../data/taxonomy';

interface Props {
  card: TrainingCard;
  flipped: boolean;
  index: number;
}

/** Презентационная карточка: front = вопрос + ситуация, back = термин + пояснение. */
export function FlipCard({ card, flipped, index }: Props) {
  const reduce = useReducedMotion();

  return (
    <div className="flip-scene">
      <motion.div
        className="flip-face-wrap"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        aria-hidden="true"
      >
        {/* FRONT — question + scenario; the term never appears here */}
        <div className="flip-face flip-front">
          <div className="f-meta">{String(index + 1).padStart(2, '0')} · {domainTitle(card.category)} · {card.level}</div>
          <div className="f-q-wrap">
            <div className="f-q">{card.frontQuestion}</div>
            <div className="f-scenario">{card.frontScenario}</div>
          </div>
        </div>

        {/* BACK — answer first, then explanation */}
        <div className="flip-face flip-back">
          <div className="flip-back-card">
            <div className="flip-scroll">
              <div className="fb-sec fb-answer">
                <span className="fb-lbl">Ответ</span>
                <div className="fb-answer-text">{card.answer}</div>
              </div>
              <div className="fb-sec">
                <span className="fb-lbl">Суть</span>
                <div className="fb-def">{card.backInfo}</div>
              </div>
              {card.formula && (
                <div className="fb-sec">
                  <span className="fb-lbl">Формула</span>
                  <div className="fb-formula">{card.formula}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
