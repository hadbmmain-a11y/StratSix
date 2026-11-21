# tools/

Sources used to generate parts of `index.html` and the lesson-plan PDFs. They are not needed to run the site.

- `tutorials/`: the 24 narrated grammar tutorials. `gtd_1.py … gtd_7.py` hold the data, `gt_engine.js` builds each tutorial, `gt.css` the styles, `build_gt.py` validates the data and writes `gt_patch.js`, which is pasted between `/*GT_PATCH_START*/` and `/*GT_PATCH_END*/` in `index.html` (CSS between `/*GT_CSS_START*/` and `/*GT_CSS_END*/`).
- `grammar/`: data and builders for the Writing I and II grammar clinics and the email toolkit.
- `lesson-plans/`: `content.py` (teacher notes per day) and `gen.py` (builds the PDFs in `plans/`).

The scripts were written to run from a working folder with the paths `/home/claude/...`. Change the paths at the top of each script before running them elsewhere. After rebuilding, run `bash tests/run_all.sh`.
