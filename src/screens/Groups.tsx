import { Link } from 'react-router-dom';
import { families, categoriesByFamily } from '../data/taxonomy';
import { metricsByFamily } from '../data/metrics';
import { useStore } from '../state/store';

export function Groups() {
  const { state } = useStore();
  return (
    <div className="screen">
      <div className="eyebrow">Groups</div>
      <div className="h1" style={{ fontSize: 26 }}>Разделение по группам</div>
      <p className="sub" style={{ marginBottom: 20 }}>
        Пять семейств: продукт, бизнес, UX, юзабилити и эксперименты. Выберите группу, чтобы изучать её отдельно.
      </p>
      <div className="stack">
        {families.map(f => {
          const ms = metricsByFamily(f.id);
          const cats = categoriesByFamily(f.id);
          const mastered = ms.filter(m => (state.progress[m.id]?.level ?? 0) >= 5).length;
          return (
            <div key={f.id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <Link to={`/library?f=${f.id}`} style={{ display: 'block', padding: 'var(--sp-5)', background: 'var(--surface-2)', borderBottom: '1px solid var(--rule)' }}>
                <div className="row-flex">
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', letterSpacing: '.1em', fontSize: 13, fontWeight: 600 }}>{f.title}</div>
                    <div style={{ fontSize: 14, marginTop: 4, color: 'var(--ink-2)' }}>{f.subtitle}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 22, fontWeight: 700 }}>{ms.length}</div>
                    <div className="tiny" style={{ color: 'var(--ink-3)' }}>метрик</div>
                  </div>
                </div>
              </Link>
              <div style={{ padding: '14px 20px 18px' }}>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 8 }}>{f.description}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {cats.map(c => (
                    <Link key={c.id} to={`/library?f=${f.id}`} className="chip">{c.title}</Link>
                  ))}
                </div>
                <div className="tiny muted" style={{ marginTop: 10 }}>Освоено: {mastered} из {ms.length}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
