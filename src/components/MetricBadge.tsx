import { familyById } from '../data/taxonomy';
import type { FamilyId } from '../types';

export function FamilyBadge({ family, dark }: { family: FamilyId; dark?: boolean }) {
  const f = familyById[family];
  return <span className={`chip ${dark ? 'chip-dark' : ''}`}>{f.title}</span>;
}

export function CategoryLabel({ label }: { label: string }) {
  return <span className="tiny muted">{label}</span>;
}
