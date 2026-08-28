import { useMemo, useState } from 'react';
import { questions } from '../data/questions';
import { useStore } from '../state/store';
import { OptionList } from '../components/OptionList';
import { metricName } from '../data/metrics';
import { Check, Xmark } from 'iconoir-react';
import type { TestQuestion } from '../types';

export function Test() {
  const { state, answer } = useStore();
  const [queue, setQueue] = useState<TestQuestion[]>([]);
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<string[] | null>(null);
  const [revealed, setRevealed] = useState(false);

  const primary = queue[qi];
  const correctNow = useMemo(() => {
    if (!primary || !selected) return null;
    return primary.correct.slice().sort().join() === selected.slice().sort().join();
  }, [primary, selected]);

  const buildQueue = () => {
    const weak = questions
      .filter(q => q.metricIds.some(mid => (state.progress[mid]?.wrong ?? 0) > (state.progress[mid]?.correct ?? 0)))
      .sort(() => Math.random() - 0.5);
    const rest = questions
      .filter(q => !weak.includes(q))
      .sort(() => Math.random() - 0.5);
    return [...weak, ...rest].slice(0, 12);
  };

  const typeLabel: Record<string, string> = {
    identify: 'Определи метрику', compare: 'Сравни метрики', multi: 'Выбери все подходящие',
    calc: 'Рассчитай', interpret: 'Интерпретируй результат', select: 'Выбери набор метрик', mistake: 'Найди ошибку',
  };

  if (!primary) {
    return (
      <div className="screen">
        <header className="screen-head">
          <span className="screen-meta">Test / 02</span>
          <span className="screen-count">{String(questions.length).padStart(2, '0')} вопросов</span>
          <h1 className="screen-title">Проверка<br />знаний</h1>
        </header>
        <p className="screen-sub">
          7 типов заданий: определить метрику, сравнить, рассчитать, интерпретировать, найти ошибку. Слабым темам вопросы достаются чаще.
        </p>
        <div style={{ marginTop: 40 }}>
          <button className="btn" onClick={() => { const q = buildQueue(); setQueue(q); setQi(0); setSelected(null); setRevealed(false); }}>
            Начать тест
          </button>
        </div>
        <div className="tech" style={{ marginTop: 22 }}>Тем: {questions.length} · слабая память → повтор пар-метрик</div>
      </div>
    );
  }

  const submit = () => {
    if (!selected || revealed) return;
    setRevealed(true);
    for (const mid of primary.metricIds) {
      const confused = primary.options
        .filter(o => selected.includes(o.id) && !primary.correct.includes(o.id))
        .map(o => o.metricId).find(Boolean);
      answer(mid, correctNow === true, confused);
    }
  };

  const next = () => {
    if (qi + 1 >= queue.length) { setQueue([]); return; }
    setQi(qi + 1); setSelected(null); setRevealed(false);
  };

  return (
    <div className="screen">
      <header className="screen-head">
        <span className="screen-meta">Test / {String(qi + 1).padStart(2, '0')}—{String(queue.length).padStart(2, '0')}</span>
        <span className="screen-count">{typeLabel[primary.type]}</span>
        <h1 className="screen-title">{typeLabel[primary.type]}</h1>
      </header>

      <div style={{ marginTop: 34 }}>
        <div className="tech" style={{ marginBottom: 12 }}>Level {primary.level}</div>
        <div className="h2" style={{ maxWidth: '30ch', lineHeight: 1.15 }}>{primary.prompt}</div>
        {primary.situation && (
          <div style={{ marginTop: 18, maxWidth: '60ch', color: 'var(--ink-2)', fontSize: 'var(--t-15)', lineHeight: 1.55 }}>
            {primary.situation}
          </div>
        )}
      </div>

      <div style={{ marginTop: 34 }}>
        <OptionList q={primary} selected={selected} revealed={revealed} onSelect={setSelected} />
      </div>

      {!revealed ? (
        <button className="btn" style={{ marginTop: 30 }} onClick={submit} disabled={!selected}>
          Проверить
        </button>
      ) : (
        <>
          <div className={`feedback ${correctNow ? 'ok' : 'bad'}`} style={{ marginTop: 30 }} role="status">
            <div className="fb-head">
              {correctNow ? <Check width={18} height={18} /> : <Xmark width={18} height={18} />}
              {correctNow ? 'Верно' : 'Неверно'} · {primary.correct.map(id => primary.options.find(o => o.id === id)?.label).join(', ')}
            </div>
            <div className="fb-body"><strong>Почему:</strong> {primary.why}</div>
            <div className="fb-body" style={{ marginTop: 12 }}>
              <strong>Почему нет:</strong>
              <ul>
                {primary.options.filter(o => !primary.correct.includes(o.id)).map(o => (
                  <li key={o.id}>{o.label} — {primary.whyNot[o.id] ?? 'не подходит'}</li>
                ))}
              </ul>
            </div>
          </div>
          <button className="btn" style={{ marginTop: 24 }} onClick={next}>
            {qi + 1 >= queue.length ? 'Завершить' : 'Следующий вопрос'}
          </button>
        </>
      )}

      <div className="tech" style={{ marginTop: 26 }}>Темы: {primary.metricIds.map(metricName).join(' · ')}</div>
    </div>
  );
}
