# StratSix – iBT

TOEFL iBT (2026 format) preparation course: five 17-day modules (Reading, Listening, Writing I, Writing II, Speaking = 85 days), a 15-test simulator, narrated grammar tutorials, on-site speaking recording with transcripts, and AI + teacher feedback.

Live site: https://hadbmmain-a11y.github.io/StratSix/

StratSix is an independent course and is not endorsed or approved by ETS. TOEFL and TOEFL iBT are registered trademarks of ETS.

## How it is built

- One static page, `index.html` (vanilla JavaScript, no build step), served by GitHub Pages. Course content lives in `BS.sections.<module>.days[]` → stages → blocks; later "patch" scripts (grammar clinics, email toolkit, Writing II, tutorials) are spliced in between `/*..._PATCH_START*/` and `/*..._PATCH_END*/` markers.
- Backend: Supabase (Google sign-in, tables `profiles`, `progress`, `submissions`, `final_evaluations`, `app_settings`, `unlock_grants`, private storage bucket `recordings`). Library pinned to `@supabase/supabase-js@2.119.2`.
- Row-level security: students read and write only their own rows; only a teacher account (`profiles.role = 'teacher'`) writes scores, module access and unlock grants. Server changes are kept as SQL in `supabase/migrations/`.
- Saved work is keyed by day + stage id + block position (see `blkKey` in `index.html`). Do not rename a stage title without setting `sid` to the old id.
- Lesson-plan PDFs for teachers are in `plans/`.

## Checks

```
bash tests/run_all.sh
```

Needs Python 3, Playwright (`pip install playwright`) and Google Chrome. It checks JavaScript syntax, that no saved-work key was lost (`tests/key-snapshot.json`), account switching and sync (simulated server), the student and teacher dashboards, grammar tutorials, Writing I and II, and every day of the five modules.

## Content sources

`tools/` holds the scripts that generated the grammar clinics, the 24 grammar tutorials and the lesson-plan PDFs. They are kept for reference and rebuilding; see `tools/README.md`.

## Typing Check (Writing I and II)
Every Writing day (34 in total) has a required "Typing Check" placed right before the daily homework. Part 1 copies a text (60, 90 or 120 seconds) and is scored in net words per minute with edit-distance accuracy. Part 2 is free writing that grows from 1 to 10 minutes over the 34 days. Pasting is blocked. The goal line is 60+ words per minute with no upper limit; finishing both parts is what completes the day. Results go to the student's chart and, through the progress summary, to the teacher overview (copy and write speed, flag under 25 after 3 checks).
Source: `tools/typecheck/typecheck_patch.js` (spliced between `TYPECHECK_PATCH_START/END` in `index.html`). Tests: `tests/test_typing.py`.

## Score report: why this score (Writing and Speaking)
Every AI score now comes with a short explanation, for the student and for the teacher.
- **Student card (Dashboard → Your feedback):** a 0 to 5 scale with the score marked, the rubric wording for the level reached and the next level (taken from `BS.rubrics`, for the criterion that scored lowest), "What earned it" and "What held it back" with exact quotes from the student's text, and one action starting "To reach X". Quotes that are not found in the student's response are not shown. Notes without a report (older scores) show the scale and "A detailed report is not available for this score."
- **Half points:** X means level X fully met; X.5 means level X fully met and part of level X+1. The rule lives in the AI scoring task (see `claude/ai-scoring-task-v2.md` in the Project) and the card words the result as "Why 3.5 and not 3 or 4".
- **Listen and Repeat:** the app compares the sentence with what it heard (longest-common-subsequence, so one skipped word does not shift the rest) and shows "9 of 11 words (82%)" with the missed words struck through. No AI text is needed.
- **Teacher review queue:** the same report, a numeric score field in half steps (0 to 5), "Agree with AI" copies the exact AI score, an alert when your score differs from the AI by more than 1 point, and a line with the class average for that task and day and the student's last scores.
- **Students → "All results" table:** one row per submission and per auto-scored exercise with % correct (colour bar, "few data" under 5 answers), AI score, your score, AI minus you and a status; filters (Needs review, Pending your score, Low accuracy), sort (largest AI gap, lowest accuracy) and four tiles (group accuracy, AI within 0.5 of you, average AI minus you, need attention). Per-day accuracy comes from `progress.summary.ex`, which the app adds on each sync; until a student syncs again the table falls back to per-type totals.
- **Data:** `submissions.ai_feedback` (jsonb) carries `level`, `why {summary, earned{text,quote}, held_back{text,quote}}`, `criteria`, `fixes` and `next`. Format: `claude/ai-feedback-format.md`. The source of the display code is `tools/scorereport/scorereport.js` (spliced into `index.html` between `SCOREREPORT_START` and `SCOREREPORT_END`; keep both in sync).
- **Tests:** `tests/test_report.py` (registered in `tests/run_all.sh`).
