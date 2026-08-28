import { useMemo, useState } from 'react';
import { questions } from '../data/questions';
import { useStore } from '../state/store';
import { OptionList } from '../components/OptionList';
import { metricName } from '../data/metrics';
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
    const ok = primary.correct.slice().sort().join() === selected.slice().sort().join();
    return ok;
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

  if (!primary) {
    return (
      <div className="screen">
        <div className="eyebrow">Test</div>
        <div className="h1" style={{ fontSize: 26 }}>Проверка знаний</div>
        <p className="sub" style={{ marginBottom: 24 }}>
          7 типов заданий: определить метрику, сравнить, рассчитать, интерпретировать, найти ошибку. Слабым темам вопросы достаются чаще.
        </p>
        <button className="btn full" onClick={() => { const q = buildQueue(); setQueue(q); setQi(0); setSelected(null); setRevealed(false); }}>
          Начать тест
        </button>
        <div style={{ marginTop: 12 }} className="tiny muted">Тем: {questions.length} · Слабая память → повтор пар-метрик</div>
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

  const typeLabel: Record<string, string> = {
    identify: 'Определи метрику', compare: 'Сравни метрики', multi: 'Выбери все подходящие',
    calc: 'Рассчитай', interpret: 'Интерпретируй результат', select: 'Выбери набор метрик', mistake: 'Найди ошибку',
  };

  return (
    <div className="screen">
      <div className="row-flex" style={{ marginBottom: 16 }}>
        <div>
          <div className="eyebrow">Test</div>
          <div className="h2">{typeLabel[primary.type]}</div>
        </div>
        <div className="mono muted">{qi + 1} / {queue.length}</div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="mono muted" style={{ marginBottom: 8 }}>LEVEL {primary.level}</div>
        <div style={{ fontSize: 17, fontWeight: 650, lineHeight: 1.4 }}>{primary.prompt}</div>
        {primary.situation && (
          <div className="card-soft" style={{ borderRadius: 12, padding: '12px 14px', marginTop: 12, fontSize: 14 }}>
            <div className="eyebrow" style={{ marginBottom: 2 }}>Ситуация</div>
            {primary.situation}
          </div>
        )}
      </div>

      <OptionList q={primary} selected={selected} revealed={revealed} onSelect={setSelected} />

      {!revealed ? (
        <button className="btn full" style={{ marginTop: 16 }} onClick={submit} disabled={!selected}>
          Проверить
        </button>
      ) : (
        <>
          <div className={`feedback ${correctNow ? 'ok' : 'bad'}`} style={{ marginTop: 16 }} role="status">
            <div style={{ fontWeight: 700, marginBottom: 6 }}>
              {correctNow ? '✓ Верно' : '✗ Неверно'} · Правильно: {primary.correct.map(id => primary.options.find(o => o.id === id)?.label).join(', ')}
            </div>
            <div style={{ fontSize: 14 }}><strong>Почему:</strong> {primary.why}</div>
            <div style={{ fontSize: 14, marginTop: 8 }}>
              <strong>Почему нет:</strong>
              <ul style={{ margin: '6px 0 0 18px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {primary.options.filter(o => !primary.correct.includes(o.id)).map(o => (
                  <li key={o.id}>{o.label} — {primary.whyNot[o.id] ?? 'не подходит'}</li>
                ))}
              </ul>
            </div>
          </div>
          <button className="btn full" style={{ marginTop: 16 }} onClick={next}>
            {qi + 1 >= queue.length ? 'Завершить' : 'Следующий вопрос'}
          </button>
        </>
      )}

      <div style={{ marginTop: 16 }} className="tiny muted">
        Темы: {primary.metricIds.map(metricName).join(' · ')}
      </div>
    </div>
  );
}
