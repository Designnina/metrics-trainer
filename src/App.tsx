import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { StoreProvider } from './state/store';
import { TabBar } from './components/TabBar';
import { Learn } from './screens/Learn';
import { Test } from './screens/Test';
import { Library } from './screens/Library';
import { Groups } from './screens/Groups';
import { MetricDetail } from './screens/MetricDetail';
import { Progress } from './screens/Progress';

export default function App() {
  return (
    <StoreProvider>
      <HashRouter>
        <div className="app">
          <header className="app-header">
            <Link to="/" style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
                Product &amp; UX Metrics
              </span>
              <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-.01em' }}>Тренажёр</span>
            </Link>
          </header>
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
          <TabBar />
        </div>
      </HashRouter>
    </StoreProvider>
  );
}
