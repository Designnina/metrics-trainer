export type FamilyId = 'product' | 'business' | 'ux' | 'usability' | 'experimentation';

export interface Family {
  id: FamilyId;
  title: string;
  subtitle: string;
  description: string;
  color: string; // for accent, monochrome variants
}

export interface Category {
  id: string;
  family: FamilyId;
  title: string;
  description: string;
}

export interface Metric {
  id: string;
  name: string;
  family: FamilyId;
  categoryId: string;
  tagline: string; // вопрос на который отвечает
  definition: string;
  measures: string;
  formula?: string;
  formulaParts?: Record<string, string>;
  numericExample?: { label: string; result: string };
  interpretation: string;
  whenToUse: string[];
  whenNotToUse: string[];
  confusedWith: string[]; // ids
  commonMistakes: string[];
  productUse: string;
  interviewTip: string;
  caseStudy: { title: string; text: string };
  relatedMetrics: string[];
}

export type QuestionType = 'identify' | 'compare' | 'multi' | 'calc' | 'interpret' | 'select' | 'mistake';

export interface TestQuestion {
  id: string;
  type: QuestionType;
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  metricIds: string[]; // related metrics
  prompt: string;
  situation?: string;
  options: { id: string; label: string; metricId?: string }[];
  correct: string[]; // option ids
  why: string;
  whyNot: Record<string, string>;
  calcAnswer?: string; // for calc type
}

export interface MetricProgress {
  level: 0 | 1 | 2 | 3 | 4 | 5; // 0-not seen ... 5-mastered
  seen: boolean;
  lastSeen: number; // timestamp
  correct: number;
  wrong: number;
  streak: number;
  confused: Record<string, number>; // metricId -> count
  isHard: boolean;
  interval: number; // days
  dueAt: number;
}

export interface AppState {
  progress: Record<string, MetricProgress>;
  answered: number;
  correct: number;
  streak: number;
  bestStreak: number;
  lastAnswerCorrect: boolean | null;
}
