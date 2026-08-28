import { motion, useReducedMotion } from 'motion/react';
import type { Metric } from '../types';
import { categoryById } from '../data/taxonomy';
import { metricName } from '../data/metrics';

/** Презентационная карточка: только визуальный flip. Вся интерактивность — в SwipeDeck. */
export function FlipCard({ metric, flipped }: { metric: Metric; flipped: boolean }) {
  const cat = categoryById[metric.categoryId];
  const reduce = useReducedMotion();
  const confused = metric.confusedWith.slice(0, 4);

  return (
    <div className="flip-scene">
      {/* The rotating element IS the preserve-3d parent of the two faces. */}
      <motion.div
        className="flip-face-wrap"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        aria-hidden="true"
      >
        {/* FRONT */}
        <div className="flip-face flip-front card" style={{ padding: 'var(--sp-6)' }}>
          <div className="flip-top">
            <span className="chip chip-dark">{metric.name.toUpperCase()}</span>
            <span className="chip">{cat.title}</span>
          </div>
          <div className="flip-mid">
            <div className="eyebrow">На какой вопрос отвечает</div>
            <div className="flip-quote">«{metric.tagline}»</div>
          </div>
          <div className="flip-hint">Нажми — перевернуть</div>
        </div>

        {/* BACK */}
        <div className="flip-face flip-back">
          <div className="card flip-back-card">
            <div className="flip-scroll">
              <div><div className="eyebrow">Что это</div><div className="flip-def">{metric.definition}</div></div>
              {metric.formula && (
                <div><div className="eyebrow">Формула</div><div className="mono flip-formula">{metric.formula}</div></div>
              )}
              {metric.numericExample && (
                <div><div className="eyebrow">Пример</div><div className="flip-ex">{metric.numericExample.label} <strong>{metric.numericExample.result}</strong></div></div>
              )}
              <div><div className="eyebrow">Кейс</div><div className="flip-ex">{metric.caseStudy.text}</div></div>
              <div><div className="eyebrow">Не путать с</div>
                <div className="flip-chips">{confused.map(id => <span key={id} className="chip">{metricName(id)}</span>)}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
