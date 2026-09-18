-- Storage buckets for blog cover images and project thumbnails.
-- Public read, authenticated-only write.

insert into storage.buckets (id, name, public)
values ('post-covers', 'post-covers', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict (id) do nothing;

drop policy if exists "public read post covers" on storage.objects;
create policy "public read post covers"
  on storage.objects for select
  using (bucket_id = 'post-covers');

drop policy if exists "authenticated write post covers" on storage.objects;
create policy "authenticated write post covers"
  on storage.objects for all
  to authenticated
  using (bucket_id = 'post-covers')
  with check (bucket_id = 'post-covers');

drop policy if exists "public read project images" on storage.objects;
create policy "public read project images"
  on storage.objects for select
  using (bucket_id = 'project-images');

drop policy if exists "authenticated write project images" on storage.objects;
create policy "authenticated write project images"
  on storage.objects for all
  to authenticated
  using (bucket_id = 'project-images')
  with check (bucket_id = 'project-images');
