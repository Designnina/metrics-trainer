import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { animate, useReducedMotion } from 'motion/react';

type Theme = 'light' | 'dark';
interface ThemeCtx {
  theme: Theme;
  toggle: () => Promise<void>;
  setTheme: (t: Theme) => void;
}

const Ctx = createContext<ThemeCtx | null>(null);
const KEY = 'metrics-trainer-theme';

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch { /* ignore */ }
  if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(initialTheme);
  const curtainRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(KEY, theme); } catch { /* ignore */ }
  }, [theme]);

  const setTheme = (t: Theme) => setThemeState(t);

  const toggle = useMemo(() => () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    if (reduce) { setThemeState(next); return Promise.resolve(); }

    const el = curtainRef.current;
    if (!el) { setThemeState(next); return Promise.resolve(); }

    const full = Math.max(window.innerWidth, window.innerHeight);
    const targetColor = getComputedStyle(document.documentElement)
      .getPropertyValue(next === 'dark' ? '--bg-deep' : '--bg')
      .trim() || 'oklch(12% 0.012 95)';

    // Phase 1: cover the screen with the NEW theme's curtain, from the right.
    el.style.setProperty('--curtain-color', targetColor);
    el.style.pointerEvents = 'auto';
    const cover = animate(el, { x: ['100%', '0%'] }, { duration: 0.34, ease: [0.83, 0, 0.17, 1] });

    return new Promise<void>((resolve) => {
      cover.then(() => {
        // Phase 2: on the covered moment, flip the real theme.
        setThemeState(next);
        // Phase 3: sweep the curtain away to the left, revealing the new theme.
        const reveal = animate(el, { x: ['0%', '-100%'] }, { duration: 0.5, ease: [0.83, 0, 0.17, 1] });
        reveal.then(() => {
          el.style.pointerEvents = 'none';
          resolve();
        });
      });
    });
  }, [theme, reduce]);

  const value = useMemo<ThemeCtx>(() => ({ theme, toggle, setTheme }), [theme, toggle, setTheme]);

  return (
    <Ctx.Provider value={value}>
      {children}
      <div ref={curtainRef} className="theme-curtain" aria-hidden="true" />
    </Ctx.Provider>
  );
}

export function useTheme(): ThemeCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
