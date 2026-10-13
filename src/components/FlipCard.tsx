import { motion, useReducedMotion } from 'motion/react';
import type { TrainingCard } from '../types';
import { useLanguage } from '../state/language';

interface Props {
  card: TrainingCard;
  flipped: boolean;
  index: number;
}

/** Presentation card: question and scenario on the front, answer and explanation on the back. */
export function FlipCard({ card, flipped, index }: Props) {
  const reduce = useReducedMotion();
  const { t, lang, domainTitle } = useLanguage();
  void index;

  return (
    <div className="flip-scene">
      <motion.div
        className={`flip-face-wrap ${flipped ? 'is-flipped' : ''}`}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        aria-hidden="true"
      >
        <div className="flip-face flip-front">
          <div className="f-meta"><span className="f-domain">{domainTitle(card.category)}</span></div>
          <div className="f-q-wrap">
            <div className="f-q" lang={lang}>{card.frontQuestion}</div>
            <div className="f-scenario" lang={lang}>{card.frontScenario}</div>
          </div>
          <div className="f-card-foot">
            <span className="f-level">{t(`level.${card.level}` as string)}</span>
            <span className="flip-cue" aria-hidden="true">
              {/* Tabler Icons (MIT) — repeat, elegant white flip */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
            </span>
          </div>
        </div>

        <div className="flip-face flip-back">
          <div className="flip-back-card">
            <div className="flip-scroll">
              <div className="fb-sec fb-answer">
                <span className="fb-lbl">{t('card.answer')}</span>
                <div className="fb-answer-text">{card.answer}</div>
              </div>
              <div className="fb-sec">
                <span className="fb-lbl">{t('card.brief')}</span>
                <div className="fb-def">{card.backInfo}</div>
              </div>
              {card.formula && (
                <div className="fb-sec">
                <span className="fb-lbl">{t('card.formula')}</span>
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
