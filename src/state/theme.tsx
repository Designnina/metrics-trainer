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

    const W = Math.max(window.innerWidth, 1);
    const targetColor = getComputedStyle(document.documentElement)
      .getPropertyValue(next === 'dark' ? '--bg-2' : '--bg')
      .trim() || 'oklch(11% 0 0)';

    // ONE continuous directional sweep: enter from the right, exit to the left.
    // The theme flips the instant the curtain fully covers the screen (x≈0).
    // After that the page is the SAME color as the curtain, so the tail of the
    // sweep is invisible — the eye sees a single wash of color, not a double swish.
    el.style.setProperty('--curtain-color', targetColor);
    el.style.visibility = 'visible';
    el.style.pointerEvents = 'auto';

    const DURATION = 0.62;
    // The curtain passes exactly over the screen centre (fully covering it) at
    // half the duration, so we flip the theme there. After that the page is the
    // same colour as the curtain, so the tail of the sweep is invisible.
    const timer = window.setTimeout(() => setThemeState(next), (DURATION / 2) * 1000);
    const anim = animate(el, { x: [W, -W] }, { duration: DURATION, ease: [0.83, 0, 0.17, 1] });

    return new Promise<void>((resolve) => {
      anim.then(() => {
        window.clearTimeout(timer);
        el.style.pointerEvents = 'none';
        el.style.visibility = 'hidden';
        resolve();
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
