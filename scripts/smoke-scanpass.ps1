# Smoke tests for /products/scanpass (CC_SCANPASS_PRODUCT_PAGE, step 5.3). PowerShell 5.1.
# Local:      powershell -File scripts\smoke-scanpass.ps1
# Production: powershell -File scripts\smoke-scanpass.ps1 -Base https://aignitelk.com
param([string]$Base = "http://localhost:8088")
$ErrorActionPreference = "Stop"
function Get-Page($p) { Invoke-WebRequest "$Base$p" -UseBasicParsing -TimeoutSec 20 }

# New page renders with real content
$r = Get-Page "/products/scanpass"
if ($r.StatusCode -ne 200) { throw "/products/scanpass returned $($r.StatusCode)" }
$must = @(
  "Register online. Scan at the gate.",
  "From registration to gate, built for Sri Lanka",
  "LKR 50,000",
  "Free for registered non-profits",
  "application/ld+json",
  "FAQPage",
  "https://www.scanpasslk.com/#contact",
  "og-scanpass-1200x630.jpg"
)
foreach ($s in $must) { if ($r.Content -notlike "*$s*") { throw "Missing on page: $s" } }
"Page OK: $($must.Count) must-have strings"

# Every ScanPass image referenced by the page loads as an image.
# nginx answers unknown paths with index.html and a 200, so the content type is checked too.
$imgs = [regex]::Matches($r.Content, '/img/scanpass/[^"''\s\\)]+') | ForEach-Object { $_.Value } | Sort-Object -Unique
foreach ($i in $imgs) {
  $h = Invoke-WebRequest "$Base$i" -Method Head -UseBasicParsing -TimeoutSec 20
  if ($h.StatusCode -ne 200) { throw "Asset $i returned $($h.StatusCode)" }
  if ($h.Headers["Content-Type"] -notlike "image/*") { throw "Asset $i is $($h.Headers['Content-Type']), not an image" }
}
"Assets OK: $($imgs.Count)"

# Captions track for the demo video, served as text/vtt (browsers drop other types)
$track = [regex]::Match($r.Content, '<track[^>]*src="([^"]+\.vtt)"').Groups[1].Value
if (-not $track) { throw "No captions track on the video" }
$c = Invoke-WebRequest "$Base$track" -UseBasicParsing -TimeoutSec 20
if ($c.Headers["Content-Type"] -notlike "text/vtt*") { throw "Captions $track served as $($c.Headers['Content-Type'])" }
if ([System.Text.Encoding]::UTF8.GetString($c.RawContentStream.ToArray()) -notlike "WEBVTT*") { throw "Captions $track is not WebVTT" }
"Captions OK: $track"

# Remote video reachable
foreach ($u in "https://www.scanpasslk.com/video/scanpass-product-video.mp4") {
  $v = Invoke-WebRequest $u -Method Head -UseBasicParsing -TimeoutSec 20
  if ($v.StatusCode -ne 200 -or $v.Headers["Content-Type"] -notlike "video/*") { throw "Video unreachable" }
}
"Video OK"

# Wiring: home card and nav link to the page
$homePage = Get-Page "/"
if ($homePage.Content -notlike '*href="/products/scanpass"*') { throw "Home page has no link to /products/scanpass" }
if ($homePage.Content -notlike "*See ScanPass*") { throw "Home page has no See ScanPass link" }
"Wiring OK"

# Regression: DrapeStudio page untouched
$ds = Get-Page "/products/drapestudio"
if ($ds.StatusCode -ne 200 -or $ds.Content -notlike "*Phone photo in. Model photo out.*") { throw "DrapeStudio page regression" }
"DrapeStudio OK"

# No ScanPass placeholder strings leaked into production copy
foreach ($bad in @("lorem","TODO","Sample coming soon")) {
  if ($r.Content -like "*$bad*") { Write-Warning "Found '$bad' on page. List it in the report." }
}
"Smoke tests passed against $Base"
