import { useState } from 'react';
import type { Metric } from '../types';
import { categoryById } from '../data/taxonomy';
import { metricName } from '../data/metrics';

const cardCss = `
.flip-stage { perspective: 1400px; width: 100%; min-height: 340px; }
.flip-card { position: relative; width: 100%; min-height: 340px; transform-style: preserve-3d; transition: transform .55s cubic-bezier(.2,.7,.3,1); }
.flip-card.flipped { transform: rotateY(180deg); }
.flip-face { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; display: flex; flex-direction: column; }
.flip-back { transform: rotateY(180deg); }
@media (hover:hover) {
  .flip-card { transition-duration: .45s; }
}
`;

export function FlipCard({ metric }: { metric: Metric }) {
  const [flipped, setFlipped] = useState(false);
  const cat = categoryById[metric.categoryId];
  const confused = metric.confusedWith.slice(0, 3);

  return (
    <div className="flip-stage" style={{ marginBottom: 16 }}>
      <style>{cardCss}</style>
      <div
        className={`flip-card ${flipped ? 'flipped' : ''}`}
        role="button"
        aria-pressed={flipped}
        tabIndex={0}
        onClick={() => setFlipped(f => !f)}
        onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setFlipped(f => !f); } }}
        aria-label={flipped ? 'Показать лицевую сторону' : 'Перевернуть карточку'}
      >
        <div className="flip-face card" style={{ padding: 'var(--space-6)' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span className="chip chip-dark">{metric.name.toUpperCase()}</span>
            <span className="chip">{cat.title}</span>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, padding: '24px 0' }}>
            <div className="eyebrow">На какой вопрос отвечает</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.3, fontWeight: 600 }}>
              «{metric.tagline}»
            </div>
          </div>
          <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
            Tap to reveal ↓
          </div>
        </div>

        <div className="flip-face flip-back card" style={{ padding: 'var(--space-5)', background: 'var(--bg-soft)', border: 'none' }}>
          <div style={{ maxHeight: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 2 }}>Что это</div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>{metric.definition}</div>
            </div>
            {metric.formula && (
              <div>
                <div className="eyebrow" style={{ marginBottom: 4 }}>Формула</div>
                <div className="mono" style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 10, padding: '10px 12px' }}>{metric.formula}</div>
              </div>
            )}
            {metric.numericExample && (
              <div>
                <div className="eyebrow" style={{ marginBottom: 4 }}>Пример</div>
                <div style={{ fontSize: 14 }}>{metric.numericExample.label} <strong>{metric.numericExample.result}</strong></div>
              </div>
            )}
            <div>
              <div className="eyebrow" style={{ marginBottom: 4 }}>Кейс</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.55 }}>{metric.caseStudy.text}</div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 4 }}>Не путать с</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {confused.map(id => <span key={id} className="chip">{metricName(id)}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
