import { NavLink } from 'react-router-dom';
import { useStore } from '../state/store';
import { duePriority } from '../state/spacedRepetition';
import { metrics } from '../data/metrics';

const tabs = [
  { to: '/', label: 'Learn', icon: '◐', end: true },
  { to: '/test', label: 'Test', icon: '▣' },
  { to: '/library', label: 'Metrics', icon: '≣' },
  { to: '/progress', label: 'Progress', icon: '◉' },
];

export function dueCount() {
  const { state } = useStore();
  return metrics.filter(m => duePriority(state.progress[m.id] ?? { level: 0, seen: false, lastSeen: 0, correct: 0, wrong: 0, streak: 0, confused: {}, isHard: false, interval: 0, dueAt: 0 }, false) > 0 && (state.progress[m.id]?.seen)).length;
}

export function TabBar() {
  return (
    <nav className="tabbar" aria-label="Основная навигация">
      {tabs.map(t => (
        <NavLink key={t.to} to={t.to} end={t.end} className={({ isActive }) => (isActive ? 'active' : '')}>
          <span className="tab-ico" aria-hidden="true">{t.icon}</span>
          <span>{t.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
