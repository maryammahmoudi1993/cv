import Eyebrow from './ui/Eyebrow.jsx';
import Tag from './ui/Tag.jsx';

const featuredProjects = [
  {
    title: 'BloomFlow AI',
    eyebrow: 'Production-grade platform · Live',
    description: 'Appointment booking and multi-business management platform built around a Django/DRF backend, with AI and predictive features integrated behind explicit permissions and workflows.',
    features: [
      'JWT authentication, multi-business RBAC, role-scoped views, and appointment audit logs',
      'Timezone-aware scheduling with transactional conflict prevention, working hours, breaks, and time off',
      'Gemini copilot with 23 registered tools, confirmation-gated booking, persistence, and rate limits',
      'XGBoost no-show prediction with SHAP explanations, revenue forecasting, loyalty, promotions, and HMAC-signed webhooks',
      '331 pytest tests, GitHub Actions CI, multi-stage Docker builds, and Swagger/ReDoc documentation',
    ],
    tech: ['Django 5.2', 'DRF', 'React 19', 'TypeScript', 'PostgreSQL', 'Gemini', 'XGBoost', 'Docker'],
    github: 'https://github.com/maryammahmoudi1993/appointment-booking-api-django',
    demo: 'https://bloomflow-ai.onrender.com',
  },
  {
    title: 'DocPilot AI',
    eyebrow: 'Portfolio demonstration project',
    description: 'Document intelligence and workflow copilot designed as a transparent portfolio demonstration; sample metrics, integrations, and workflows are illustrative rather than claims of customer or production usage.',
    features: [
      'OCR/parsing, document classification, and structured extraction with field-level confidence',
      'Human review and correction, approval flows, semantic indexing, and grounded RAG answers with citations',
      'Immutable audit history, workflow automation, notifications, webhooks, and operational analytics',
      'Django/DRF modular monolith with Celery/Redis, PostgreSQL/pgvector, MinIO, and a React/TypeScript frontend',
      'CI validation, Docker Compose environments, architecture diagrams, ADRs, security assumptions, limitations, and release documentation',
    ],
    tech: ['Django', 'DRF', 'React', 'TypeScript', 'Celery', 'Redis', 'pgvector', 'MinIO'],
    github: 'https://github.com/maryammahmoudi1993/DocPilot-AI---Document-Intelligence---Workflow-Copilot',
  },
  {
    title: 'SupportPilot AI',
    eyebrow: 'Agentic customer operations',
    description: 'A customer-operations platform that treats the model as an untrusted decision participant inside a bounded, database-authoritative execution system.',
    features: [
      'Tenant-scoped RAG and bounded multi-turn orchestration with deterministic escalation and handoff',
      'Server-owned typed tool registry with validation, idempotency, timeouts, retries, and safe structured traces',
      'Versioned policy rules and fail-closed approval gates for risky actions such as refunds and bookings',
      'Immutable audit history plus durable Celery delivery and DNS-rebinding-safe, HMAC-signed outbound webhooks',
      'Django/DRF backend, React/TypeScript frontend scaffold, Docker environments, GitHub Actions CI, ADRs, and adversarial/concurrency tests',
    ],
    tech: ['Django', 'DRF', 'React', 'TypeScript', 'LangGraph', 'PostgreSQL', 'Celery', 'Docker'],
    github: 'https://github.com/maryammahmoudi1993/SupportPilot-AI',
  },
];

const earlierProjects = [
  { title: 'AI-Powered Customer Chat Analyzer', url: 'https://github.com/maryammahmoudi1993/ChatSummerizer', detail: 'NLP, summarization, sentiment analysis, FastAPI, and Redis' },
  { title: 'English–Spanish Neural Machine Translation', url: 'https://github.com/maryammahmoudi1993/Translation-spanish-english', detail: 'Encoder–decoder LSTM translation project' },
];

const Projects = () => (
  <section id="projects" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
    <Eyebrow>Featured Projects</Eyebrow>
    <h2 className="m-0 mb-3.5 font-display font-semibold text-[clamp(26px,3.2vw,40px)] tracking-tight text-white">
      Featured Projects
    </h2>
    <p className="m-0 mb-9 nav:mb-11 max-w-[70ch] text-[clamp(15px,1.1vw,17px)] leading-relaxed text-ink-secondary text-pretty">
      Backend-first systems where AI operates within tested APIs, explicit policy boundaries, observable workflows, and documented architecture.
    </p>

    <div className="flex flex-col gap-5">
      {featuredProjects.map((project) => (
        <article key={project.title} className="p-6 nav:p-9 rounded-3xl border border-white/10 card-surface">
          <p className="m-0 mb-3 font-mono text-[11px] tracking-[0.12em] uppercase text-[#f3a2a6]">{project.eyebrow}</p>
          <h3 className="m-0 mb-3.5 font-display font-bold text-[clamp(23px,2.4vw,31px)] tracking-tight text-white">{project.title}</h3>
          <p className="m-0 mb-6 max-w-[78ch] text-[clamp(15px,1.1vw,16px)] leading-relaxed text-ink-secondary text-pretty">{project.description}</p>
          <h4 className="m-0 mb-3 font-mono font-medium text-xs tracking-[0.14em] uppercase text-[#c3a1a4]">Engineering highlights</h4>
          <ul className="m-0 mb-6 p-0 flex flex-col gap-2.5">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-[15px] leading-relaxed text-[#e2c9cb]">
                <span aria-hidden="true" className="shrink-0 mt-2 w-[5px] h-[5px] rounded-full bg-brand-light" />
                {feature}
              </li>
            ))}
          </ul>
          <ul className="m-0 mb-6 p-0 flex flex-wrap gap-2">
            {project.tech.map((item) => <Tag key={item}>{item}</Tag>)}
          </ul>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-bg-soft border border-white/[0.14] text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.34]"
            >
              Source
            </a>
            {project.demo && (
              <a
                href={project.demo}
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

    <h3 className="mt-9 nav:mt-[54px] mb-[18px] font-display font-semibold text-[clamp(20px,2vw,26px)] text-white">Earlier Projects</h3>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-3.5">
      {earlierProjects.map((project) => (
        <a
          key={project.title}
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="block p-6 rounded-[20px] border border-white/[0.09] bg-white/[0.035] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.24] hover:bg-white/[0.06]"
        >
          <strong className="block mb-2 font-display font-semibold text-[17px] text-white">{project.title}</strong>
          <span className="text-sm leading-relaxed text-[#c3a1a4]">{project.detail}</span>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
