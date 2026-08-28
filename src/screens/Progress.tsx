import { families, categoriesByFamily } from '../data/taxonomy';
import { metrics } from '../data/metrics';
import { accuracy, masteredCount, seenCount, useStore } from '../state/store';
import { ProgressBar } from '../components/ProgressBar';

export function Progress() {
  const { state, reset } = useStore();
  const acc = accuracy(state);
  const mastered = masteredCount(state);
  const seen = seenCount(state);

  const weak = metrics
    .filter(m => (state.progress[m.id]?.wrong ?? 0) > 0)
    .map(m => ({ m, w: state.progress[m.id].wrong, c: state.progress[m.id].correct }))
    .sort((a, b) => (b.w - b.c) - (a.w - a.c))
    .slice(0, 5);

  const confusedPairs: { a: string; b: string; n: number }[] = [];
  for (const m of metrics) {
    const p = state.progress[m.id];
    if (!p) continue;
    for (const [other, n] of Object.entries(p.confused)) {
      if (n >= 2) confusedPairs.push({ a: m.name, b: metrics.find(x => x.id === other)?.name ?? other, n });
    }
  }
  const topPairs = confusedPairs.sort((x, y) => y.n - x.n).slice(0, 4);

  return (
    <div className="screen">
      <div className="eyebrow">Progress</div>
      <div className="h1" style={{ fontSize: 26 }}>Прогресс</div>

      <div className="stat-grid" style={{ marginBottom: 16 }}>
        <div className="stat"><div className="num">{seen}<span className="tiny" style={{ fontSize: 13 }}>/{metrics.length}</span></div><div className="lbl">Метрик изучено</div></div>
        <div className="stat"><div className="num">{mastered}</div><div className="lbl">Освоено</div></div>
        <div className="stat"><div className="num">{state.answered}</div><div className="lbl">Ответов</div></div>
        <div className="stat"><div className="num">{acc}%</div><div className="lbl">Точность</div></div>
        <div className="stat"><div className="num">{state.bestStreak}</div><div className="lbl">Лучшая серия</div></div>
        <div className="stat"><div className="num">{state.streak}</div><div className="lbl">Текущая серия</div></div>
      </div>

      <ProgressBar value={seen} max={metrics.length} label="Общий прогресс" />
      <div style={{ height: 24 }} />

      <div className="eyebrow" style={{ marginBottom: 12 }}>По группам</div>
      <div className="stack-sm">
        {families.map(f => {
          const ms = metrics.filter(m => m.family === f.id);
          const done = ms.filter(m => state.progress[m.id]?.seen).length;
          return (
            <div key={f.id}>
              <div className="row-flex" style={{ marginBottom: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{f.title} <span className="muted tiny">({f.subtitle})</span></span>
                <span className="tiny muted">{done}/{ms.length}</span>
              </div>
              <ProgressBar value={done} max={ms.length} />
            </div>
          );
        })}
      </div>

      <hr className="divider" />

      <div className="eyebrow" style={{ marginBottom: 12 }}>Слабые метрики</div>
      {weak.length === 0 ? (
        <div className="empty" style={{ padding: '24px 0' }}>Пока нет слабых мест — отвечайте в Test.</div>
      ) : (
        <div className="list">
          {weak.map(({ m, w, c }) => (
            <div key={m.id} className="row">
              <div className="grow"><div style={{ fontWeight: 600 }}>{m.name}</div><div className="meta">ошибок {w} · верно {c}</div></div>
            </div>
          ))}
        </div>
      )}

      <div style={{ height: 24 }} />
      <div className="eyebrow" style={{ marginBottom: 12 }}>Самые путающиеся пары</div>
      {topPairs.length === 0 ? (
        <div className="empty" style={{ padding: '24px 0' }}>Пока нет confusion-пар.</div>
      ) : (
        <div className="list">
          {topPairs.map((p, i) => (
            <div key={i} className="row">
              <div className="grow">
                <div style={{ fontWeight: 600 }}>{p.a} ↔ {p.b}</div>
                <div className="meta">путали {p.n} раз</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <hr className="divider" />
      <button className="btn ghost full" onClick={() => { if (confirm('Сбросить весь прогресс?')) reset(); }}>Сбросить прогресс</button>
    </div>
  );
}
