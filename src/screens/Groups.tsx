import { Link } from 'react-router-dom';
import { families, categoriesByFamily } from '../data/taxonomy';
import { metricsByFamily } from '../data/metrics';
import { useStore } from '../state/store';

export function Groups() {
  const { state } = useStore();
  return (
    <div className="screen">
      <header className="screen-head">
        <h1 className="screen-title">Группы<br />метрик</h1>
      </header>
      <p className="screen-sub">
        Пять семейств: продукт, бизнес, UX, юзабилити и эксперименты. Выберите группу, чтобы изучать её отдельно.
      </p>

      <div style={{ marginTop: 40 }}>
        {families.map((f, fi) => {
          const ms = metricsByFamily(f.id);
          const cats = categoriesByFamily(f.id);
          const mastered = ms.filter(m => (state.progress[m.id]?.level ?? 0) >= 5).length;
          return (
            <Link to={`/library?f=${f.id}`} key={f.id} className="li li-link">
              <span className="li-num">{String(fi + 1).padStart(2, '0')}</span>
              <span className="grow">
                <span className="li-name">{f.title} <span style={{ fontWeight: 400, color: 'var(--ink-3)', fontSize: 'var(--t-15)' }}>· {f.subtitle}</span></span>
                <div className="li-meta">{f.description}</div>
                <div className="tag-row" style={{ marginTop: 10 }}>
                  {cats.map(c => <span key={c.id} className="chip">{c.title}</span>)}
                </div>
              </span>
              <span className="li-right">{mastered}/{ms.length}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
