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
  },
  zh: {
    eyebrow: '精選專案',
    heading: '精選專案',
    lede: '以後端為核心的系統，讓 AI 在通過測試的 API、明確的政策邊界、可觀測的工作流程與文件化架構之中運作。',
    highlights: '工程亮點',
    note: '備註',
  },
};

const Projects = () => {
  const { lang } = useLanguage();
  const t = strings[lang];

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
        {projects.map((project) => (
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
    </section>
  );
};

export default Projects;
