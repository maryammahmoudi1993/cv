# Maryam Mahmoudi — Portfolio

Personal portfolio for Maryam Mahmoudi, an AI PhD researcher and backend engineer working at the intersection of intelligent systems and production-grade software.

The site highlights research at National Yunlin University of Science and Technology (YunTech), backend and applied-AI experience, and three engineering-focused projects: BloomFlow AI, DocPilot AI, and SupportPilot AI.

## Stack

- React 19
- Vite 7
- Tailwind CSS 3
- Static server rendering with React DOM Server
- GitHub Actions and GitHub Pages

Vite produces the browser bundle and a temporary SSR bundle. The post-build prerender step renders the React application into the generated `dist/index.html`, so search engines and link previews receive meaningful HTML without waiting for client-side JavaScript.

## Project structure

```text
.
├── public/                  Static metadata, favicons, and social assets
├── scripts/prerender.mjs   Injects server-rendered React into dist/index.html
├── supabase/migrations/    SQL schema, RLS policies, storage buckets, content seed
├── docs/                   Architecture notes
├── src/
│   ├── components/         Portfolio sections and shared UI (read CMS data)
│   ├── pages/              Public route pages (Home, blog post detail)
│   ├── admin/              Admin panel (routes, layout, CRUD forms)
│   ├── lib/                Supabase client, auth context, data access, validation
│   ├── App.jsx             Route definitions
│   ├── entry-server.jsx    Server-render entry
│   └── main.jsx            Browser hydration entry
├── index.html              Document metadata and Vite entry
├── styles.css              Tailwind layers and custom styles
└── vite.config.js          Vite build configuration
```

## Admin CMS

The site includes an admin panel at `/admin` for managing blog posts and portfolio
projects without editing code. See [docs/ADMIN_CMS_ARCHITECTURE.md](docs/ADMIN_CMS_ARCHITECTURE.md)
for the full architecture writeup. In short: content lives in a Supabase Postgres
database and is fetched by the public site (and edited in `/admin`) directly from the
browser, so publishing content does not require a rebuild or redeploy.

### One-time Supabase setup

1. Create a free project at [supabase.com](https://supabase.com).
2. In the Supabase SQL editor, run the migrations in `supabase/migrations/` in order
   (`0001_init.sql`, `0002_storage.sql`, `0003_seed_existing_content.sql`). These create
   the `posts` and `projects` tables with Row Level Security, the storage buckets for
   images, and seed the content that used to be hardcoded in the components.
3. In **Authentication → Users**, create one admin user (email + password) — this is
   the only account, there is no public sign-up.
4. In **Project Settings → API**, copy the Project URL and the `anon` public key.

### Local development

Requirements:

- Node.js 24
- npm 11 or newer

Copy the environment template and fill in your Supabase project details:

```bash
cp .env.example .env
# edit .env: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY
```

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Vite prints the local URL in the terminal. The portfolio is served under its GitHub Pages base path, normally `http://localhost:5173/cv/`. The admin panel is at `http://localhost:5173/cv/admin/login`.

### Tests

```bash
npm test
```

## Production build

```bash
npm run build
```

The command:

1. creates the optimized client bundle;
2. creates the temporary server-render bundle;
3. injects the rendered portfolio into `dist/index.html`;
4. removes the temporary `dist-ssr` directory.

Preview the final output locally:

```bash
npm run preview
```

## Deploying to GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys `dist/` whenever a commit is pushed to `main`. It can also be started manually from the Actions tab.

For the first deployment:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Go to **Settings → Secrets and variables → Actions** and add repository secrets
   `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (see Admin CMS section above).
5. Push to `main` or run the workflow manually.

Because content is fetched from Supabase at runtime, publishing or editing a post or
project in `/admin` appears on the live site immediately — no new deployment needed.

The expected site URL is:

`https://maryammahmoudi1993.github.io/cv/`

## Content sources

Featured-project descriptions are based on the projects' own README files:

- [BloomFlow AI](https://github.com/maryammahmoudi1993/appointment-booking-api-django)
- [DocPilot AI](https://github.com/maryammahmoudi1993/DocPilot-AI---Document-Intelligence---Workflow-Copilot)
- [SupportPilot AI](https://github.com/maryammahmoudi1993/SupportPilot-AI)

DocPilot AI is explicitly presented as a portfolio demonstration project. The listed review paper was submitted to RSER and is under review.
