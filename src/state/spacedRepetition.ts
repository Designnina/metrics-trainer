import type { MetricProgress } from '../types';

export const intervals = [1, 3, 7, 14, 30];

export function blankProgress(metricId: string): MetricProgress {
  return { level: 0, seen: false, lastSeen: 0, correct: 0, wrong: 0, streak: 0, confused: {}, isHard: false, interval: 0, dueAt: 0 };
}

export function recordAnswer(p: MetricProgress, isCorrect: boolean, confusedMetricId?: string): MetricProgress {
  const next = { ...p, seen: true, lastSeen: Date.now() };
  if (isCorrect) {
    next.correct += 1;
    next.streak += 1;
    next.wrong = 0;
    const i = intervals.indexOf(p.interval);
    next.interval = intervals[Math.min(i + 1, intervals.length - 1)];
    if (p.interval === 0) next.interval = intervals[1];
    next.dueAt = Date.now() + next.interval * 86400000;
    next.level = Math.min(5, next.streak >= 5 ? 5 : next.streak >= 3 ? 4 : next.streak >= 2 ? 3 : Math.max(1, next.level)) as MetricProgress['level'];
  } else {
    next.wrong += 1;
    next.streak = 0;
    next.interval = intervals[0];
    next.dueAt = Date.now() + intervals[0] * 86400000;
    next.level = Math.max(1, next.level - 1) as MetricProgress['level'];
    if (confusedMetricId) {
      next.confused[confusedMetricId] = (next.confused[confusedMetricId] ?? 0) + 1;
    }
  }
  return next;
}

export function markSeen(p: MetricProgress): MetricProgress {
  if (p.seen) return p;
  return { ...p, seen: true, lastSeen: Date.now(), level: Math.max(p.level, 1) as MetricProgress['level'] };
}

export function markHard(p: MetricProgress): MetricProgress {
  return { ...p, isHard: true, interval: intervals[0], dueAt: Date.now() };
}

export function duePriority(p: MetricProgress, hardBoost: boolean): number {
  const now = Date.now();
  let score = 0;
  if (!p.seen) score += 1000;
  if (p.dueAt > 0 && p.dueAt <= now) score += 500;
  if (p.isHard || hardBoost) score += 300;
  score -= p.interval * 10;
  return score;
}
