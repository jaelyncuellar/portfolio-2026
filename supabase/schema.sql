create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references auth.users (id) on delete cascade,
  slug text not null unique,
  title text not null check (char_length(title) between 1 and 160),
  excerpt text not null check (char_length(excerpt) between 1 and 300),
  content text not null check (char_length(content) > 0),
  tags text[] not null default '{}',
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.blog_posts drop column if exists category;
alter table public.blog_posts enable row level security;

grant select on public.blog_posts to anon;
grant select, insert, update, delete on public.blog_posts to authenticated;

drop policy if exists "Anyone can read published posts" on public.blog_posts;
create policy "Anyone can read published posts"
  on public.blog_posts for select
  using (published or (select auth.uid()) = author_id);

drop policy if exists "Authors can create their own posts" on public.blog_posts;
create policy "Authors can create their own posts"
  on public.blog_posts for insert to authenticated
  with check ((select auth.uid()) = author_id);

drop policy if exists "Authors can update their own posts" on public.blog_posts;
create policy "Authors can update their own posts"
  on public.blog_posts for update to authenticated
  using ((select auth.uid()) = author_id)
  with check ((select auth.uid()) = author_id);

drop policy if exists "Authors can delete their own posts" on public.blog_posts;
create policy "Authors can delete their own posts"
  on public.blog_posts for delete to authenticated
  using ((select auth.uid()) = author_id);
