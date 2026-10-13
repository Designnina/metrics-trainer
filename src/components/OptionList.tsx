import type { TestQuestion } from '../types';
import { useLanguage } from '../state/language';

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
  const { t } = useLanguage();
  return (
    <div className="option-list" role="group" aria-label={t('test.optionsLabel')}>
      {q.options.map(o => (
        <button key={o.id} className={optionClass(o.id)} onClick={() => toggle(o.id)} disabled={revealed} aria-pressed={selected?.includes(o.id) ?? false}>
          <span className="key" aria-hidden="true">{o.id.toUpperCase()}</span>
          <span className="lab grow">{o.label}</span>
          {revealed && q.correct.includes(o.id) && <svg className="option-state" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-label={t('test.correctOption')}><path d="m5 12 4 4L19 6" /></svg>}
          {revealed && !q.correct.includes(o.id) && selected?.includes(o.id) && <svg className="option-state" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-label={t('test.incorrectOption')}><path d="m7 7 10 10M17 7 7 17" /></svg>}
        </button>
      ))}
    </div>
  );
}
