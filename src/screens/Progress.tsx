import { Link } from 'react-router-dom';
import { groups } from '../data/taxonomy';
import { useLanguage } from '../state/language';
import { cards, cardsByGroup } from '../data/cards';
import { accuracy, masteredCount, seenCount, useStore } from '../state/store';

export function Progress() {
  const { state, reset } = useStore();
  const { t, formatDate, groupTitle } = useLanguage();
  const acc = accuracy(state);
  const mastered = masteredCount(state);
  const seen = seenCount(state);
  const pct = cards.length ? Math.round((seen / cards.length) * 100) : 0;
  const testHistory = state.testHistory ?? [];
  const recentTests = testHistory.slice(0, 5);
  const averageTestAccuracy = testHistory.length
    ? Math.round(testHistory.reduce((sum, result) => sum + result.accuracy, 0) / testHistory.length)
    : 0;

  const weak = cards
    .filter(c => (state.progress[c.id]?.wrong ?? 0) > 0)
    .map(c => ({ c, w: state.progress[c.id].wrong, ok: state.progress[c.id].correct }))
    .sort((a, b) => (b.w - b.ok) - (a.w - a.ok))
    .slice(0, 5);

  const confusedPairs: { a: string; b: string; n: number }[] = [];
  for (const c of cards) {
    const p = state.progress[c.id];
    if (!p) continue;
    for (const [other, n] of Object.entries(p.confused)) {
      if (n >= 2) confusedPairs.push({ a: c.answer, b: cards.find(x => x.id === other)?.answer ?? other, n });
    }
  }
  const topPairs = confusedPairs.sort((x, y) => y.n - x.n).slice(0, 4);

  const stats = [
    { num: mastered, unit: '', lbl: t('progress.kpiMastered') },
    { num: state.answered, unit: '', lbl: t('progress.kpiAnswers') },
    { num: acc, unit: '%', lbl: t('progress.kpiAccuracy') },
    { num: state.bestStreak, unit: '', lbl: t('progress.kpiStreak') },
    { num: testHistory.length, unit: '', lbl: t('progress.kpiTests') },
    { num: averageTestAccuracy, unit: '%', lbl: t('progress.kpiAvg') },
  ];

  return (
    <div className="screen progress-screen">
      <section className="progress-workspace">
        <header className="progress-head">
          <h1>{t('progress.title')}</h1>
          <span>{t('progress.explored', { seen, total: cards.length })}</span>
        </header>

        <div className="progress-overview">
          <div className="progress-overview-copy">
            <h2>{t('progress.coverage')}</h2>
            <p>{t('progress.coverageDesc')}</p>
          </div>
          <strong>{pct}%</strong>
          <div className="progress-overview-track" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={t('progress.overallCoverage')}>
            <span style={{ transform: `scaleX(${pct / 100})` }} />
          </div>
          <div className="progress-overview-foot">
            <span>{t('progress.reviewed', { n: seen })}</span>
            <span>{t('progress.masteredN', { n: mastered })}</span>
          </div>
        </div>

        <div className="progress-kpis">
          {stats.map(s => (
            <div className="progress-kpi" key={s.lbl}>
              <strong>{s.num}<span>{s.unit}</span></strong>
              <small>{s.lbl}</small>
            </div>
          ))}
        </div>

        <section className="progress-section">
          <div className="progress-section-head">
            <h2>{t('progress.topicCoverage')}</h2>
            <span>{t('progress.reviewedCards')}</span>
          </div>
          <div className="topic-progress-list">
          {groups.map(g => {
            const ms = cardsByGroup(g.id);
            const done = ms.filter(c => state.progress[c.id]?.seen).length;
            const fp = ms.length ? Math.round((done / ms.length) * 100) : 0;
            return (
              <div className="topic-progress-row" key={g.id}>
                <div>
                  <span>{groupTitle(g.id)}</span>
                  <strong>{done}/{ms.length} · {fp}%</strong>
                </div>
                <div className="topic-progress-track" role="progressbar" aria-valuenow={fp} aria-valuemin={0} aria-valuemax={100} aria-label={t('progress.topicCoverageAria', { topic: groupTitle(g.id) })}>
                  <span style={{ transform: `scaleX(${fp / 100})` }} />
                </div>
              </div>
            );
          })}
          </div>
        </section>

        <section className="progress-section">
          <div className="progress-section-head">
            <h2>{t('progress.testHistory')}</h2>
            <Link to="/test">{t('progress.startTest')}</Link>
          </div>
          {recentTests.length === 0 ? (
            <div className="progress-empty">
              <h3>{t('progress.noTests')}</h3>
              <p>{t('progress.noTestsDesc')}</p>
              <Link className="btn quiet" to="/test">{t('progress.createTest')}</Link>
            </div>
          ) : (
            <div className="test-history-list">
              {recentTests.map(result => (
                <div className="test-history-row" key={result.id}>
                  <div>
                    <strong>{result.mode.charAt(0).toUpperCase() + result.mode.slice(1)} {t('progress.testSuffix')}</strong>
                    <span>{formatDate(result.completedAt)} · {t('progress.questionsInRow', { n: result.total })}</span>
                  </div>
                  <span>{result.accuracy}%</span>
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="progress-diagnostics">
          <section className="progress-section diagnostic-panel">
            <div className="progress-section-head"><h2>{t('progress.toRevisit')}</h2><span>{weak.length}</span></div>
            {weak.length === 0 ? (
              <div className="diagnostic-empty">{t('progress.noWeak')}</div>
            ) : (
              <div className="diagnostic-list">
                {weak.map(({ c, w, ok }) => (
                  <Link to={`/metric/${c.id}`} key={c.id}>
                    <span>{c.answer}</span><strong>{t('progress.weakScore', { w, ok })}</strong>
                  </Link>
                ))}
              </div>
            )}
          </section>

          <section className="progress-section diagnostic-panel">
            <div className="progress-section-head"><h2>{t('progress.confused')}</h2><span>{topPairs.length}</span></div>
            {topPairs.length === 0 ? (
              <div className="diagnostic-empty">{t('progress.noMixups')}</div>
            ) : (
              <div className="diagnostic-list">
                {topPairs.map((pair, index) => (
                  <div key={`${pair.a}-${pair.b}-${index}`}><span>{pair.a} ↔ {pair.b}</span><strong>{t('progress.times', { n: pair.n })}</strong></div>
                ))}
              </div>
            )}
          </section>
        </div>

        <div className="progress-reset">
          <div><strong>{t('progress.startOver')}</strong><span>{t('progress.startOverDesc')}</span></div>
          <button className="btn ghost" onClick={() => { if (confirm(t('progress.confirmReset'))) reset(); }}>{t('progress.reset')}</button>
        </div>
      </section>
    </div>
  );
}
