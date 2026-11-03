import { Home, BookOpen, Trophy, User, LogIn, NotebookText } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Dashboard', icon: Home },
  { to: '/courses', label: 'Courses', icon: BookOpen },
  { to: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { to: '/profile', label: 'Profile', icon: User },
  { to: '/login', label: 'Login', icon: LogIn },
  { to: '/quiz', label: 'Quiz', icon: NotebookText },
];

export default function Sidebar() {
  return (
    <aside className="sidebar card">
      <div className="brand-wrap">
        <div className="brand-mark">E</div>
        <div>
          <div className="brand-name">EduSpark</div>
          <div className="brand-tag">Learning hub</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
