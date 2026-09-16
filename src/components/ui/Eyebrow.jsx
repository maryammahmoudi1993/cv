const Eyebrow = ({ children, className = '' }) => (
  <p className={`font-mono text-xs tracking-[0.22em] uppercase text-ink-eyebrow mb-3.5 ${className}`}>
    {children}
  </p>
);

export default Eyebrow;
