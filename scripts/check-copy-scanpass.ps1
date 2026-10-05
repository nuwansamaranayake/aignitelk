# Copy rules check for /products/scanpass (CC_SCANPASS_PRODUCT_PAGE, step 5.2). PowerShell 5.1.
# Run from the repo root: powershell -File scripts\check-copy-scanpass.ps1
$ErrorActionPreference = "Stop"
$dir = ".\src\app\products\scanpass"
$files = Get-ChildItem -Recurse -Path $dir -Include *.ts,*.tsx

# 1. No em dashes anywhere
$em = $files | Select-String -Pattern ([char]0x2014)
if ($em) { $em; throw "Em dash found" }

# 2. No semicolons inside user-facing strings of the content module
$content = Get-Content "$dir\content.ts" -Raw -Encoding UTF8
$strings = [regex]::Matches($content, '"[^"]*"|''[^'']*''|`[^`]*`') | ForEach-Object { $_.Value }
$semi = $strings | Where-Object { $_ -match ';' }
if ($semi) { $semi; throw "Semicolon in copy" }

# 3. Banned words inside string literals of the content module
$banned = 'can','may','just','that','very','really','actually','probably','basically','could','maybe','it','however','hence','moreover','furthermore','utilize','unlock','discover','imagine','powerful','boost','exciting','revolutionize','unleash','game-changer','cutting-edge','groundbreaking','remarkable','landscape','navigating'
$hits = foreach ($s in $strings) { foreach ($w in $banned) { if ($s -match "(?i)\b$([regex]::Escape($w))\b") { "$w :: $s" } } }
if ($hits) { $hits; throw "Banned words in copy" }

# 4. Name rule in copy: ScanPass, never "Scan Pass" or "SCANPASS"
$name = $strings | Where-Object { $_ -cmatch 'Scan Pass|SCANPASS' }
if ($name) { $name; throw "Wrong product name spelling" }

"Copy checks passed ($($strings.Count) strings)"
