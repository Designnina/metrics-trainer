import { useEffect, useRef, useState } from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { StoreProvider } from './state/store';
import { ThemeProvider, useTheme } from './state/theme';
import { LanguageProvider, useLanguage, LANGS, LANG_LABEL } from './state/language';
import { Learn } from './screens/Learn';
import { Test } from './screens/Test';
import { Library } from './screens/Library';
import { Groups } from './screens/Groups';
import { MetricDetail } from './screens/MetricDetail';
import { Progress } from './screens/Progress';

type IconName = 'cards' | 'test' | 'metrics' | 'progress' | 'sun' | 'moon' | 'lang';

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    cards: <><rect x="5" y="4" width="13" height="16" rx="3" /><path d="M9 8h5M9 12h5" /><path d="M18 8h1a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3H9" /></>,
    test: <><path d="M8 4h8" /><path d="M9 3v3M15 3v3" /><rect x="5" y="5" width="14" height="16" rx="3" /><path d="m9 13 2 2 4-5" /></>,
    metrics: <><path d="M5 20V10M12 20V4M19 20v-7" /><path d="M3 20h18" /></>,
    progress: <><path d="M4 17 9 12l4 3 7-8" /><path d="M16 7h4v4" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></>,
    moon: <path d="M20 15.1A8.5 8.5 0 0 1 8.9 4a8.5 8.5 0 1 0 11.1 11.1Z" />,
    lang: <><circle cx="12" cy="12" r="9" /><path d="M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18M3 12h18" /></>,
  };

  return (
    <svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const tabs = [
  { to: '/', key: 'nav.learn', icon: 'cards' as const, end: true },
  { to: '/test', key: 'nav.test', icon: 'test' as const },
  { to: '/library', key: 'nav.metrics', icon: 'metrics' as const },
  { to: '/progress', key: 'nav.progress', icon: 'progress' as const },
];

function ThemeButton() {
  const { theme, toggle } = useTheme();
  const { t } = useLanguage();
  const label = t('nav.switchThemeTo', { theme: theme === 'dark' ? t('nav.themeLight') : t('nav.themeDark') });
  return (
    <button className="icon-btn" onClick={() => void toggle()} aria-label={label} title={label}>
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
    </button>
  );
}

function LanguageStrip({ onSelect, onClose }: { onSelect: (l: import('./state/language').Lang) => void; onClose: () => void }) {
  const { lang } = useLanguage();
  return (
    <>
      {LANGS.map(l => (
        <button
          key={l}
          role="option"
          aria-selected={lang === l}
          className={`f-tab ${lang === l ? 'on' : ''}`}
          onClick={() => { onSelect(l); onClose(); }}
        >
          {LANG_LABEL[l]}
        </button>
      ))}
    </>
  );
}

function LanguageButton({ variant = 'chrome' }: { variant?: 'chrome' | 'tab' }) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open]);

  if (variant === 'tab') {
    return (
      <div className="lang-tab-wrap" ref={ref}>
        <button className="tab-btn" onClick={() => setOpen(v => !v)} aria-label={`${t('nav.language')}: ${LANG_LABEL[lang]}`} aria-expanded={open} aria-haspopup="listbox">
          <Icon name="lang" />
          <span>{LANG_LABEL[lang]}</span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              className="lang-strip lang-strip--mobile"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <LanguageStrip onSelect={setLang} onClose={() => setOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="lang-chrome-wrap" ref={ref}>
      <button className="icon-btn lang-btn" onClick={() => setOpen(v => !v)} aria-label={`${t('nav.language')}: ${LANG_LABEL[lang]}`} aria-expanded={open} aria-haspopup="listbox" title={`${t('nav.language')}: ${LANG_LABEL[lang]}`}>
        <Icon name="lang" />
        <span className="lang-abbr">{LANG_LABEL[lang]}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="lang-strip lang-strip--chrome"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <LanguageStrip onSelect={setLang} onClose={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Chrome() {
  const { t } = useLanguage();
  return (
      <nav className="chrome" aria-label="Primary navigation">
      <div className="brand" aria-hidden="true">
        <b>{t('brand.metrics')}</b>
        <i>{t('brand.trainer')}</i>
      </div>
      <nav aria-label={t('nav.sections')}>
        {tabs.map(tab => (
          <NavLink key={tab.to} to={tab.to} end={tab.end} className={({ isActive }) => (isActive ? 'active' : '')}>
            <Icon name={tab.icon} />
            <span className="nav-lbl">{t(tab.key)}</span>
          </NavLink>
        ))}
      </nav>
      <div className="rail-foot">
        <ThemeButton />
        <LanguageButton variant="chrome" />
      </div>
    </nav>
  );
}

function TabBar() {
  const { theme, toggle } = useTheme();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(min-width: 768px)').matches) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`tabbar ${scrolled ? 'is-scrolled' : ''}`} aria-label="Primary navigation">
      <nav className="tabbar-nav" aria-label={t('nav.sections')}>
        {tabs.map(tab => (
          <NavLink key={tab.to} to={tab.to} end={tab.end} className={({ isActive }) => (isActive ? 'active' : '')}>
            <Icon name={tab.icon} />
            <span>{t(tab.key)}</span>
          </NavLink>
        ))}
      </nav>
      <div className="tabbar-controls" aria-label={t('nav.settings')}>
        <LanguageButton variant="tab" />
        <span className="controls-sep" aria-hidden="true" />
        <button className="tab-btn" onClick={() => void toggle()} aria-label={t('nav.switchThemeTo', { theme: theme === 'dark' ? t('nav.themeLight') : t('nav.themeDark') })} title={t('nav.switchThemeTo', { theme: theme === 'dark' ? t('nav.themeLight') : t('nav.themeDark') })}>
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          <span>{t('nav.theme')}</span>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <LanguageProvider>
          <HashRouter>
            <div className="app">
              <Chrome />
              <TabBar />
              <main className="app-main">
                <Routes>
                  <Route path="/" element={<Learn />} />
                  <Route path="/test" element={<Test />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/groups" element={<Groups />} />
                  <Route path="/metric/:id" element={<MetricDetail />} />
                  <Route path="/progress" element={<Progress />} />
                </Routes>
              </main>
            </div>
          </HashRouter>
        </LanguageProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
