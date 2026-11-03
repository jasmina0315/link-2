import { Bell, Search, Plus } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="topbar card">
      <div className="search-box">
        <Search size={18} />
        <input type="text" placeholder="Search courses, lessons, or topics" />
      </div>

      <div className="topbar-actions">
        <button className="icon-button" aria-label="Notifications">
          <Bell size={18} />
        </button>
        <button className="btn primary small-btn">
          <Plus size={16} />
          New class
        </button>
      </div>
    </header>
  );
}
