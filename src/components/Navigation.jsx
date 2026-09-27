import { useEffect, useState } from 'react';
import profileImage from '../../me-avatar.webp';
import { useLanguage } from '../lib/LanguageContext.jsx';

const navItems = [
  { id: 'about', en: 'About', zh: '關於我' },
  { id: 'research', en: 'Research', zh: '研究' },
  { id: 'projects', en: 'Projects', zh: '專案' },
  { id: 'skills', en: 'Skills', zh: '技能' },
  { id: 'experience', en: 'Experience', zh: '經歷' },
  { id: 'education', en: 'Education', zh: '學歷' },
  { id: 'github', en: 'GitHub', zh: 'GitHub' },
  { id: 'blog', en: 'Blog', zh: '部落格' },
];

const strings = {
  en: { talk: "Let's Talk", contact: 'Contact', toggleAria: 'Toggle navigation menu' },
  zh: { talk: '聯絡我', contact: '聯絡方式', toggleAria: '切換導覽選單' },
};

const Navigation = () => {
  const { lang, setLang } = useLanguage();
  const t = strings[lang];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', ...navItems.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const LanguageToggle = ({ className = '' }) => (
    <div
      role="group"
      aria-label="Language / 語言"
      className={`inline-flex items-center rounded-full border border-white/[0.14] bg-white/5 p-0.5 text-xs font-semibold ${className}`}
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`px-2.5 py-1.5 rounded-full transition-colors duration-200 ${
          lang === 'en' ? 'bg-white text-[#1b0709]' : 'text-ink-secondary hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('zh')}
        aria-pressed={lang === 'zh'}
        className={`px-2.5 py-1.5 rounded-full transition-colors duration-200 ${
          lang === 'zh' ? 'bg-white text-[#1b0709]' : 'text-ink-secondary hover:text-white'
        }`}
      >
        繁體中文
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 px-3.5 nav:px-7 pt-4">
      <nav
        aria-label="Primary"
        className="max-w-content mx-auto flex items-center justify-between gap-4 rounded-full border border-white/10 bg-[rgba(28,10,12,0.62)] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] py-2.5 pl-3.5 pr-3"
      >
        <a href="#hero" className="flex items-center gap-2.5 font-display font-semibold text-[15px] tracking-tight text-white shrink-0 whitespace-nowrap">
          <img
            src={profileImage}
            alt=""
            width="32"
            height="32"
            loading="eager"
            className="w-8 h-8 rounded-full object-cover bg-[#3a1114] border border-white/25"
            style={{ objectPosition: '50% 12%' }}
          />
          Maryam Mahmoudi
        </a>

        <div className="hidden nav:flex items-center gap-1.5 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? 'true' : undefined}
              className={`px-2.5 py-2 rounded-full transition-colors duration-200 ${
                activeSection === item.id ? 'text-white bg-white/[0.09]' : 'text-ink-secondary hover:text-white hover:bg-white/[0.07]'
              }`}
            >
              {lang === 'zh' ? item.zh : item.en}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <LanguageToggle className="hidden nav:inline-flex" />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-[18px] py-2.5 rounded-full bg-white text-[#1b0709] font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(255,255,255,0.22)]"
          >
            {t.talk} <span aria-hidden="true">&#8599;</span>
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={t.toggleAria}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="nav:hidden inline-flex items-center justify-center w-[42px] h-[42px] rounded-full border border-white/[0.14] bg-white/5 text-white text-lg"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="max-w-content mx-auto mt-2.5 flex flex-col gap-2.5 p-3.5 rounded-[22px] border border-white/10 bg-[rgba(28,10,12,0.92)] backdrop-blur-xl"
        >
          <LanguageToggle className="self-start" />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-1.5">
            {[...navItems, { id: 'contact', en: t.contact, zh: t.contact }].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className="px-3 py-3 rounded-2xl text-[#efd9da] font-semibold text-[15px]"
              >
                {lang === 'zh' ? item.zh : item.en}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
