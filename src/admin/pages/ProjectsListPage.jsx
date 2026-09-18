import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllProjects, deleteProject, updateProject } from '../../lib/projects.js';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import Toast from '../components/Toast.jsx';

const statusColors = {
  published: 'bg-emerald-500/15 text-emerald-300',
  draft: 'bg-amber-500/15 text-amber-300',
  archived: 'bg-white/10 text-ink-secondary',
};

export default function ProjectsListPage() {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState('');
  const [toast, setToast] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);
  const [busyId, setBusyId] = useState(null);

  function load() {
    fetchAllProjects()
      .then(setProjects)
      .catch((err) => setError(err.message));
  }

  useEffect(load, []);

  async function toggleStatus(project) {
    setBusyId(project.id);
    try {
      const nextStatus = project.status === 'published' ? 'draft' : 'published';
      await updateProject(project.id, { status: nextStatus });
      setToast({ type: 'success', message: nextStatus === 'published' ? 'Project published.' : 'Project unpublished.' });
      load();
    } catch (err) {
      setToast({ type: 'error', message: err.message });
    } finally {
      setBusyId(null);
    }
  }

  async function moveOrder(project, direction) {
    if (!projects) return;
    const sorted = [...projects].sort((a, b) => a.display_order - b.display_order);
    const idx = sorted.findIndex((p) => p.id === project.id);
    const swapIdx = idx + direction;
    if (swapIdx < 0 || swapIdx >= sorted.length) return;
    const other = sorted[swapIdx];
    setBusyId(project.id);
    try {
      await Promise.all([
        updateProject(project.id, { display_order: other.display_order }),
        updateProject(other.id, { display_order: project.display_order }),
      ]);
      load();
    } catch (err) {
      setToast({ type: 'error', message: err.message });
    } finally {
      setBusyId(null);
    }
  }

  async function confirmDelete() {
    if (!pendingDelete) return;
    setBusyId(pendingDelete.id);
    try {
      await deleteProject(pendingDelete.id);
      setToast({ type: 'success', message: 'Project deleted.' });
      setPendingDelete(null);
      load();
    } catch (err) {
      setToast({ type: 'error', message: err.message });
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-white font-display font-semibold text-2xl">Projects</h1>
        <Link to="/admin/projects/new" className="px-4 py-2.5 rounded-lg bg-brand text-white text-sm font-semibold">
          + New project
        </Link>
      </div>

      <Toast message={toast?.message} type={toast?.type} />
      {error && <p className="text-red-300 text-sm mb-4">{error}</p>}
      {projects === null && !error && <p className="text-ink-secondary text-sm">Loading…</p>}
      {projects?.length === 0 && <p className="text-ink-secondary text-sm">No projects yet. Create your first one.</p>}

      <div className="flex flex-col gap-2.5">
        {projects?.map((project, i) => (
          <div key={project.id} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col nav:flex-row nav:items-center gap-3 nav:gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-white font-medium truncate">{project.title}</span>
                <span className={`text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${statusColors[project.status]}`}>
                  {project.status}
                </span>
                {project.featured && (
                  <span className="text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-brand/20 text-brand-light">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-ink-secondary text-xs mt-1">order: {project.display_order}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <button type="button" disabled={busyId === project.id || i === 0} onClick={() => moveOrder(project, -1)} className="px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-white/15 text-white disabled:opacity-30">
                ↑
              </button>
              <button type="button" disabled={busyId === project.id || i === projects.length - 1} onClick={() => moveOrder(project, 1)} className="px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-white/15 text-white disabled:opacity-30">
                ↓
              </button>
              <button
                type="button"
                disabled={busyId === project.id}
                onClick={() => toggleStatus(project)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/15 text-white disabled:opacity-50"
              >
                {project.status === 'published' ? 'Unpublish' : 'Publish'}
              </button>
              <Link to={`/admin/projects/${project.id}/edit`} className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/15 text-white">
                Edit
              </Link>
              <button
                type="button"
                onClick={() => setPendingDelete(project)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-red-500/40 text-red-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <ConfirmDialog
        open={Boolean(pendingDelete)}
        title="Delete project?"
        message={`This permanently deletes "${pendingDelete?.title}". This cannot be undone.`}
        onCancel={() => setPendingDelete(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
