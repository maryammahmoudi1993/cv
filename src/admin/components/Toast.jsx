export default function Toast({ message, type = 'success' }) {
  if (!message) return null;
  const tone = type === 'error' ? 'bg-red-500/15 border-red-500/40 text-red-200' : 'bg-emerald-500/15 border-emerald-500/40 text-emerald-200';
  return (
    <div role="status" className={`mb-5 rounded-lg border px-4 py-3 text-sm ${tone}`}>
      {message}
    </div>
  );
}
