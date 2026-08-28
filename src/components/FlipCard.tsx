import { motion, useReducedMotion } from 'motion/react';
import type { Metric } from '../types';
import { categoryById } from '../data/taxonomy';
import { metricName } from '../data/metrics';

export function FlipCard({ metric, flipped, onFlip }: { metric: Metric; flipped: boolean; onFlip: (v: boolean) => void }) {
  const cat = categoryById[metric.categoryId];
  const reduce = useReducedMotion();
  const confused = metric.confusedWith.slice(0, 4);

  return (
    <motion.button
      type="button"
      className="flip-card"
      onClick={() => onFlip(!flipped)}
      onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); onFlip(!flipped); } }}
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={reduce ? { duration: 0 } : { duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      aria-pressed={flipped}
      aria-label={flipped ? 'Показать лицевую сторону' : 'Перевернуть и посмотреть ответ'}
      title="Нажми, чтобы перевернуть"
    >
      <div className="flip-inner">
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
      </div>
    </motion.button>
  );
}
