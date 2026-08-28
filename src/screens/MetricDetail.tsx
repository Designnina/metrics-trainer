import { Link, useParams } from 'react-router-dom';
import { metricById, metricName } from '../data/metrics';
import { categoryById, familyById } from '../data/taxonomy';
import { FamilyBadge } from '../components/MetricBadge';

export function MetricDetail() {
  const { id } = useParams();
  const m = id ? metricById[id] : undefined;
  if (!m) return <div className="empty">Метрика не найдена.</div>;

  const cat = categoryById[m.categoryId];
  const fam = familyById[m.family];

  const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div>
      <div className="eyebrow" style={{ marginBottom: 4 }}>{label}</div>
      {children}
    </div>
  );

  return (
    <div className="screen">
      <Link to="/library" className="tiny muted" style={{ display: 'inline-block', marginBottom: 12 }}>← Библиотека</Link>
      <div className="row-flex" style={{ marginBottom: 8 }}>
        <FamilyBadge family={m.family} dark />
        <span className="chip">{cat.title}</span>
      </div>
      <div className="h1">{m.name}</div>
      <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, marginBottom: 20, fontWeight: 600 }}>
        «{m.tagline}»
      </div>

      <div className="stack">
        <Section label="Что это">{m.definition}</Section>
        <Section label="Что измеряет">{m.measures}</Section>
        {m.formula && (
          <Section label="Формула">
            <div className="mono" style={{ background: 'var(--bg-soft)', borderRadius: 10, padding: '12px 14px' }}>{m.formula}</div>
            {m.formulaParts && Object.keys(m.formulaParts).length > 0 && (
              <ul style={{ margin: '8px 0 0 18px', fontSize: 13, color: 'var(--ink-2)' }}>
                {Object.entries(m.formulaParts).map(([k, v]) => <li key={k}><strong>{k}</strong> — {v}</li>)}
              </ul>
            )}
          </Section>
        )}
        {m.numericExample && (
          <Section label="Пример">
            <div style={{ fontSize: 14 }}>{m.numericExample.label} <strong>{m.numericExample.result}</strong></div>
          </Section>
        )}
        <Section label="Интерпретация">{m.interpretation}</Section>
        <Section label="Когда использовать">
          <ul style={{ margin: '4px 0 0 18px' }}>{m.whenToUse.map(x => <li key={x} style={{ fontSize: 14 }}>{x}</li>)}</ul>
        </Section>
        <Section label="Когда НЕ использовать">
          <ul style={{ margin: '4px 0 0 18px' }}>{m.whenNotToUse.map(x => <li key={x} style={{ fontSize: 14 }}>{x}</li>)}</ul>
        </Section>
        <Section label="Типичные ошибки">
          <ul style={{ margin: '4px 0 0 18px' }}>{m.commonMistakes.map(x => <li key={x} style={{ fontSize: 14 }}>{x}</li>)}</ul>
        </Section>
        <Section label="Продуктовая работа">{m.productUse}</Section>
        <Section label="Как говорить на собеседовании">
          <div className="card-soft" style={{ borderRadius: 12, padding: '12px 14px', fontSize: 14 }}>{m.interviewTip}</div>
        </Section>
        <Section label="Кейс">
          <div className="card-soft" style={{ borderRadius: 12, padding: '12px 14px', fontSize: 14 }}>
            <strong style={{ display: 'block', marginBottom: 4 }}>{m.caseStudy.title}</strong>
            {m.caseStudy.text}
          </div>
        </Section>
        <Section label="Связанные метрики">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {m.relatedMetrics.map(rid => (
              <Link key={rid} to={`/metric/${rid}`} className="chip">{metricName(rid)}</Link>
            ))}
          </div>
        </Section>
        <Section label="Не путать с">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {m.confusedWith.map(rid => (
              <Link key={rid} to={`/metric/${rid}`} className="chip">{metricName(rid)}</Link>
            ))}
          </div>
        </Section>
        <div className="tiny muted" style={{ fontFamily: 'var(--font-mono)' }}>{fam.title} / {cat.title}</div>
      </div>
    </div>
  );
}
