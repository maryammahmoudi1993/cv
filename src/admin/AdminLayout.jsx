import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext.jsx';

const navItems = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/posts', label: 'Posts' },
  { to: '/admin/projects', label: 'Projects' },
];

function linkClasses({ isActive }) {
  return `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
    isActive ? 'bg-brand text-white' : 'text-ink-secondary hover:bg-white/5 hover:text-white'
  }`;
}

export default function AdminLayout() {
  const { user, signOut } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-white flex flex-col nav:flex-row">
      <header className="nav:hidden flex items-center justify-between px-4 py-3 border-b border-white/10">
        <span className="font-display font-semibold">Admin</span>
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="px-3 py-1.5 rounded-md border border-white/15 text-sm"
          aria-expanded={mobileOpen}
        >
          Menu
        </button>
      </header>

      <aside
        className={`${mobileOpen ? 'block' : 'hidden'} nav:block w-full nav:w-64 shrink-0 border-b nav:border-b-0 nav:border-r border-white/10 p-4`}
      >
        <div className="hidden nav:block mb-6 px-1">
          <p className="font-display font-semibold text-lg">Admin</p>
          <p className="text-xs text-ink-secondary truncate">{user?.email}</p>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClasses} onClick={() => setMobileOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          onClick={signOut}
          className="mt-6 w-full px-4 py-2.5 rounded-lg text-sm font-medium text-left text-ink-secondary border border-white/10 hover:bg-white/5 hover:text-white"
        >
          Log out
        </button>
      </aside>

      <main className="flex-1 p-4 nav:p-8 max-w-5xl">
        <Outlet />
      </main>
    </div>
  );
}
