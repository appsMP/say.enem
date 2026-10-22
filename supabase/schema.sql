-- Execute uma única vez em Supabase > SQL Editor > New query > Run.
-- Cada usuário autenticado possui UMA linha; os dados ficam em JSONB.
create table if not exists public.study_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  constraint study_profiles_data_object check (jsonb_typeof(data) = 'object')
);

alter table public.study_profiles enable row level security;

-- O próprio usuário pode ler, inserir ou alterar EXCLUSIVAMENTE a sua linha.
drop policy if exists "read own study profile" on public.study_profiles;
create policy "read own study profile" on public.study_profiles
  for select to authenticated using ((select auth.uid()) = user_id);

drop policy if exists "insert own study profile" on public.study_profiles;
create policy "insert own study profile" on public.study_profiles
  for insert to authenticated with check ((select auth.uid()) = user_id);

drop policy if exists "update own study profile" on public.study_profiles;
create policy "update own study profile" on public.study_profiles
  for update to authenticated using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

revoke all on table public.study_profiles from anon;
grant usage on schema public to authenticated;
grant select, insert, update on table public.study_profiles to authenticated;

create or replace function public.study_profiles_touch_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists study_profiles_updated_at on public.study_profiles;
create trigger study_profiles_updated_at before update on public.study_profiles
for each row execute function public.study_profiles_touch_updated_at();
