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
  <section id="projects" className="py-20 bg-light-bg dark:bg-dark-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">Featured Projects</h2>
        <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto mb-5"></div>
        <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto">
          Backend-first systems where AI operates within tested APIs, explicit policy boundaries, observable workflows, and documented architecture.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <article key={project.title} className="project-card bg-white dark:bg-slate-800 rounded-lg shadow-lg p-7 flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-light dark:text-accent-dark mb-3">{project.eyebrow}</p>
            <h3 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">{project.title}</h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-5">{project.description}</p>
            <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">Engineering highlights</h4>
            <ul className="space-y-3 mb-6 flex-1">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  <i className="fas fa-check text-accent-light dark:text-accent-dark mr-3 mt-1" aria-hidden="true"></i>{feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((item) => <span key={item} className="px-2 py-1 bg-primary-light/10 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark rounded text-xs font-medium">{item}</span>)}
            </div>
            <div className="flex gap-3">
              <a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 border border-primary-light text-primary-light dark:text-primary-dark dark:border-primary-dark rounded-lg font-medium hover:bg-primary-light hover:text-white transition-colors">
                <i className="fab fa-github mr-2" aria-hidden="true"></i>Source
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  <i className="fas fa-arrow-up-right-from-square mr-2" aria-hidden="true"></i>Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-14">
        <h3 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6">Earlier Projects</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {earlierProjects.map((project) => (
            <a key={project.title} href={project.url} target="_blank" rel="noreferrer" className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow flex justify-between gap-4 hover:text-primary-light dark:hover:text-primary-dark">
              <span><strong className="block text-text-primary-light dark:text-text-primary-dark">{project.title}</strong><span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{project.detail}</span></span>
              <i className="fab fa-github mt-1" aria-hidden="true"></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
