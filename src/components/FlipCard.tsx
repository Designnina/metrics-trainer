import { motion, useReducedMotion } from 'motion/react';
import type { Metric } from '../types';
import { categoryById, familyById } from '../data/taxonomy';
import { metricName } from '../data/metrics';

interface Props {
  metric: Metric;
  flipped: boolean;
  index: number;
}

/** Презентационная карточка: только визуальный flip. Интерактивность — в SwipeDeck. */
export function FlipCard({ metric, flipped, index }: Props) {
  const cat = categoryById[metric.categoryId];
  const fam = familyById[metric.family];
  const reduce = useReducedMotion();
  const confused = metric.confusedWith.slice(0, 4);

  return (
    <div className="flip-scene">
      <motion.div
        className="flip-face-wrap"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        aria-hidden="true"
      >
        {/* FRONT */}
        <div className="flip-face flip-front">
          <div className="f-top">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span>{fam.title}</span>
          </div>
          <div className="f-name">{metric.name}</div>
          <div className="f-rule" />
          <div className="f-q">{metric.tagline}</div>
          <div className="f-foot">
            <span>{cat.title} / {metric.categoryId.split('-')[0]}</span>
            <span>FLIP / SPACE</span>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-face flip-back">
          <div className="flip-back-card">
            <div className="flip-scroll">
              <div className="fb-sec">
                <span className="fb-lbl">Что это</span>
                <div className="fb-def">{metric.definition}</div>
              </div>
              {metric.formula && (
                <div className="fb-sec">
                  <span className="fb-lbl">Формула</span>
                  <div className="fb-formula">{metric.formula}</div>
                </div>
              )}
              {metric.numericExample && (
                <div className="fb-sec">
                  <span className="fb-lbl">Пример</span>
                  <div className="fb-ex">{metric.numericExample.label} <strong>{metric.numericExample.result}</strong></div>
                </div>
              )}
              <div className="fb-sec">
                <span className="fb-lbl">Кейс</span>
                <div className="fb-ex">{metric.caseStudy.text}</div>
              </div>
              <div className="fb-sec">
                <span className="fb-lbl">Не путать с</span>
                <div className="fb-chips">{confused.map(id => <span key={id} className="chip">{metricName(id)}</span>)}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
