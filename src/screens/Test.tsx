import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { generateTest, type SessionQuestion, type TestMode } from '../data/testGenerator';
import { cards } from '../data/cards';
import { localizeCards } from '../i18n/cardOverrides';
import { useLanguage } from '../state/language';
import { useStore } from '../state/store';
import { OptionList } from '../components/OptionList';
import type { TestSessionResult, TestTopicResult } from '../types';

type TestLength = 10 | 20 | 30;
type Response = { questionId: string; correct: boolean; points: number; maxPoints: number };

export function Test() {
  const { state, answer, completeTest } = useStore();
  const { t, groupTitle, lang } = useLanguage();
  const pool = useMemo(() => localizeCards(cards, lang), [lang]);
  const testText = useMemo(() => ({
    formulaPrompt: t('test.formulaPrompt'),
    descriptionPrompt: t('test.descriptionPrompt'),
    differentConcept: t('test.differentConcept'),
    differentConceptFull: (term: string, info: string) => t('test.differentConceptFull', { term, info }),
  }), [t]);
  const modeDetails: Record<TestMode, { title: string; description: string }> = {
    balanced: { title: t('test.balancedTitle'), description: t('test.balancedDesc') },
    weak: { title: t('test.weakTitle'), description: t('test.weakDesc') },
    challenge: { title: t('test.challengeTitle'), description: t('test.challengeDesc') },
  };
  const typeLabel: Record<string, string> = {
    identify: t('test.type.identify'), compare: t('test.type.compare'), multi: t('test.type.multi'), calc: t('test.type.calc'),
    interpret: t('test.type.interpret'), select: t('test.type.select'), mistake: t('test.type.mistake'),
  };
  const [mode, setMode] = useState<TestMode>('balanced');
  const [length, setLength] = useState<TestLength>(20);
  const [queue, setQueue] = useState<SessionQuestion[]>([]);
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<string[] | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [responses, setResponses] = useState<Response[]>([]);
  const [summary, setSummary] = useState<TestSessionResult | null>(null);
  const questionHeadingRef = useRef<HTMLHeadingElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const primary = queue[qi];
  const lastResult = state.testHistory?.[0];
  const correctNow = useMemo(() => {
    if (!primary || !selected) return null;
    return primary.correct.slice().sort().join() === selected.slice().sort().join();
  }, [primary, selected]);

  useEffect(() => {
    if (primary) questionHeadingRef.current?.focus();
  }, [primary?.id]);

  useEffect(() => {
    if (revealed) nextButtonRef.current?.focus();
  }, [revealed]);

  const startTest = (nextMode = mode, nextLength = length) => {
    setMode(nextMode);
    setLength(nextLength);
    setQueue(generateTest(nextLength, nextMode, state, pool, testText));
    setQi(0);
    setSelected(null);
    setRevealed(false);
    setResponses([]);
    setSummary(null);
  };

  const submit = () => {
    if (!selected || revealed || !primary) return;
    const isCorrect = correctNow === true;
    const confused = primary.options
      .filter(option => selected.includes(option.id) && !primary.correct.includes(option.id))
      .map(option => option.metricId)
      .find(Boolean);

    answer(primary.sourceCardId, isCorrect, confused);
    setResponses(current => [...current, {
      questionId: primary.id,
      correct: isCorrect,
      points: isCorrect ? primary.maxPoints : 0,
      maxPoints: primary.maxPoints,
    }]);
    setRevealed(true);
  };

  const finish = (completedResponses: Response[]) => {
    const correct = completedResponses.filter(response => response.correct).length;
    const points = completedResponses.reduce((sum, response) => sum + response.points, 0);
    const maxPoints = completedResponses.reduce((sum, response) => sum + response.maxPoints, 0);
    const topicMap = new Map<string, TestTopicResult>();

    queue.forEach((question, index) => {
      const response = completedResponses[index];
      const current = topicMap.get(question.group) ?? { group: question.group, correct: 0, total: 0, points: 0, maxPoints: 0 };
      current.total += 1;
      current.maxPoints += question.maxPoints;
      if (response?.correct) current.correct += 1;
      current.points += response?.points ?? 0;
      topicMap.set(question.group, current);
    });

    const result: TestSessionResult = {
      id: `test-${Date.now()}`,
      completedAt: Date.now(),
      mode,
      correct,
      total: queue.length,
      points,
      maxPoints,
      accuracy: queue.length ? Math.round((correct / queue.length) * 100) : 0,
      topics: [...topicMap.values()],
    };
    completeTest(result);
    setSummary(result);
  };

  const next = () => {
    if (qi + 1 >= queue.length) {
      finish(responses);
      return;
    }
    setQi(current => current + 1);
    setSelected(null);
    setRevealed(false);
  };

  if (summary) {
    return (
      <div className="screen test-screen">
        <section className="test-workspace test-results">
          <div className="test-result-card">
            <div className="test-result-top"><span>{modeDetails[summary.mode].title}</span><span>{summary.correct} / {summary.total}</span></div>
            <div className="test-score"><strong>{summary.accuracy}%</strong><span>{t('test.recallAccuracy')}</span></div>
            <div className="test-weighted-score"><span>{t('test.weighted')}</span><strong>{summary.points} / {summary.maxPoints}</strong></div>
          </div>

          <div className="test-topic-results">
            {summary.topics.map(topic => {
              const pct = topic.total ? Math.round((topic.correct / topic.total) * 100) : 0;
              return (
                <div className="test-topic-result" key={topic.group}>
                  <div><span>{groupTitle(topic.group)}</span><strong>{topic.correct}/{topic.total}</strong></div>
                  <div className="test-topic-track"><span style={{ transform: `scaleX(${pct / 100})` }} /></div>
                </div>
              );
            })}
          </div>

          <div className="test-result-actions">
            <button className="btn accent" onClick={() => startTest(mode, length)}>{t('test.newSet')}</button>
            <button className="btn ghost" onClick={() => { setSummary(null); setQueue([]); }}>{t('test.changeSetup')}</button>
            <Link className="btn quiet" to="/progress">{t('test.viewProgress')}</Link>
          </div>
        </section>
      </div>
    );
  }

  if (!primary) {
    return (
      <div className="screen test-screen">
        <section className="test-workspace">
          <header className="test-head"><h1>{t('test.title')}</h1><span>{t('test.concepts', { n: cards.length })}</span></header>
          <p className="test-intro">{t('test.intro')}</p>

          <div className="test-setup">
            <fieldset>
              <legend>{t('test.focus')}</legend>
              <div className="test-mode-list">
                {(Object.keys(modeDetails) as TestMode[]).map(value => (
                  <button key={value} className={`test-mode ${mode === value ? 'on' : ''}`} onClick={() => setMode(value)} aria-pressed={mode === value}>
                    <span>{modeDetails[value].title}</span><small>{modeDetails[value].description}</small>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>{t('test.length')}</legend>
              <div className="test-lengths">
                {([10, 20, 30] as TestLength[]).map(value => (
                  <button key={value} className={length === value ? 'on' : ''} onClick={() => setLength(value)} aria-pressed={length === value}>
                    <strong>{value}</strong><span>{t('test.questionsUnit')}</span>
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="test-start-row">
            <button className="btn accent" onClick={() => startTest()}>{t('test.build')}</button>
            {lastResult && <span>{t('test.lastResult', { pct: lastResult.accuracy, mode: modeDetails[lastResult.mode].title })}</span>}
          </div>
        </section>
      </div>
    );
  }

  const progressPct = Math.round((qi / queue.length) * 100);
  const selectedWrong = primary.options.find(option => selected?.includes(option.id) && !primary.correct.includes(option.id));

  return (
    <div className="screen test-screen">
      <section className="test-workspace test-session">
        <header className="test-session-head">
          <span>{typeLabel[primary.type]}</span>
          <div><strong>{String(qi + 1).padStart(2, '0')}</strong><span>/</span><span>{String(queue.length).padStart(2, '0')}</span></div>
        </header>

        <div className="test-progress" role="progressbar" aria-label={t('test.progress')} aria-valuenow={progressPct} aria-valuemin={0} aria-valuemax={100}>
          <span style={{ transform: `scaleX(${progressPct / 100})` }} />
        </div>

        <div className="test-question" key={primary.id} aria-live="polite">
          <h1 ref={questionHeadingRef} tabIndex={-1}>{primary.prompt}</h1>
          {primary.situation && <p>{primary.situation}</p>}
        </div>

        <OptionList q={primary} selected={selected} revealed={revealed} onSelect={setSelected} />

        {!revealed ? (
          <button className="btn test-submit" onClick={submit} disabled={!selected}>{t('test.check')}</button>
        ) : (
          <div className={`test-feedback ${correctNow ? 'ok' : 'bad'}`} role="status">
            <div className="test-feedback-mark" aria-hidden="true">
              {correctNow
                ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4L19 6" /></svg>
                : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="m7 7 10 10M17 7 7 17" /></svg>}
            </div>
            <div>
              <strong>{correctNow ? t('test.correct') : t('test.answerIs', { label: primary.options.find(option => primary.correct.includes(option.id))?.label ?? '' })}</strong>
              <p>{primary.why}</p>
              {!correctNow && selectedWrong && <small>{primary.whyNot[selectedWrong.id]}</small>}
            </div>
          </div>
        )}

        {revealed && <button ref={nextButtonRef} className="btn test-next" onClick={next}>{qi + 1 >= queue.length ? t('test.seeResult') : t('test.next')}</button>}
      </section>
    </div>
  );
}
