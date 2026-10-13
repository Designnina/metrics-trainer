import type { Lang } from '../state/languageTypes';
import { ru01 } from './cards/ru-01';
import { ru02 } from './cards/ru-02';
import { ru03 } from './cards/ru-03';
import { ru04 } from './cards/ru-04';
import { ru05 } from './cards/ru-05';
import { ru06 } from './cards/ru-06';
import { de01 } from './cards/de-01';
import { de02 } from './cards/de-02';
import { de03 } from './cards/de-03';
import { de04 } from './cards/de-04';
import { de05 } from './cards/de-05';
import { de06 } from './cards/de-06';
import { es01 } from './cards/es-01';
import { es02 } from './cards/es-02';
import { es03 } from './cards/es-03';
import { es04 } from './cards/es-04';
import { es05 } from './cards/es-05';
import { es06 } from './cards/es-06';
import { fr01 } from './cards/fr-01';
import { fr02 } from './cards/fr-02';
import { fr03 } from './cards/fr-03';
import { fr04 } from './cards/fr-04';
import { fr05 } from './cards/fr-05';
import { fr06 } from './cards/fr-06';

/**
 * Per-language card overrides (full 300-card coverage for RU, DE, ES, FR).
 * EN in src/data/cards.ts stays the source of truth and the learning content
 * (professional vocabulary is English-first).
 *
 * Shape: { [cardId]: { frontQuestion?, frontScenario?, backInfo? } }
 * `answer` (term) and `formula` are NOT translated here:
 * - answer keeps the EN term; local gloss goes in parentheses inside backInfo
 *   on first mention, e.g. RU "Activation Rate (коэффициент активации)".
 * - formula symbols never translated.
 *
 * Wired into the UI via localizeCard/localizeCards, used by
 * Learn, Test, Library and MetricDetail. Missing entries fall back to EN.
 *
 * GitHub Pages / local browser: static maps, bundled at build time, no fetch.
 */

export interface CardOverride {
  frontQuestion?: string;
  frontScenario?: string;
  backInfo?: string;
}

export const cardOverrides: Record<Lang, Record<string, CardOverride>> = {
  en: {},
  ru: { ...ru01, ...ru02, ...ru03, ...ru04, ...ru05, ...ru06 },
  de: { ...de01, ...de02, ...de03, ...de04, ...de05, ...de06 },
  es: { ...es01, ...es02, ...es03, ...es04, ...es05, ...es06 },
  fr: { ...fr01, ...fr02, ...fr03, ...fr04, ...fr05, ...fr06 },
};

export function localizeCard<T extends { id: string; frontQuestion: string; frontScenario: string; backInfo: string }>(
  card: T,
  lang: Lang,
): T {
  if (lang === 'en') return card;
  const override = cardOverrides[lang]?.[card.id];
  if (!override) return card;
  return {
    ...card,
    frontQuestion: override.frontQuestion ?? card.frontQuestion,
    frontScenario: override.frontScenario ?? card.frontScenario,
    backInfo: override.backInfo ?? card.backInfo,
  };
}

export function localizeCards<T extends { id: string; frontQuestion: string; frontScenario: string; backInfo: string }>(
  list: readonly T[],
  lang: Lang,
): T[] {
  if (lang === 'en') return [...list];
  return list.map(card => localizeCard(card, lang));
}
