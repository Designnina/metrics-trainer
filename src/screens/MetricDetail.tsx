import { Link, useParams } from 'react-router-dom';
import { metricById, metricName } from '../data/metrics';
import { categoryById, familyById } from '../data/taxonomy';
import { ArrowLeft } from 'iconoir-react';

export function MetricDetail() {
  const { id } = useParams();
  const m = id ? metricById[id] : undefined;
  if (!m) return <div className="empty">Метрика не найдена.</div>;

  const cat = categoryById[m.categoryId];
  const fam = familyById[m.family];

  const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <section>
      <div className="sec-label">{label}</div>
      {children}
    </section>
  );

  return (
    <div className="screen">
      <Link to="/library" className="tech" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 40 }}>
        <ArrowLeft width={14} height={14} /> Библиотека
      </Link>

      <header className="screen-head">
        <span className="screen-meta">{fam.title} / {cat.title}</span>
        <span className="screen-count">Card {m.id.slice(0, 2)}</span>
        <h1 className="screen-title" style={{ fontSize: 'clamp(2.25rem, 6vw, 3.75rem)' }}>{m.name}</h1>
      </header>
      <p className="screen-sub" style={{ fontSize: 'var(--t-question)', fontWeight: 600, color: 'var(--ink)', marginTop: 26, maxWidth: '22ch', lineHeight: 1.12, letterSpacing: '-0.015em' }}>
        «{m.tagline}»
      </p>

      <div className="stack" style={{ marginTop: 48, gap: 40 }}>
        <Section label="Что это">
          <div className="body" style={{ fontSize: 'var(--t-18)', color: 'var(--ink)' }}>{m.definition}</div>
        </Section>

        <Section label="Что измеряет">
          <div className="body">{m.measures}</div>
        </Section>

        {m.formula && (
          <Section label="Формула">
            <div className="fb-formula">{m.formula}</div>
            {m.formulaParts && Object.keys(m.formulaParts).length > 0 && (
              <ul style={{ margin: '12px 0 0 20px', display: 'flex', flexDirection: 'column', gap: 6, color: 'var(--ink-2)', fontSize: 'var(--t-14)' }}>
                {Object.entries(m.formulaParts).map(([k, v]) => <li key={k}><strong style={{ color: 'var(--ink)' }}>{k}</strong> — {v}</li>)}
              </ul>
            )}
          </Section>
        )}

        {m.numericExample && (
          <Section label="Пример">
            <div className="body" style={{ color: 'var(--ink)' }}>{m.numericExample.label} <strong>{m.numericExample.result}</strong></div>
          </Section>
        )}

        <Section label="Интерпретация"><div className="body">{m.interpretation}</div></Section>
        <Section label="Когда использовать"><ul className="body" style={{ margin: '0 0 0 20px' }}>{m.whenToUse.map(x => <li key={x}>{x}</li>)}</ul></Section>
        <Section label="Когда НЕ использовать"><ul className="body" style={{ margin: '0 0 0 20px' }}>{m.whenNotToUse.map(x => <li key={x}>{x}</li>)}</ul></Section>
        <Section label="Типичные ошибки"><ul className="body" style={{ margin: '0 0 0 20px' }}>{m.commonMistakes.map(x => <li key={x}>{x}</li>)}</ul></Section>
        <Section label="Продуктовая работа"><div className="body">{m.productUse}</div></Section>
        <Section label="Как говорить на собеседовании"><div className="body">{m.interviewTip}</div></Section>

        <Section label="Кейс">
          <div className="card" style={{ padding: 26 }}>
            <div className="tech" style={{ marginBottom: 10 }}>{m.caseStudy.title}</div>
            <div className="body" style={{ color: 'var(--ink)' }}>{m.caseStudy.text}</div>
          </div>
        </Section>

        <Section label="Связанные метрики">
          <div className="tag-row">{m.relatedMetrics.map(rid => <Link key={rid} to={`/metric/${rid}`} className="chip">{metricName(rid)}</Link>)}</div>
        </Section>

        <Section label="Не путать с">
          <div className="tag-row">{m.confusedWith.map(rid => <Link key={rid} to={`/metric/${rid}`} className="chip">{metricName(rid)}</Link>)}</div>
        </Section>
      </div>
    </div>
  );
}
