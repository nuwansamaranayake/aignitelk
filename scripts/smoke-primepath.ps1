# Smoke tests for /products/primepath (PrimePath HR page brief). PowerShell 5.1.
# Local:      powershell -File scripts\smoke-primepath.ps1
# Production: powershell -File scripts\smoke-primepath.ps1 -Base https://aignitelk.com
param([string]$Base = "http://localhost:8088", [string]$Container = "aignitelk-local")
$ErrorActionPreference = "Stop"
$fail = 0
function Check($name, $ok, $detail) {
  if ($ok) { "PASS  $name  $detail" } else { "FAIL  $name  $detail"; $script:fail++ }
}

$p = Invoke-WebRequest "$Base/products/primepath" -UseBasicParsing -TimeoutSec 20
Check "page status 200" ($p.StatusCode -eq 200) $p.StatusCode
Check "headline 'Salary sheet in'" ($p.Content -match "Salary sheet in") ""
Check "og image referenced" ($p.Content -match "og-primepath-1200x630") ""
$og = Invoke-WebRequest "$Base/img/primepath/og-primepath-1200x630.jpg" -UseBasicParsing -TimeoutSec 20
Check "og image 200 jpeg" ($og.StatusCode -eq 200 -and $og.Headers["Content-Type"] -like "image/jpeg*") "$($og.StatusCode) $($og.Headers['Content-Type'])"
$imgs = [regex]::Matches($p.Content, '/img/primepath/[^"''\s\\)]+') | ForEach-Object { $_.Value } | Sort-Object -Unique
$bad = @($imgs | Where-Object { (Invoke-WebRequest "$Base$_" -Method Head -UseBasicParsing -TimeoutSec 20).Headers["Content-Type"] -notlike "image/*" })
Check "page images served as images" ($bad.Count -eq 0) "$($imgs.Count) checked $($bad -join ' ')"
$homePage = (Invoke-WebRequest "$Base/" -UseBasicParsing -TimeoutSec 20).Content
Check "home links /products/primepath" ($homePage -match "/products/primepath") ""
Check "home has See PrimePath HR" ($homePage -match "See PrimePath HR") ""
Check "drapestudio 200 (regression)" ((Invoke-WebRequest "$Base/products/drapestudio" -UseBasicParsing -TimeoutSec 20).StatusCode -eq 200) ""
Check "scanpass 200 (regression)" ((Invoke-WebRequest "$Base/products/scanpass" -UseBasicParsing -TimeoutSec 20).StatusCode -eq 200) ""
Check "lk.primepathhr.ai/login 200" ((Invoke-WebRequest "https://lk.primepathhr.ai/login" -UseBasicParsing -TimeoutSec 20).StatusCode -eq 200) ""
$cf = ".\src\app\products\primepath\content.ts"
Check "no em dash in content file" (-not (Select-String -Path $cf -Pattern ([char]0x2014))) ""
Check "no banned words in content file" (-not (Select-String -Path $cf -Pattern '\b(can|may|just|that|it|could|however|100%)\b')) ""
if ($Base -like "http://localhost*") {
  # nginx writes its access and notice lines to stderr, which PowerShell 5.1 treats as errors under Stop.
  $ErrorActionPreference = "Continue"
  $logs = docker logs --tail 100 $Container 2>&1 | Out-String
  $ErrorActionPreference = "Stop"
  Check "container logs clean" (-not ($logs -match '\[error\]|\[emerg\]|" 5\d\d ')) ""
}
if ($fail) { throw "$fail check(s) failed" }
"Smoke tests passed against $Base"
