import type { Family, Category } from '../types';

export const families: Family[] = [
  { id: 'product', title: 'PRODUCT', subtitle: 'Продуктовые', description: 'Фанелы, активация, вовлечённость, удержание, виральность — что происходит с пользователем в продукте.', color: '#111' },
  { id: 'business', title: 'BUSINESS', subtitle: 'Бизнесовые', description: 'Монетизация, стоимость привлечения, юнит-экономика и рынок.', color: '#333' },
  { id: 'ux', title: 'UX', subtitle: 'Восприятие', description: 'Как пользователь воспринимает опыт: удовлетворённость и лояльность.', color: '#555' },
  { id: 'usability', title: 'USABILITY', subtitle: 'Юзабилити', description: 'Можно ли выполнить задачу: успешность, время, ошибки, обучаемость.', color: '#777' },
  { id: 'experimentation', title: 'EXPERIMENT', subtitle: 'Эксперименты', description: 'Корректность выводов: значимость, выборка, guardrails.', color: '#999' },
];

export const categories: Category[] = [
  // PRODUCT
  { id: 'p-funnel', family: 'product', title: 'Funnel', description: 'Переходы между шагами воронки' },
  { id: 'p-activation', family: 'product', title: 'Activation', description: 'Первый ценностный опыт' },
  { id: 'p-engagement', family: 'product', title: 'Engagement', description: 'Регулярность и глубина использования' },
  { id: 'p-retention', family: 'product', title: 'Retention', description: 'Возвраты и отток во времени' },
  { id: 'p-growth', family: 'product', title: 'Growth', description: 'Виральность и реферальность' },
  // BUSINESS
  { id: 'b-monetization', family: 'business', title: 'Monetization', description: 'Выручка на пользователя и подписки' },
  { id: 'b-acquisition', family: 'business', title: 'Acquisition', description: 'Стоимость привлечения' },
  { id: 'b-efficiency', family: 'business', title: 'Efficiency', description: 'Юнит-экономика' },
  { id: 'b-market', family: 'business', title: 'Market', description: 'Доля и проникновение' },
  // UX
  { id: 'ux-perceived', family: 'ux', title: 'Perceived Quality', description: 'Оценка опыта' },
  { id: 'ux-loyalty', family: 'ux', title: 'Satisfaction & Loyalty', description: 'Лояльность и усилия' },
  // USABILITY
  { id: 'u-task', family: 'usability', title: 'Task Performance', description: 'Эффективность выполнения' },
  { id: 'u-learn', family: 'usability', title: 'Learnability', description: 'Обучаемость и поиск' },
  // EXPERIMENTATION
  { id: 'e-design', family: 'experimentation', title: 'Test Design', description: 'Планирование эксперимента' },
  { id: 'e-results', family: 'experimentation', title: 'Test Results', description: 'Интерпретация результатов' },
];

export const familyById = Object.fromEntries(families.map(f => [f.id, f])) as Record<string, Family>;
export const categoryById = Object.fromEntries(categories.map(c => [c.id, c])) as Record<string, Category>;
export const categoriesByFamily = (fid: string) => categories.filter(c => c.family === fid);
