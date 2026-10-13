import { cards } from './cards';
import type { AppState, CardGroup, TestQuestion, TrainingCard } from '../types';

export type TestMode = 'balanced' | 'weak' | 'challenge';

export type SessionQuestion = TestQuestion & {
  sourceCardId: string;
  group: CardGroup;
  maxPoints: number;
};

const optionIds = ['a', 'b', 'c', 'd'];
const levelPoints: Record<TrainingCard['level'], number> = { foundation: 1, practice: 2, advanced: 3 };
const levelNumber: Record<TrainingCard['level'], 2 | 4 | 6> = { foundation: 2, practice: 4, advanced: 6 };

function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function priority(card: TrainingCard, state: AppState, mode: TestMode): number {
  const progress = state.progress[card.id];
  const unseen = progress?.seen ? 0 : 1;
  const due = progress?.dueAt && progress.dueAt <= Date.now() ? 1 : 0;
  // `wrong` is a recent-failure signal: spaced repetition clears it after a
  // correct answer, while `correct` is lifetime recall and must not cancel it.
  const weakness = progress?.wrong ?? 0;
  const hard = progress?.isHard ? 1 : 0;
  const advanced = card.level === 'advanced' ? 1 : card.level === 'practice' ? 0.45 : 0;

  if (mode === 'weak') return weakness * 12 + due * 7 + hard * 6 + unseen * 3 + Math.random() * 2;
  if (mode === 'challenge') return advanced * 9 + weakness * 5 + due * 3 + Math.random() * 4;
  return unseen * 5 + weakness * 4 + due * 3 + Math.random() * 5;
}

function selectCards(length: number, mode: TestMode, state: AppState, pool: readonly TrainingCard[]): TrainingCard[] {
  const ranked = pool
    .map(card => ({ card, score: priority(card, state, mode) }))
    .sort((a, b) => b.score - a.score)
    .map(entry => entry.card);

  // Weak-spots sessions are intentionally allowed to concentrate on the area
  // that needs work. A forced per-topic quota would dilute that signal.
  if (mode === 'weak') return ranked.slice(0, length);

  const byGroup = new Map<CardGroup, TrainingCard[]>();
  for (const card of ranked) byGroup.set(card.group, [...(byGroup.get(card.group) ?? []), card]);

  const groups = shuffle([...byGroup.keys()]);
  const selected: TrainingCard[] = [];
  let cursor = 0;
  while (selected.length < length && groups.length) {
    const group = groups[cursor % groups.length];
    const next = byGroup.get(group)?.shift();
    if (next) selected.push(next);
    cursor += 1;
    if (cursor > pool.length * 2) break;
  }
  return selected;
}

function distractorsFor(card: TrainingCard, mode: TestMode, pool: readonly TrainingCard[]): TrainingCard[] {
  const sameDomain = pool.filter(candidate => candidate.id !== card.id && candidate.category === card.category);
  const sameGroup = pool.filter(candidate => candidate.id !== card.id && candidate.group === card.group && candidate.category !== card.category);
  const outside = pool.filter(candidate => candidate.id !== card.id && candidate.group !== card.group);
  const ranked = mode === 'challenge'
    ? [...shuffle(sameDomain), ...shuffle(sameGroup), ...shuffle(outside)]
    : [...shuffle(sameGroup), ...shuffle(sameDomain), ...shuffle(outside)];

  const unique = new Map<string, TrainingCard>();
  for (const candidate of ranked) {
    if (!unique.has(candidate.answer)) unique.set(candidate.answer, candidate);
    if (unique.size === 3) break;
  }
  return [...unique.values()];
}

export interface TestText {
  formulaPrompt: string;
  descriptionPrompt: string;
  differentConcept: string;
  differentConceptFull: (term: string, info: string) => string;
}

const defaultText: TestText = {
  formulaPrompt: 'Which concept is measured with this formula?',
  descriptionPrompt: 'Which concept best matches this description?',
  differentConcept: 'This option describes a different concept.',
  differentConceptFull: (term, info) => `${term} describes a different concept: ${info}`,
};

function buildQuestion(
  card: TrainingCard,
  index: number,
  mode: TestMode,
  pool: readonly TrainingCard[],
  text: TestText = defaultText,
): SessionQuestion {
  const distractors = distractorsFor(card, mode, pool);
  const options = shuffle([card, ...distractors]).map((optionCard, optionIndex) => ({
    id: optionIds[optionIndex],
    label: optionCard.answer,
    metricId: optionCard.id,
  }));
  const correctOption = options.find(option => option.metricId === card.id)?.id ?? 'a';
  const variant = card.formula && index % 4 === 0 ? 'formula' : index % 3;

  const prompt = variant === 'formula'
    ? text.formulaPrompt
    : variant === 1
      ? text.descriptionPrompt
      : card.frontQuestion;
  const situation = variant === 'formula'
    ? card.formula
    : variant === 1
      ? card.backInfo
      : card.frontScenario;

  const byId = new Map(pool.map(candidate => [candidate.id, candidate]));
  const whyNot = Object.fromEntries(options
    .filter(option => option.metricId !== card.id)
    .map(option => {
      const distractor = option.metricId ? byId.get(option.metricId) : undefined;
      return [option.id, distractor ? text.differentConceptFull(distractor.answer, distractor.backInfo) : text.differentConcept];
    }));

  return {
    id: `generated-${Date.now()}-${index}-${card.id}`,
    type: variant === 'formula' ? 'calc' : card.mode === 'interpretation' ? 'interpret' : 'identify',
    level: levelNumber[card.level],
    metricIds: [card.id],
    sourceCardId: card.id,
    group: card.group,
    maxPoints: levelPoints[card.level],
    prompt,
    situation,
    options,
    correct: [correctOption],
    why: card.backInfo,
    whyNot,
  };
}

export function generateTest(
  length: number,
  mode: TestMode,
  state: AppState,
  pool: readonly TrainingCard[] = cards,
  text: TestText = defaultText,
): SessionQuestion[] {
  return shuffle(selectCards(length, mode, state, pool).map((card, index) => buildQuestion(card, index, mode, pool, text)));
}
