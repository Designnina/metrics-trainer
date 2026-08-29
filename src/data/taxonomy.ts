import type { CardGroup } from '../types';

export interface Domain {
  id: string;      // '01'..'18'
  title: string;   // 'Product Metrics & Lifecycle'
  group: CardGroup;
}

export interface Group {
  id: CardGroup;
  title: string;
  domains: string[]; // domain ids
}

export const groups: Group[] = [
  { id: 'product', title: 'Product', domains: ['01', '02', '03', '04', '07', '08', '09'] },
  { id: 'ux-research', title: 'UX Research', domains: ['05', '06'] },
  { id: 'design', title: 'Design', domains: ['10', '11', '12', '13', '14'] },
  { id: 'delivery-business', title: 'Delivery & Business', domains: ['15', '16'] },
  { id: 'tech-ai', title: 'Tech & AI', domains: ['17', '18'] },
];

export const domains: Domain[] = [
  { id: '01', title: 'Product Metrics & Lifecycle', group: 'product' },
  { id: '02', title: 'Growth, Revenue & Unit Economics', group: 'product' },
  { id: '03', title: 'Product Analytics & Instrumentation', group: 'product' },
  { id: '04', title: 'Experimentation & Statistics', group: 'product' },
  { id: '05', title: 'UX & Usability Metrics', group: 'ux-research' },
  { id: '06', title: 'User Research', group: 'ux-research' },
  { id: '07', title: 'Product Discovery & Problem Framing', group: 'product' },
  { id: '08', title: 'Strategy, Roadmaps & Prioritization', group: 'product' },
  { id: '09', title: 'Core Product Frameworks', group: 'product' },
  { id: '10', title: 'Information Architecture & Content Design', group: 'design' },
  { id: '11', title: 'Interaction & Behavioral Design', group: 'design' },
  { id: '12', title: 'UI & Visual Design', group: 'design' },
  { id: '13', title: 'Design Systems', group: 'design' },
  { id: '14', title: 'Accessibility & Inclusive Design', group: 'design' },
  { id: '15', title: 'Delivery & Cross-functional Collaboration', group: 'delivery-business' },
  { id: '16', title: 'Business, Freelance & Client Work', group: 'delivery-business' },
  { id: '17', title: 'Technical & Web Vocabulary', group: 'tech-ai' },
  { id: '18', title: 'AI Product & LLM Vocabulary', group: 'tech-ai' },
];

export const domainById = Object.fromEntries(domains.map(d => [d.id, d])) as Record<string, Domain>;
export const groupById = Object.fromEntries(groups.map(g => [g.id, g])) as Record<string, Group>;

export const domainTitle = (id: string): string => domainById[id]?.title ?? id;
export const groupTitle = (id: string): string => groupById[id]?.title ?? id;
export const domainsByGroup = (g: CardGroup): Domain[] => domains.filter(d => d.group === g);
