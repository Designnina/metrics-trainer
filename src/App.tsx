import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Book, EditPencil, StatsUpSquare, Timer, SunLight, MoonSat } from 'iconoir-react';
import { StoreProvider } from './state/store';
import { ThemeProvider, useTheme } from './state/theme';
import { Learn } from './screens/Learn';
import { Test } from './screens/Test';
import { Library } from './screens/Library';
import { Groups } from './screens/Groups';
import { MetricDetail } from './screens/MetricDetail';
import { Progress } from './screens/Progress';

const tabs = [
  { to: '/', label: 'Learn', icon: Book, end: true },
  { to: '/test', label: 'Test', icon: EditPencil },
  { to: '/library', label: 'Metrics', icon: StatsUpSquare },
  { to: '/progress', label: 'Progress', icon: Timer },
];

function ThemeIcon() {
  const { theme } = useTheme();
  return theme === 'dark' ? <SunLight /> : <MoonSat />;
}

function ThemeButton() {
  const { toggle } = useTheme();
  return (
    <button className="icon-btn" onClick={() => void toggle()} aria-label="Переключить тему" title="Сменить тему">
      <ThemeIcon />
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
            <t.icon />
            <span>{t.label}</span>
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
          <t.icon />
          <span>{t.label}</span>
        </NavLink>
      ))}
      <button className="tab-btn" onClick={() => void toggle()} aria-label="Переключить тему">
        <ThemeIcon />
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
