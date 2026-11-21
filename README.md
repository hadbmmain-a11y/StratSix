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
