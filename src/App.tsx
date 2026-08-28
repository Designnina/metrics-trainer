import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import { StoreProvider } from './state/store';
import { ThemeProvider, useTheme } from './state/theme';
import { Learn } from './screens/Learn';
import { Test } from './screens/Test';
import { Library } from './screens/Library';
import { Groups } from './screens/Groups';
import { MetricDetail } from './screens/MetricDetail';
import { Progress } from './screens/Progress';

const tabs = [
  { to: '/', label: 'Learn', icon: '◐', end: true },
  { to: '/test', label: 'Test', icon: '▣' },
  { to: '/library', label: 'Metrics', icon: '≣' },
  { to: '/progress', label: 'Progress', icon: '◉' },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button className="theme-btn" onClick={() => void toggle()} aria-label={`Переключить тему (сейчас ${theme === 'dark' ? 'тёмная' : 'светлая'})`} title="Сменить тему">
      <span style={{ fontSize: 17 }} aria-hidden="true">{theme === 'dark' ? '☼' : '●'}</span>
    </button>
  );
}

function Chrome() {
  return (
    <nav className="chrome" aria-label="Основная навигация">
      <div className="brand">
        <small>Product &amp; UX Metrics</small>
        <span>Тренажёр</span>
      </div>
      {tabs.map(t => (
        <NavLink key={t.to} to={t.to} end={t.end} className={({ isActive }) => (isActive ? 'active' : '')}>
          <span className="ico" aria-hidden="true">{t.icon}</span>
          <span>{t.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <HashRouter>
          <div className="app">
            <Chrome />
            <ThemeToggle />
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
      </ThemeProvider>
    </StoreProvider>
  );
}
