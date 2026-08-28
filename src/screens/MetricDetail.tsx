import { Link, useParams } from 'react-router-dom';
import { metricById, metricName } from '../data/metrics';

export function MetricDetail() {
  const { id } = useParams();
  const m = id ? metricById[id] : undefined;
  if (!m) return <div className="empty">Метрика не найдена.</div>;

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

      <h1 className="screen-title" style={{ fontSize: 'clamp(2rem, 6vw, 3.25rem)' }}>{m.name}</h1>
      <p className="body" style={{ fontSize: 'var(--t-20)', fontWeight: 600, color: 'var(--ink)', marginTop: 18, maxWidth: '24ch', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
        «{m.tagline}»
      </p>

      <div className="stack" style={{ marginTop: 48, gap: 40 }}>
        <Section label="Что это">
          <div className="body" style={{ fontSize: 'var(--t-18)', color: 'var(--ink)', fontWeight: 500 }}>{m.definition}</div>
        </Section>

        <Section label="Что измеряет">
          <div className="body">{m.measures}</div>
        </Section>

        {m.formula && (
          <Section label="Формула">
            <div className="fb-formula">{m.formula}</div>
            {m.formulaParts && Object.keys(m.formulaParts).length > 0 && (
              <ul style={{ margin: '12px 0 0 20px', display: 'flex', flexDirection: 'column', gap: 6, color: 'var(--ink-2)', fontSize: 'var(--t-14)', fontFamily: 'var(--font-sans)' }}>
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
        <Section label="Когда не использовать"><ul className="body" style={{ margin: '0 0 0 20px' }}>{m.whenNotToUse.map(x => <li key={x}>{x}</li>)}</ul></Section>
        <Section label="Типичные ошибки"><ul className="body" style={{ margin: '0 0 0 20px' }}>{m.commonMistakes.map(x => <li key={x}>{x}</li>)}</ul></Section>
        <Section label="Продуктовая работа"><div className="body">{m.productUse}</div></Section>
        <Section label="Как говорить на собеседовании"><div className="body" style={{ background: 'var(--surface)', border: '1px solid var(--rule)', borderRadius: 'var(--r-md)', padding: '18px 20px' }}>{m.interviewTip}</div></Section>

        <Section label="Кейс">
          <div style={{ borderLeft: '2px solid var(--rule-strong)', paddingLeft: 20 }}>
            <div className="body" style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>{m.caseStudy.title}</div>
            <div className="body">{m.caseStudy.text}</div>
          </div>
        </Section>

        <Section label="Связанные">
          <div className="tag-row">{m.relatedMetrics.map(rid => <Link key={rid} to={`/metric/${rid}`} className="chip">{metricName(rid)}</Link>)}</div>
        </Section>

        <Section label="Не путать с">
          <div className="tag-row">{m.confusedWith.map(rid => <Link key={rid} to={`/metric/${rid}`} className="chip">{metricName(rid)}</Link>)}</div>
        </Section>
      </div>
    </div>
  );
}
