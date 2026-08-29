import { Link, useParams } from 'react-router-dom';
import { cardById } from '../data/cards';
import { domainById } from '../data/taxonomy';

export function MetricDetail() {
  const { id } = useParams();
  const card = id ? cardById[id] : undefined;
  if (!card) return <div className="empty">Карточка не найдена.</div>;

  const dom = domainById[card.category];

  const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <section>
      <div className="sec-label">{label}</div>
      {children}
    </section>
  );

  return (
    <div className="screen">
      <Link to="/library" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 40, fontFamily: 'var(--font-sans)', fontSize: 'var(--t-14)', color: 'var(--ink-2)' }}>
        ← Библиотека
      </Link>

      <div className="tech" style={{ marginBottom: 14 }}>{dom?.title ?? card.category} · {card.level} · {card.mode}</div>
      <h1 className="screen-title" style={{ fontSize: 'clamp(2rem, 6vw, 3.25rem)' }}>{card.answer}</h1>
      <p className="body" style={{ fontSize: 'var(--t-20)', fontWeight: 600, color: 'var(--ink)', marginTop: 18, maxWidth: '30ch', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
        {card.frontQuestion}
      </p>
      {card.frontScenario && (
        <p className="body" style={{ marginTop: 14, maxWidth: '60ch' }}>{card.frontScenario}</p>
      )}

      <div className="stack" style={{ marginTop: 48, gap: 40 }}>
        <Section label="Суть">
          <div className="body" style={{ fontSize: 'var(--t-18)', color: 'var(--ink)', fontWeight: 500 }}>{card.backInfo}</div>
        </Section>
        {card.formula && (
          <Section label="Формула">
            <div className="fb-formula">{card.formula}</div>
          </Section>
        )}
      </div>
    </div>
  );
}
