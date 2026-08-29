import { Link } from 'react-router-dom';
import { groups, domainsByGroup } from '../data/taxonomy';
import { cardsByGroup } from '../data/cards';
import { useStore } from '../state/store';

export function Groups() {
  const { state } = useStore();
  return (
    <div className="screen">
      <header className="screen-head">
        <h1 className="screen-title">Группы<br />карточек</h1>
      </header>
      <p className="screen-sub">
        Пять направлений и восемнадцать доменов профессиональной лексики: метрики, эксперименты, исследования, дизайн, доставка, бизнес, технический и AI-словарь.
      </p>

      <div style={{ marginTop: 40 }}>
        {groups.map((g, gi) => {
          const ms = cardsByGroup(g.id);
          const mastered = ms.filter(c => (state.progress[c.id]?.level ?? 0) >= 5).length;
          return (
            <Link to={`/library?f=${g.id}`} key={g.id} className="li li-link">
              <span className="li-num">{String(gi + 1).padStart(2, '0')}</span>
              <span className="grow">
                <span className="li-name">{g.title}</span>
                <div className="li-meta">{ms.length} карточек · {g.domains.length} доменов</div>
                <div className="tag-row" style={{ marginTop: 10 }}>
                  {domainsByGroup(g.id).map(d => <span key={d.id} className="chip">{d.title}</span>)}
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
