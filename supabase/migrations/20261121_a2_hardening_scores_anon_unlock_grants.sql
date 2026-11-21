-- A2: server-side hardening (apply once in Supabase). Reviewed against the policies read on 2026-11-21.

-- 1. Signed-out visitors never need direct table access (the AI runner uses the secret-protected functions)
revoke all on public.profiles, public.progress, public.submissions, public.final_evaluations, public.app_settings, public.scoring_config from anon;
revoke all on public.scoring_config from authenticated;

-- 2. A student cannot write scores or AI results when inserting a row
create or replace function public.guard_submission_scores() returns trigger
language plpgsql security invoker set search_path = public as $$
begin
  if auth.uid() is not null and not public.is_teacher() then
    new.teacher_score := null; new.teacher_note := null;
    new.ai_result := null; new.ai_score := null; new.ai_band := null; new.ai_doc_url := null;
  end if;
  return new;
end $$;
drop trigger if exists submissions_guard_scores on public.submissions;
create trigger submissions_guard_scores before insert on public.submissions for each row execute function public.guard_submission_scores();

create or replace function public.guard_final_scores() returns trigger
language plpgsql security invoker set search_path = public as $$
begin
  if auth.uid() is not null and not public.is_teacher() then
    new.teacher_band := null; new.teacher_note := null; new.ai_band := null; new.ai_score := null;
  end if;
  return new;
end $$;
drop trigger if exists final_evaluations_guard_scores on public.final_evaluations;
create trigger final_evaluations_guard_scores before insert on public.final_evaluations for each row execute function public.guard_final_scores();

-- 3. Day and module unlocks are granted by the teacher on the server (replaces codes computed in the browser)
create table if not exists public.unlock_grants (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  section text not null check (section in ('reading','listening','writing','writing2','speaking')),
  scope text not null check (scope in ('module_paced','module_all') or scope ~ '^day:([1-9]|1[0-7])$'),
  created_at timestamptz not null default now(),
  created_by uuid default auth.uid(),
  unique (user_id, section, scope)
);
alter table public.unlock_grants enable row level security;
revoke all on public.unlock_grants from anon;
create policy "read own or teacher" on public.unlock_grants for select to authenticated using (user_id = auth.uid() or public.is_teacher());
create policy "teacher grants" on public.unlock_grants for insert to authenticated with check (public.is_teacher());
create policy "teacher revokes" on public.unlock_grants for delete to authenticated using (public.is_teacher());
