import { useEffect, useState } from 'react';
import profileImage from '../../me.webp';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'github', label: 'GitHub' },
  { id: 'blog', label: 'Blog' },
];

const Navigation = () => {
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
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-[18px] py-2.5 rounded-full bg-white text-[#1b0709] font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(255,255,255,0.22)]"
          >
            Let&rsquo;s Talk <span aria-hidden="true">&#8599;</span>
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
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
          className="max-w-content mx-auto mt-2.5 grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-1.5 p-3.5 rounded-[22px] border border-white/10 bg-[rgba(28,10,12,0.92)] backdrop-blur-xl"
        >
          {[...navItems, { id: 'contact', label: 'Contact' }].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMenu}
              className="px-3 py-3 rounded-2xl text-[#efd9da] font-semibold text-[15px]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navigation;
