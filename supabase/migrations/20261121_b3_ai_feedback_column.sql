-- B3: structured AI feedback per submission (NOT applied yet; apply only after Hans approves).
-- The app works without it: it reads ai_feedback when present and falls back to the one-line ai_result.
--
-- ai_feedback shape (written by the AI scoring task through ai_save):
-- {
--   "criteria": [ {"id":"task","label":"Task completion","score":3.5,"note":"One point has no detail."} ],
--   "fixes":    [ {"criterion":"language","from":"I am agree","to":"I agree","why":"'agree' is a verb, so it needs no 'am'."} ],
--   "next":     "Add one concrete example to your second reason."
-- }

alter table public.submissions add column if not exists ai_feedback jsonb;

-- students cannot plant AI feedback on their own rows
create or replace function public.guard_submission_scores() returns trigger
language plpgsql set search_path = public as $$
begin
  if auth.uid() is not null and not public.is_teacher() then
    new.teacher_score := null; new.teacher_note := null;
    new.ai_result := null; new.ai_score := null; new.ai_band := null; new.ai_doc_url := null;
    new.ai_feedback := null;
  end if;
  return new;
end $$;

-- the scoring task may pass the structured feedback; old 5-argument calls keep working
drop function if exists public.ai_save(text, bigint, text, numeric, text);
create or replace function public.ai_save(p_secret text, p_id bigint, p_result text, p_score numeric, p_band text, p_feedback jsonb default null)
returns boolean language plpgsql security definer set search_path = public, extensions as $$
declare n int;
begin
  if encode(extensions.digest(coalesce(p_secret,''),'sha256'),'hex') is distinct from (select secret_hash from public.scoring_config where scoring_config.id=1) then
    raise exception 'unauthorized';
  end if;
  update public.submissions set ai_result=p_result, ai_score=p_score, ai_band=p_band, ai_feedback=p_feedback
   where id=p_id and ai_result is null;
  get diagnostics n = row_count;
  return n=1;
end $$;
