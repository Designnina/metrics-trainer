import { Link } from 'react-router-dom';
import { groups, domainsByGroup } from '../data/taxonomy';
import { useLanguage } from '../state/language';
import { cardsByGroup } from '../data/cards';
import { useStore } from '../state/store';

export function Groups() {
  const { state } = useStore();
  const { t, groupTitle, domainTitle } = useLanguage();
  return (
    <div className="screen">
      <Link to="/library" className="metric-detail-back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5m5 5-5-5 5-5" /></svg>
        {t('detail.back')}
      </Link>
      <header className="screen-head">
        <h1 className="screen-title">{t('groups.title')}</h1>
      </header>
      <p className="screen-sub">
        {t('groups.sub')}
      </p>

      <div style={{ marginTop: 40 }}>
        {groups.map((g, gi) => {
          const ms = cardsByGroup(g.id);
          const mastered = ms.filter(c => (state.progress[c.id]?.level ?? 0) >= 5).length;
          return (
            <Link to={`/library?f=${g.id}`} key={g.id} className="li li-link">
              <span className="li-num">{String(gi + 1).padStart(2, '0')}</span>
              <span className="grow">
                <span className="li-name">{groupTitle(g.id)}</span>
                <div className="li-meta">{t('groups.meta', { cards: ms.length, domains: g.domains.length })}</div>
                <div className="tag-row" style={{ marginTop: 10 }}>
                  {domainsByGroup(g.id).map(d => <span key={d.id} className="chip">{domainTitle(d.id)}</span>)}
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
