import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../lib/AuthContext.jsx';
import { isSupabaseConfigured } from '../../lib/supabaseClient.js';

export default function LoginPage() {
  const { isAuthenticated, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (isAuthenticated) {
    const redirectTo = location.state?.from ?? '/admin';
    return <Navigate to={redirectTo} replace />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await signIn(email, password);
      navigate('/admin', { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed. Check your credentials.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 rounded-2xl border border-white/10 bg-white/[0.03]"
      >
        <h1 className="text-white font-display font-semibold text-2xl mb-1">Admin login</h1>
        <p className="text-ink-secondary text-sm mb-6">Sign in to manage posts and projects.</p>

        {!isSupabaseConfigured && (
          <p className="mb-4 text-sm text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
            Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.
          </p>
        )}

        <label className="block mb-3">
          <span className="block text-xs font-medium text-ink-secondary mb-1.5">Email</span>
          <input
            type="email"
            required
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg bg-bg-soft border border-white/15 px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-brand"
          />
        </label>
        <label className="block mb-5">
          <span className="block text-xs font-medium text-ink-secondary mb-1.5">Password</span>
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg bg-bg-soft border border-white/15 px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-brand"
          />
        </label>

        {error && (
          <p role="alert" className="mb-4 text-sm text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg p-3">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting || !isSupabaseConfigured}
          className="w-full px-4 py-2.5 rounded-lg bg-brand text-white font-semibold text-sm disabled:opacity-50"
        >
          {submitting ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
