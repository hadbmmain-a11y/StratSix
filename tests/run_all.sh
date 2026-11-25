#!/usr/bin/env bash
# Runs every automatic check. Needs Python 3, Playwright (pip install playwright) and Google Chrome.
# Usage: bash tests/run_all.sh        (from the project folder)
cd "$(dirname "$0")/.." || exit 1
fail=0
run(){ echo "== $*"; out=$("$@" 2>&1); rc=$?; echo "$out" | tail -3; if [ $rc -ne 0 ] || echo "$out" | grep -qE "^FAIL |SOME FAIL|FAILED: \[|Traceback|Error:"; then fail=1; fi; }
node -e "const s=require('fs').readFileSync('index.html','utf8');const i=s.lastIndexOf('<script>'),j=s.lastIndexOf('</script>');require('fs').writeFileSync('/tmp/stratsix_chk.js',s.slice(i+8,j))" && node --check /tmp/stratsix_chk.js && echo "syntax OK" || fail=1
run python3 tests/test_keys.py
run python3 tests/test_sync_account.py
run python3 tests/test_stu.py
run python3 tests/test_dash.py
run python3 tests/test_track.py
run python3 tests/test_typing.py
run python3 tests/test_report.py
run python3 tests/test_gram.py
run python3 tests/test_w2.py
for s in reading listening writing writing2 speaking; do run python3 tests/test_sec.py $s; done
[ $fail = 0 ] && echo "ALL CHECKS PASSED" || { echo "SOME CHECKS FAILED"; exit 1; }
