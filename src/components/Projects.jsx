import { useEffect, useState } from 'react';
import Eyebrow from './ui/Eyebrow.jsx';
import Tag from './ui/Tag.jsx';
import { fetchPublishedProjects } from '../lib/projects.js';
import { isSupabaseConfigured } from '../lib/supabaseClient.js';

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setProjects([]);
      return;
    }
    let active = true;
    fetchPublishedProjects()
      .then((data) => active && setProjects(data))
      .catch(() => active && setProjects([]));
    return () => {
      active = false;
    };
  }, []);

  const featuredProjects = (projects ?? []).filter((p) => p.featured);
  const earlierProjects = (projects ?? []).filter((p) => !p.featured);

  return (
    <section id="projects" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
      <Eyebrow>Featured Projects</Eyebrow>
      <h2 className="m-0 mb-3.5 font-display font-semibold text-[clamp(26px,3.2vw,40px)] tracking-tight text-white">
        Featured Projects
      </h2>
      <p className="m-0 mb-9 nav:mb-11 max-w-[70ch] text-[clamp(15px,1.1vw,17px)] leading-relaxed text-ink-secondary text-pretty">
        Backend-first systems where AI operates within tested APIs, explicit policy boundaries, observable workflows, and documented architecture.
      </p>

      {projects === null && <p className="text-ink-secondary text-sm">Loading projects…</p>}

      {projects && featuredProjects.length > 0 && (
        <div className="flex flex-col gap-5">
          {featuredProjects.map((project) => (
            <article key={project.id} className="p-6 nav:p-9 rounded-3xl border border-white/10 card-surface">
              {project.eyebrow && (
                <p className="m-0 mb-3 font-mono text-[11px] tracking-[0.12em] uppercase text-[#f3a2a6]">{project.eyebrow}</p>
              )}
              <h3 className="m-0 mb-3.5 font-display font-bold text-[clamp(23px,2.4vw,31px)] tracking-tight text-white">{project.title}</h3>
              {project.description && (
                <p className="m-0 mb-6 max-w-[78ch] text-[clamp(15px,1.1vw,16px)] leading-relaxed text-ink-secondary text-pretty">
                  {project.description}
                </p>
              )}
              {project.features?.length > 0 && (
                <>
                  <h4 className="m-0 mb-3 font-mono font-medium text-xs tracking-[0.14em] uppercase text-[#c3a1a4]">Engineering highlights</h4>
                  <ul className="m-0 mb-6 p-0 flex flex-col gap-2.5">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-[15px] leading-relaxed text-[#e2c9cb]">
                        <span aria-hidden="true" className="shrink-0 mt-2 w-[5px] h-[5px] rounded-full bg-brand-light" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {project.technologies?.length > 0 && (
                <ul className="m-0 mb-6 p-0 flex flex-wrap gap-2">
                  {project.technologies.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </ul>
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
                {project.case_study_url && (
                  <a
                    href={project.case_study_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-bg-soft border border-white/[0.14] text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.34]"
                  >
                    Case Study
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {projects && earlierProjects.length > 0 && (
        <>
          <h3 className="mt-9 nav:mt-[54px] mb-[18px] font-display font-semibold text-[clamp(20px,2vw,26px)] text-white">Earlier Projects</h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-3.5">
            {earlierProjects.map((project) => (
              <a
                key={project.id}
                href={project.github_url || project.demo_url || '#'}
                target="_blank"
                rel="noreferrer"
                className="block p-6 rounded-[20px] border border-white/[0.09] bg-white/[0.035] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.24] hover:bg-white/[0.06]"
              >
                <strong className="block mb-2 font-display font-semibold text-[17px] text-white">{project.title}</strong>
                <span className="text-sm leading-relaxed text-[#c3a1a4]">{project.short_description || project.description}</span>
              </a>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
