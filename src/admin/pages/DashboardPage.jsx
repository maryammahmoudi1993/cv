import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllPosts } from '../../lib/posts.js';
import { fetchAllProjects } from '../../lib/projects.js';

function StatCard({ label, value }) {
  return (
    <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.03]">
      <p className="text-ink-secondary text-xs uppercase tracking-wide mb-2">{label}</p>
      <p className="text-white font-display font-semibold text-3xl">{value}</p>
    </div>
  );
}

export default function DashboardPage() {
  const [posts, setPosts] = useState(null);
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([fetchAllPosts(), fetchAllProjects()])
      .then(([p, pr]) => {
        setPosts(p);
        setProjects(pr);
      })
      .catch((err) => setError(err.message));
  }, []);

  const loading = posts === null || projects === null;
  const published = posts?.filter((p) => p.status === 'published').length ?? 0;
  const drafts = posts?.filter((p) => p.status === 'draft').length ?? 0;
  const recent = [...(posts ?? []), ...(projects ?? [])]
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 5);

  return (
    <div>
      <h1 className="text-white font-display font-semibold text-2xl mb-6">Dashboard</h1>

      {error && <p className="mb-6 text-sm text-red-300">{error}</p>}
      {loading && !error && <p className="text-ink-secondary text-sm">Loading…</p>}

      {!loading && (
        <>
          <div className="grid grid-cols-2 nav:grid-cols-4 gap-4 mb-8">
            <StatCard label="Total posts" value={posts.length} />
            <StatCard label="Published posts" value={published} />
            <StatCard label="Drafts" value={drafts} />
            <StatCard label="Total projects" value={projects.length} />
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Link to="/admin/posts/new" className="px-4 py-2.5 rounded-lg bg-brand text-white text-sm font-semibold">
              + New post
            </Link>
            <Link to="/admin/projects/new" className="px-4 py-2.5 rounded-lg border border-white/15 text-white text-sm font-semibold">
              + New project
            </Link>
          </div>

          <h2 className="text-white font-display font-semibold text-lg mb-3">Recently updated</h2>
          <ul className="flex flex-col gap-2">
            {recent.map((item) => (
              <li key={item.id} className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between text-sm">
                <span className="text-white truncate">{item.title}</span>
                <span className="text-ink-secondary shrink-0 ml-3">{new Date(item.updated_at).toLocaleDateString()}</span>
              </li>
            ))}
            {recent.length === 0 && <li className="text-ink-secondary text-sm">No content yet.</li>}
          </ul>
        </>
      )}
    </div>
  );
}
