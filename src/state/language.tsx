import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { LANGS, LANG_LABEL, type Lang } from './languageTypes';
import { dictionaries, groupNames, domainNames } from '../i18n/dictionaries';

export type { Lang };
export { LANGS, LANG_LABEL };

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  cycle: () => void;
  /** Localised string with {var} interpolation, EN fallback. */
  t: (key: string, vars?: Record<string, string | number>) => string;
  tString: (key: string, vars?: Record<string, string | number>) => string;
  formatDate: (ts: number) => string;
  groupTitle: (id: string) => string;
  domainTitle: (id: string) => string;
}

const Ctx = createContext<LangCtx | null>(null);
const KEY = 'metrics-trainer-lang';

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved && (LANGS as string[]).includes(saved)) return saved as Lang;
  } catch { /* ignore */ }
  const nav = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2).toLowerCase() : 'en';
  if ((LANGS as string[]).includes(nav)) return nav as Lang;
  return 'en';
}

function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? `{${k}}`).toString());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    try { localStorage.setItem(KEY, lang); } catch { /* ignore */ }
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const value = useMemo<LangCtx>(() => {
    const tString = (key: string, vars?: Record<string, string | number>): string => {
      const dict = dictionaries[lang] ?? {};
      const fallback = dictionaries.en ?? {};
      const template = dict[key] ?? fallback[key] ?? key;
      return interpolate(template, vars);
    };
    return {
      lang,
      setLang: (l: Lang) => setLangState(l),
      cycle: () => setLangState(prev => LANGS[(LANGS.indexOf(prev) + 1) % LANGS.length]),
      t: tString,
      tString,
      formatDate: (ts: number) => {
        try {
          return new Intl.DateTimeFormat(lang, { month: 'short', day: 'numeric', year: 'numeric' }).format(ts);
        } catch {
          return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(ts);
        }
      },
      groupTitle: (id: string) => groupNames[lang]?.[id] ?? groupNames.en[id] ?? id,
      domainTitle: (id: string) => domainNames[lang]?.[id] ?? domainNames.en[id] ?? id,
    };
  }, [lang]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLanguage(): LangCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
