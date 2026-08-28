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
  { to: '/', num: '01', label: 'Learn', end: true },
  { to: '/test', num: '02', label: 'Test' },
  { to: '/library', num: '03', label: 'Metrics' },
  { to: '/progress', num: '04', label: 'Progress' },
];

function ThemeButton() {
  const { theme, toggle } = useTheme();
  return (
    <button className="icon-btn" onClick={() => void toggle()} aria-label="Переключить тему" title="Сменить тему">
      <span aria-hidden="true" style={{ fontSize: 16, lineHeight: 1 }}>{theme === 'dark' ? '☼' : '●'}</span>
    </button>
  );
}

function Chrome() {
  return (
    <nav className="chrome" aria-label="Основная навигация">
      <div className="brand" aria-hidden="true">
        <b>MTR.</b>
        <i>01</i>
      </div>
      <nav aria-label="Разделы">
        {tabs.map(t => (
          <NavLink key={t.to} to={t.to} end={t.end} className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="nav-num">{t.num}</span>
            <span className="nav-lbl">{t.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="rail-foot">
        <ThemeButton />
      </div>
    </nav>
  );
}

function TabBar() {
  const { toggle } = useTheme();
  return (
    <nav className="tabbar" aria-label="Основная навигация">
      {tabs.map(t => (
        <NavLink key={t.to} to={t.to} end={t.end} className={({ isActive }) => (isActive ? 'active' : '')}>
          <span className="nav-num">{t.num}</span>
          <span>{t.label}</span>
        </NavLink>
      ))}
      <button className="tab-btn" onClick={() => void toggle()} aria-label="Переключить тему">
        <span aria-hidden="true">○</span>
      </button>
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
      </ThemeProvider>
    </StoreProvider>
  );
}
