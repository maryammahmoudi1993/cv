const quickLinks = ['about', 'research', 'projects', 'experience', 'contact'];

const socials = [
  { href: 'https://www.linkedin.com/in/maryam-mahmoudi-8882857b/', label: 'LinkedIn profile', text: 'in' },
  { href: 'https://github.com/maryammahmoudi1993', label: 'GitHub profile', text: 'gh' },
  { href: 'mailto:mahmoodi.maryam1993@gmail.com', label: 'Send an email', text: '@' },
];

const Footer = () => (
  <footer className="relative z-10 border-t border-white/[0.08] bg-bg-footer">
    <div className="max-w-content mx-auto px-5 nav:px-10 py-10 nav:py-[66px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-7 nav:gap-12">
      <div>
        <h2 className="m-0 mb-3 font-display font-semibold text-xl text-white">Maryam Mahmoudi</h2>
        <p className="m-0 mb-[18px] max-w-[38ch] text-sm leading-relaxed text-[#c3a1a4] text-pretty">
          AI researcher and backend engineer building dependable systems around intelligent components.
        </p>
        <div className="flex flex-wrap gap-2.5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={social.label}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.14] text-ink-tag font-mono text-[13px] transition-colors duration-200 hover:bg-white/10 hover:text-white"
            >
              {social.text}
            </a>
          ))}
        </div>
      </div>
      <nav aria-label="Quick links">
        <h3 className="m-0 mb-3.5 font-mono font-medium text-[11px] tracking-[0.18em] uppercase text-[#c3a1a4]">Quick Links</h3>
        <ul className="m-0 p-0 flex flex-col gap-2.5 text-[15px]">
          {quickLinks.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="text-[#e2c9cb] capitalize hover:text-white">{id}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <h3 className="m-0 mb-3.5 font-mono font-medium text-[11px] tracking-[0.18em] uppercase text-[#c3a1a4]">Focus</h3>
        <ul className="m-0 p-0 flex flex-col gap-2.5 text-[15px] text-[#c3a1a4]">
          <li>AI research and applied machine learning</li>
          <li>Backend architecture and APIs</li>
          <li>Reliable agentic systems</li>
          <li>Testing, CI/CD, and observability</li>
        </ul>
      </div>
    </div>
    <div className="max-w-content mx-auto px-5 nav:px-10 pb-7 nav:pb-11 flex flex-wrap items-center justify-between gap-3 text-[13px] text-ink-muted">
      <p className="m-0">&copy; 2026 Maryam Mahmoudi. All rights reserved.</p>
      <a href="#hero" className="text-[#c3a1a4] hover:text-white">Back to Top &#8593;</a>
    </div>
  </footer>
);

export default Footer;
