import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllPosts, deletePost, updatePost } from '../../lib/posts.js';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import Toast from '../components/Toast.jsx';

const statusColors = {
  published: 'bg-emerald-500/15 text-emerald-300',
  draft: 'bg-amber-500/15 text-amber-300',
  archived: 'bg-white/10 text-ink-secondary',
};

export default function PostsListPage() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState('');
  const [toast, setToast] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);
  const [busyId, setBusyId] = useState(null);

  function load() {
    fetchAllPosts()
      .then(setPosts)
      .catch((err) => setError(err.message));
  }

  useEffect(load, []);

  async function toggleStatus(post) {
    setBusyId(post.id);
    try {
      const nextStatus = post.status === 'published' ? 'draft' : 'published';
      const payload = { status: nextStatus };
      if (nextStatus === 'published' && !post.published_at) payload.published_at = new Date().toISOString();
      await updatePost(post.id, payload);
      setToast({ type: 'success', message: nextStatus === 'published' ? 'Post published.' : 'Post unpublished.' });
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
      await deletePost(pendingDelete.id);
      setToast({ type: 'success', message: 'Post deleted.' });
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
        <h1 className="text-white font-display font-semibold text-2xl">Posts</h1>
        <Link to="/admin/posts/new" className="px-4 py-2.5 rounded-lg bg-brand text-white text-sm font-semibold">
          + New post
        </Link>
      </div>

      <Toast message={toast?.message} type={toast?.type} />
      {error && <p className="text-red-300 text-sm mb-4">{error}</p>}
      {posts === null && !error && <p className="text-ink-secondary text-sm">Loading…</p>}
      {posts?.length === 0 && <p className="text-ink-secondary text-sm">No posts yet. Create your first one.</p>}

      <div className="flex flex-col gap-2.5">
        {posts?.map((post) => (
          <div key={post.id} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col nav:flex-row nav:items-center gap-3 nav:gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-white font-medium truncate">{post.title}</span>
                <span className={`text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${statusColors[post.status]}`}>
                  {post.status}
                </span>
              </div>
              <p className="text-ink-secondary text-xs mt-1">/blog/{post.slug}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                type="button"
                disabled={busyId === post.id}
                onClick={() => toggleStatus(post)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/15 text-white disabled:opacity-50"
              >
                {post.status === 'published' ? 'Unpublish' : 'Publish'}
              </button>
              <Link to={`/admin/posts/${post.id}/edit`} className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/15 text-white">
                Edit
              </Link>
              <button
                type="button"
                onClick={() => setPendingDelete(post)}
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
        title="Delete post?"
        message={`This permanently deletes "${pendingDelete?.title}". This cannot be undone.`}
        onCancel={() => setPendingDelete(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
