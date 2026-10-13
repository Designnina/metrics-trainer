import { Link, useParams } from 'react-router-dom';
import { cardById } from '../data/cards';
import { localizeCard } from '../i18n/cardOverrides';
import { useLanguage } from '../state/language';

export function MetricDetail() {
  const { id } = useParams();
  const { t, lang, domainTitle } = useLanguage();
  const raw = id ? cardById[id] : undefined;
  const card = raw ? localizeCard(raw, lang) : undefined;
  if (!card) return <div className="empty">{t('detail.notFound')}</div>;

  const dom = domainTitle(card.category);

  const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <section>
      <div className="sec-label">{label}</div>
      {children}
    </section>
  );

  return (
    <div className="screen metric-detail-screen">
      <article className="metric-detail-workspace">
        <Link to="/library" className="metric-detail-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5m5 5-5-5 5-5" /></svg>
          {t('detail.back')}
        </Link>

        <div className="metric-detail-meta">
          <span className="metric-detail-domain">{dom}</span>
          <span className="metric-detail-service">{t(`level.${card.level}` as string)}</span>
          <span className="metric-detail-service">{t(`mode.${card.mode}` as string)}</span>
        </div>
        <h1>{card.answer}</h1>
        <p className="metric-detail-question" lang={lang}>{card.frontQuestion}</p>
        {card.frontScenario && <p className="metric-detail-scenario" lang={lang}>{card.frontScenario}</p>}

        <div className="metric-detail-sections">
          <Section label={t('detail.brief')}><p lang={lang}>{card.backInfo}</p></Section>
          {card.formula && <Section label={t('card.formula')}><div className="metric-detail-formula">{card.formula}</div></Section>}
        </div>
      </article>
    </div>
  );
}
