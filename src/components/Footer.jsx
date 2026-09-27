import { useLanguage } from '../lib/LanguageContext.jsx';

const EMAIL = 'mahmoodi.maryam1993@gmail.com';

const quickLinks = [
  { id: 'about', en: 'About', zh: '關於我' },
  { id: 'research', en: 'Research', zh: '研究' },
  { id: 'projects', en: 'Projects', zh: '專案' },
  { id: 'experience', en: 'Experience', zh: '經歷' },
  { id: 'contact', en: 'Contact', zh: '聯絡方式' },
];

const socials = [
  { href: 'https://www.linkedin.com/in/maryam-mahmoudi-8882857b/', label: 'LinkedIn profile', text: 'in' },
  { href: 'https://github.com/maryammahmoudi1993', label: 'GitHub profile', text: 'gh' },
  // Scholar profile not yet published — owner to update once the Google Scholar page is live.
  { href: null, label: 'Google Scholar profile (coming soon)', text: 'sc' },
  { href: `mailto:${EMAIL}`, label: 'Send an email', text: '@' },
];

const strings = {
  en: {
    tagline: 'AI researcher and backend engineer building dependable systems around intelligent components.',
    quickLinks: 'Quick Links',
    focus: 'Focus',
    focusItems: [
      'AI research and applied machine learning',
      'Backend architecture and APIs',
      'Reliable agentic systems',
      'Testing, CI/CD, and observability',
    ],
    rights: '© 2026 Maryam Mahmoudi. All rights reserved.',
    backToTop: 'Back to Top ↑',
  },
  zh: {
    tagline: 'AI 研究員暨後端工程師，致力於圍繞智慧元件打造可靠系統。',
    quickLinks: '快速連結',
    focus: '專注領域',
    focusItems: ['AI 研究與應用機器學習', '後端架構與 API', '可靠的代理系統', '測試、CI/CD 與可觀測性'],
    rights: '© 2026 Maryam Mahmoudi. 保留所有權利。',
    backToTop: '回到頂端 ↑',
  },
};

const Footer = () => {
  const { lang } = useLanguage();
  const t = strings[lang];

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-bg-footer">
      <div className="max-w-content mx-auto px-5 nav:px-10 py-10 nav:py-[66px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-7 nav:gap-12">
        <div>
          <h2 className="m-0 mb-3 font-display font-semibold text-xl text-white">Maryam Mahmoudi</h2>
          <p className="m-0 mb-[18px] max-w-[38ch] text-sm leading-relaxed text-[#c3a1a4] text-pretty">
            {t.tagline}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {socials.map((social) =>
              social.href ? (
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
              ) : (
                <span
                  key={social.label}
                  aria-label={social.label}
                  title={social.label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.14] text-ink-tag font-mono text-[13px] opacity-60"
                >
                  {social.text}
                </span>
              )
            )}
          </div>
        </div>
        <nav aria-label="Quick links">
          <h3 className="m-0 mb-3.5 font-mono font-medium text-[11px] tracking-[0.18em] uppercase text-[#c3a1a4]">{t.quickLinks}</h3>
          <ul className="m-0 p-0 flex flex-col gap-2.5 text-[15px]">
            {quickLinks.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-[#e2c9cb] hover:text-white">{lang === 'zh' ? item.zh : item.en}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="m-0 mb-3.5 font-mono font-medium text-[11px] tracking-[0.18em] uppercase text-[#c3a1a4]">{t.focus}</h3>
          <ul className="m-0 p-0 flex flex-col gap-2.5 text-[15px] text-[#c3a1a4]">
            {t.focusItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-content mx-auto px-5 nav:px-10 pb-7 nav:pb-11 flex flex-wrap items-center justify-between gap-3 text-[13px] text-ink-muted">
        <p className="m-0">{t.rights}</p>
        <a href="#hero" className="text-[#c3a1a4] hover:text-white">{t.backToTop}</a>
      </div>
    </footer>
  );
};

export default Footer;
