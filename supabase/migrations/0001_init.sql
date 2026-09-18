-- Admin CMS schema: blog posts and portfolio projects.
-- Run in the Supabase SQL editor, or via `supabase db push` if using the Supabase CLI.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- posts
-- ---------------------------------------------------------------------------
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  external_url text,
  cover_image_url text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  tags text[] not null default '{}',
  seo_title text,
  seo_description text,
  read_time text,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint posts_title_length check (char_length(title) between 1 and 200),
  constraint posts_slug_format check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$')
);

create index if not exists posts_status_published_at_idx on public.posts (status, published_at desc);

-- ---------------------------------------------------------------------------
-- projects
-- ---------------------------------------------------------------------------
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  short_description text,
  description text,
  eyebrow text,
  technologies text[] not null default '{}',
  features text[] not null default '{}',
  image_url text,
  github_url text,
  demo_url text,
  case_study_url text,
  category text,
  project_year text,
  featured boolean not null default false,
  display_order integer not null default 0,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint projects_title_length check (char_length(title) between 1 and 200),
  constraint projects_slug_format check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$')
);

create index if not exists projects_status_order_idx on public.projects (status, display_order);

-- ---------------------------------------------------------------------------
-- updated_at triggers
-- ---------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists posts_set_updated_at on public.posts;
create trigger posts_set_updated_at
  before update on public.posts
  for each row execute function public.set_updated_at();

drop trigger if exists projects_set_updated_at on public.projects;
create trigger projects_set_updated_at
  before update on public.projects
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Row Level Security: public can read only published rows,
-- only authenticated (admin) users can write.
-- ---------------------------------------------------------------------------
alter table public.posts enable row level security;
alter table public.projects enable row level security;

drop policy if exists "public read published posts" on public.posts;
create policy "public read published posts"
  on public.posts for select
  using (status = 'published');

drop policy if exists "authenticated read all posts" on public.posts;
create policy "authenticated read all posts"
  on public.posts for select
  to authenticated
  using (true);

drop policy if exists "authenticated write posts" on public.posts;
create policy "authenticated write posts"
  on public.posts for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "public read published projects" on public.projects;
create policy "public read published projects"
  on public.projects for select
  using (status = 'published');

drop policy if exists "authenticated read all projects" on public.projects;
create policy "authenticated read all projects"
  on public.projects for select
  to authenticated
  using (true);

drop policy if exists "authenticated write projects" on public.projects;
create policy "authenticated write projects"
  on public.projects for all
  to authenticated
  using (true)
  with check (true);
