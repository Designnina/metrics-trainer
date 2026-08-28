import type { TestQuestion } from '../types';

export function OptionList({ q, selected, revealed, onSelect }: {
  q: TestQuestion;
  selected: string[] | null;
  revealed: boolean;
  onSelect: (ids: string[]) => void;
}) {
  const isMulti = q.type === 'multi';
  const toggle = (id: string) => {
    if (revealed) return;
    if (isMulti) {
      const cur = selected ?? [];
      onSelect(cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id]);
    } else {
      onSelect([id]);
    }
  };
  const optionClass = (id: string) => {
    let cls = 'option';
    if (selected?.includes(id)) cls += ' selected';
    if (revealed) {
      if (q.correct.includes(id)) cls += ' correct';
      else if (selected?.includes(id)) cls += ' wrong';
    }
    return cls;
  };
  return (
    <div className="stack-sm" role="group" aria-label="Варианты ответа">
      {q.options.map(o => (
        <button key={o.id} className={optionClass(o.id)} onClick={() => toggle(o.id)} disabled={revealed}>
          <span className="key" aria-hidden="true">{o.id.toUpperCase()}</span>
          <span>{o.label}</span>
          {revealed && q.correct.includes(o.id) && <span aria-label="верно">✓</span>}
          {revealed && !q.correct.includes(o.id) && selected?.includes(o.id) && <span aria-label="неверно">✗</span>}
        </button>
      ))}
    </div>
  );
}
