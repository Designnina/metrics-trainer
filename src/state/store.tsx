import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import type { AppState, MetricProgress } from '../types';
import { metrics } from '../data/metrics';
import { blankProgress, recordAnswer, markSeen, markHard } from './spacedRepetition';

const STORAGE_KEY = 'metrics-trainer-v1';

type Action =
  | { type: 'answer'; metricId: string; correct: boolean; confusedMetricId?: string }
  | { type: 'seen'; metricId: string }
  | { type: 'hard'; metricId: string }
  | { type: 'reset' };

function freshState(): AppState {
  const progress: Record<string, MetricProgress> = {};
  for (const m of metrics) progress[m.id] = blankProgress(m.id);
  return { progress, answered: 0, correct: 0, streak: 0, bestStreak: 0, lastAnswerCorrect: null };
}

function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as AppState;
      const progress: Record<string, MetricProgress> = {};
      for (const m of metrics) {
        progress[m.id] = { ...blankProgress(m.id), ...(parsed.progress?.[m.id] ?? {}) };
      }
      return { ...freshState(), ...parsed, progress };
    }
  } catch { /* ignore */ }
  return freshState();
}

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'answer': {
      const prev = state.progress[action.metricId] ?? blankProgress(action.metricId);
      const next = recordAnswer(prev, action.correct, action.confusedMetricId);
      const answered = state.answered + 1;
      const correct = state.correct + (action.correct ? 1 : 0);
      const streak = action.correct ? state.streak + 1 : 0;
      return {
        ...state,
        progress: { ...state.progress, [action.metricId]: next },
        answered, correct,
        streak,
        bestStreak: Math.max(state.bestStreak, streak),
        lastAnswerCorrect: action.correct,
      };
    }
    case 'seen': {
      const prev = state.progress[action.metricId] ?? blankProgress(action.metricId);
      return { ...state, progress: { ...state.progress, [action.metricId]: markSeen(prev) } };
    }
    case 'hard': {
      const prev = state.progress[action.metricId] ?? blankProgress(action.metricId);
      return { ...state, progress: { ...state.progress, [action.metricId]: markHard(prev) } };
    }
    case 'reset':
      return freshState();
    default:
      return state;
  }
}

interface StoreCtx {
  state: AppState;
  answer: (metricId: string, correct: boolean, confusedMetricId?: string) => void;
  seen: (metricId: string) => void;
  hard: (metricId: string) => void;
  reset: () => void;
}

const Ctx = createContext<StoreCtx | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadState);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* ignore */ }
  }, [state]);

  const value = useMemo<StoreCtx>(() => ({
    state,
    answer: (metricId, correct, confusedMetricId) => dispatch({ type: 'answer', metricId, correct, confusedMetricId }),
    seen: (metricId) => dispatch({ type: 'seen', metricId }),
    hard: (metricId) => dispatch({ type: 'hard', metricId }),
    reset: () => dispatch({ type: 'reset' }),
  }), [state]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore(): StoreCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}

export function accuracy(state: AppState): number {
  if (state.answered === 0) return 0;
  return Math.round((state.correct / state.answered) * 100);
}

export function masteredCount(state: AppState): number {
  return metrics.filter(m => (state.progress[m.id]?.level ?? 0) >= 5).length;
}
export function seenCount(state: AppState): number {
  return metrics.filter(m => state.progress[m.id]?.seen).length;
}
