# Copy rules and claims guard for /products/primepath. PowerShell 5.1.
# Run from the repo root: powershell -File scripts\check-copy-primepath.ps1
$ErrorActionPreference = "Stop"
$content = ".\src\app\products\primepath\content.ts"
$files = @(Get-ChildItem -Recurse -Path .\src\app\products\primepath, .\src\components\primepath -Include *.ts, *.tsx)

# 1. No em dashes in any PrimePath file
$em = $files | Select-String -Pattern ([char]0x2014)
if ($em) { $em; throw "Em dash found" }

# 2. Copy strings from the content module
$raw = Get-Content $content -Raw -Encoding UTF8
$strings = [regex]::Matches($raw, '"[^"]*"|`[^`]*`') | ForEach-Object { $_.Value }

# 3. No semicolons, hashtags or asterisks in copy
$marks = $strings | Where-Object { $_ -match '[;*]|(^|\s)#\w' }
if ($marks) { $marks; throw "Semicolon, asterisk or hashtag in copy" }

# 4. Banned words
$banned = 'can','may','just','that','very','really','literally','actually','certainly','probably','basically','could','maybe','it','however','hence','furthermore','moreover','utilize','unlock','revolutionize','unleash','boost','powerful','cutting-edge','game-changer','seamless','delve','craft','imagine','discover','landscape'
$hits = foreach ($s in $strings) { foreach ($w in $banned) { if ($s -match "(?i)\b$([regex]::Escape($w))\b") { "$w :: $s" } } }
if ($hits) { $hits; throw "Banned words in copy" }

# 5. Claims guard, across the content module, the page and the components (code and copy)
$guard = '100%','fully compliant','100% accurate','guaranteed','AI-powered','\bAI\b','legal watcher','automatic law','CV pars','offline','Tamil','pricing','per-user','unlimited','testimonial','minimum wage','bracket','\bAct\b','Section \d'
$claimHits = foreach ($f in $files) { foreach ($g in $guard) { Select-String -Path $f.FullName -Pattern $g -CaseSensitive:($g -cmatch '[A-Z]') | ForEach-Object { "$g :: $($_.Filename):$($_.LineNumber)" } } }
if ($claimHits) { $claimHits; throw "Claims guard hit" }

"Copy and claims checks passed ($($strings.Count) strings, $($files.Count) files)"
