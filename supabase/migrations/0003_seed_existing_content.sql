-- Migrates the content that was previously hardcoded in
-- src/components/Blog.jsx and src/components/Projects.jsx into the CMS
-- tables, so no existing content is lost when the components switch to
-- reading from Supabase. Existing images stay on their current URLs
-- (repo-hosted assets); re-upload through /admin to move them to Storage.

insert into public.posts
  (title, slug, excerpt, external_url, cover_image_url, status, tags, read_time, published_at)
values (
  'How I Used LLMs and LangChain to Understand Customer Emotions and Behaviors in Real-Time',
  'how-i-used-llms-and-langchain-to-understand-customer-emotions-and-behaviors-in-real-time',
  'A comprehensive guide on implementing real-time customer sentiment analysis using Large Language Models and LangChain framework.',
  'https://medium.com/@mahmoodi.maryam1993/how-i-used-llms-and-langchain-to-understand-customer-emotions-and-behaviors-in-real-time-89c64bedd3d4',
  '/cv/blog-llm-langchain.webp',
  'published',
  array['LLM', 'LangChain', 'Sentiment Analysis', 'Customer Analytics'],
  '5 min read',
  '2025-01-01T00:00:00Z'
)
on conflict (slug) do nothing;

insert into public.projects
  (title, slug, eyebrow, description, features, technologies, github_url, demo_url, display_order, featured, status)
values
(
  'BloomFlow AI',
  'bloomflow-ai',
  'Production-grade platform · Live',
  'Appointment booking and multi-business management platform built around a Django/DRF backend, with AI and predictive features integrated behind explicit permissions and workflows.',
  array[
    'JWT authentication, multi-business RBAC, role-scoped views, and appointment audit logs',
    'Timezone-aware scheduling with transactional conflict prevention, working hours, breaks, and time off',
    'Gemini copilot with 23 registered tools, confirmation-gated booking, persistence, and rate limits',
    'XGBoost no-show prediction with SHAP explanations, revenue forecasting, loyalty, promotions, and HMAC-signed webhooks',
    '331 pytest tests, GitHub Actions CI, multi-stage Docker builds, and Swagger/ReDoc documentation'
  ],
  array['Django 5.2', 'DRF', 'React 19', 'TypeScript', 'PostgreSQL', 'Gemini', 'XGBoost', 'Docker'],
  'https://github.com/maryammahmoudi1993/appointment-booking-api-django',
  'https://bloomflow-ai.onrender.com',
  1,
  true,
  'published'
),
(
  'DocPilot AI',
  'docpilot-ai',
  'Portfolio demonstration project',
  'Document intelligence and workflow copilot designed as a transparent portfolio demonstration; sample metrics, integrations, and workflows are illustrative rather than claims of customer or production usage.',
  array[
    'OCR/parsing, document classification, and structured extraction with field-level confidence',
    'Human review and correction, approval flows, semantic indexing, and grounded RAG answers with citations',
    'Immutable audit history, workflow automation, notifications, webhooks, and operational analytics',
    'Django/DRF modular monolith with Celery/Redis, PostgreSQL/pgvector, MinIO, and a React/TypeScript frontend',
    'CI validation, Docker Compose environments, architecture diagrams, ADRs, security assumptions, limitations, and release documentation'
  ],
  array['Django', 'DRF', 'React', 'TypeScript', 'Celery', 'Redis', 'pgvector', 'MinIO'],
  'https://github.com/maryammahmoudi1993/DocPilot-AI---Document-Intelligence---Workflow-Copilot',
  null,
  2,
  true,
  'published'
),
(
  'SupportPilot AI',
  'supportpilot-ai',
  'Agentic customer operations',
  'A customer-operations platform that treats the model as an untrusted decision participant inside a bounded, database-authoritative execution system.',
  array[
    'Tenant-scoped RAG and bounded multi-turn orchestration with deterministic escalation and handoff',
    'Server-owned typed tool registry with validation, idempotency, timeouts, retries, and safe structured traces',
    'Versioned policy rules and fail-closed approval gates for risky actions such as refunds and bookings',
    'Immutable audit history plus durable Celery delivery and DNS-rebinding-safe, HMAC-signed outbound webhooks',
    'Django/DRF backend, React/TypeScript frontend scaffold, Docker environments, GitHub Actions CI, ADRs, and adversarial/concurrency tests'
  ],
  array['Django', 'DRF', 'React', 'TypeScript', 'LangGraph', 'PostgreSQL', 'Celery', 'Docker'],
  'https://github.com/maryammahmoudi1993/SupportPilot-AI',
  null,
  3,
  true,
  'published'
),
(
  'AI-Powered Customer Chat Analyzer',
  'ai-powered-customer-chat-analyzer',
  'Earlier project',
  'NLP, summarization, sentiment analysis, FastAPI, and Redis',
  array[]::text[],
  array[]::text[],
  'https://github.com/maryammahmoudi1993/ChatSummerizer',
  null,
  4,
  false,
  'published'
),
(
  'English–Spanish Neural Machine Translation',
  'english-spanish-neural-machine-translation',
  'Earlier project',
  'Encoder–decoder LSTM translation project',
  array[]::text[],
  array[]::text[],
  'https://github.com/maryammahmoudi1993/Translation-spanish-english',
  null,
  5,
  false,
  'published'
)
on conflict (slug) do nothing;
