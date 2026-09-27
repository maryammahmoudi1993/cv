import Eyebrow from './ui/Eyebrow.jsx';
import Tag from './ui/Tag.jsx';
import { projects } from '../lib/projectsData.js';
import { useLanguage } from '../lib/LanguageContext.jsx';

const strings = {
  en: {
    eyebrow: 'Featured Projects',
    heading: 'Featured Projects',
    lede: 'Backend-first systems where AI operates within tested APIs, explicit policy boundaries, observable workflows, and documented architecture.',
    highlights: 'Engineering highlights',
    note: 'Note',
    designHeading: 'Design & UX Work',
    designLede: 'Selected interface and experience design projects',
  },
  zh: {
    eyebrow: '精選專案',
    heading: '精選專案',
    lede: '以後端為核心的系統，讓 AI 在通過測試的 API、明確的政策邊界、可觀測的工作流程與文件化架構之中運作。',
    highlights: '工程亮點',
    note: '備註',
    designHeading: '設計與使用者體驗作品',
    designLede: '精選介面與體驗設計作品',
  },
};

const Projects = () => {
  const { lang } = useLanguage();
  const t = strings[lang];
  const engineeringProjects = projects.filter((project) => project.category !== 'design');
  const designProjects = projects.filter((project) => project.category === 'design');

  return (
    <section id="projects" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <h2 className="m-0 mb-3.5 font-display font-semibold text-[clamp(26px,3.2vw,40px)] tracking-tight text-white">
        {t.heading}
      </h2>
      <p className="m-0 mb-9 nav:mb-11 max-w-[70ch] text-[clamp(15px,1.1vw,17px)] leading-relaxed text-ink-secondary text-pretty">
        {t.lede}
      </p>

      <div className="flex flex-col gap-5">
        {engineeringProjects.map((project) => (
          <article
            key={project.id}
            className={`p-6 nav:p-9 rounded-3xl border ${
              project.featured ? 'border-white/20 card-tint' : 'border-white/10 card-surface'
            }`}
          >
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              {project.status && (
                <p className="m-0 inline-flex px-3 py-1.5 rounded-full border border-white/[0.16] font-mono text-[11px] tracking-[0.1em] uppercase text-[#f3c3c5]">
                  {project.status[lang]}
                </p>
              )}
              {project.metrics && (
                <p className="m-0 font-mono text-[11px] tracking-[0.08em] text-ink-muted">{project.metrics[lang]}</p>
              )}
            </div>
            <h3 className="m-0 mb-2 font-display font-bold text-[clamp(23px,2.4vw,31px)] tracking-tight text-white">
              {project.title[lang]}
            </h3>
            <p className="m-0 mb-1.5 font-mono text-xs tracking-[0.08em] uppercase text-[#c3a1a4]">{project.role}</p>
            <p className="m-0 mb-6 max-w-[78ch] text-[clamp(15px,1.1vw,16px)] leading-relaxed text-ink-secondary text-pretty">
              {project.tagline[lang]}
            </p>

            {project.bullets?.[lang]?.length > 0 && (
              <>
                <h4 className="m-0 mb-3 font-mono font-medium text-xs tracking-[0.14em] uppercase text-[#c3a1a4]">
                  {t.highlights}
                </h4>
                <ul className="m-0 mb-6 p-0 flex flex-col gap-2.5">
                  {project.bullets[lang].map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-[#e2c9cb]">
                      <span aria-hidden="true" className="shrink-0 mt-2 w-[5px] h-[5px] rounded-full bg-brand-light" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {project.stack?.length > 0 && (
              <ul className="m-0 mb-6 p-0 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            )}

            {project.note && (
              <p className="m-0 mb-2 text-xs leading-relaxed text-ink-muted">
                <strong className="text-[#c3a1a4] font-semibold">{t.note}: </strong>
                {project.note[lang]}
              </p>
            )}

            <div className="flex flex-wrap gap-2.5">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-bg-soft border border-white/[0.14] text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.34]"
                >
                  Source
                </a>
              )}
              {project.demo_url && (
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(181,31,40,0.45)]"
                >
                  Live Demo <span aria-hidden="true">&#8599;</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {designProjects.length > 0 && (
        <div className="mt-12 nav:mt-16">
          <h3 className="m-0 mb-2 font-display font-semibold text-[clamp(20px,2.2vw,28px)] tracking-tight text-white">
            {t.designHeading}
          </h3>
          <p className="m-0 mb-6 text-sm leading-relaxed text-ink-muted">{t.designLede}</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4">
            {designProjects.map((project) => (
              <article key={project.id} className="p-5 rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  {project.status && (
                    <p className="m-0 inline-flex px-2.5 py-1 rounded-full border border-white/[0.14] font-mono text-[10px] tracking-[0.08em] uppercase text-[#c3a1a4]">
                      {project.status[lang]}
                    </p>
                  )}
                </div>
                <h4 className="m-0 mb-1.5 font-display font-semibold text-[17px] leading-snug text-white">
                  {project.title[lang]}
                </h4>
                <p className="m-0 mb-1 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-muted">{project.role}</p>
                <p className="m-0 mb-4 text-sm leading-relaxed text-[#c3a1a4]">{project.tagline[lang]}</p>
                {project.stack?.length > 0 && (
                  <ul className="m-0 p-0 flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
