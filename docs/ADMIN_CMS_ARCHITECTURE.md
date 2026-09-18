# Admin CMS Architecture

## Context

The site is a static React 19 + Vite 7 app, prerendered at build time and deployed to
GitHub Pages via GitHub Actions (`.github/workflows/deploy-pages.yml`). There is no
server, no database, and no API — `Blog.jsx` and `Projects.jsx` contain hardcoded data.
GitHub Pages only serves static files; it cannot run a database or a custom backend.

## Decision: Supabase

Chosen: **Supabase** (hosted Postgres + Auth + Storage + Row Level Security), accessed
directly from the browser via `@supabase/supabase-js`.

Why, given the constraints above:

- **Compatible with static hosting.** GitHub Pages can't run server code, so the data
  layer has to be a hosted service the client can talk to directly. Supabase's client
  SDK is designed for exactly this (public anon key + RLS enforced server-side).
- **Built-in auth.** Supabase Auth provides secure email/password login, hashed
  credentials, and session/JWT handling, so no password hashing or session code has to
  be hand-rolled (explicitly required by the brief).
- **Built-in authorization.** Row Level Security policies run in Postgres itself, so
  "only the admin can write, anyone can read published content" is enforced at the
  database, not just hidden in the UI.
- **Built-in file storage** for blog cover images and project thumbnails, with public
  read URLs — no separate image host needed.
- **Free tier is enough** for a single-author portfolio CMS. No infra to operate.
- **No rebuild required to publish.** Since data is fetched client-side at runtime,
  publishing a post/project in `/admin` makes it appear on the public site immediately
  — no GitHub Actions rebuild needed. This directly satisfies the core requirement.

Rejected:
- **SQLite** — no durable place to run/host it from a static GH Pages deployment.
- **Firebase** — viable but Supabase's SQL schema + RLS is a better fit for structured
  posts/projects data and is simpler to reason about with plain Postgres.
- **A custom Node/Express backend** — would need its own host (Render/Fly/etc.), its
  own auth implementation, and its own DB. Strictly more moving parts than Supabase for
  the same outcome.

## How content reaches the public site

`Blog.jsx` and `Projects.jsx` now fetch published rows straight from Supabase
(`status = 'published'`) client-side, ordered by `display_order` / `published_at`.
The prerendered HTML still renders instantly (loading state), then hydrates and loads
live data — no code change or redeploy needed to publish content.

## Routing

The app had no router (single static page). `react-router-dom` is added, with the
public site staying on `/` as a single page (unchanged), and new routes:

- `/blog/:slug` — public post detail page (new; needed for real per-post SEO)
- `/admin/login`, `/admin`, `/admin/posts`, `/admin/posts/new`, `/admin/posts/:id/edit`,
  `/admin/projects`, `/admin/projects/new`, `/admin/projects/:id/edit` — admin app,
  client-side only, not linked from public navigation, protected by a Supabase auth
  session check.

## Data model

See `supabase/migrations/`. Tables: `posts`, `projects`, both with `status`
(`draft`/`published`), timestamps, and RLS policies: public `select` limited to
`status = 'published'`; `insert`/`update`/`delete` limited to authenticated users.

## Image storage

Two public Supabase Storage buckets: `post-covers`, `project-images`. Uploads are
restricted to authenticated users; read is public. Client validates file type/size
before upload.
