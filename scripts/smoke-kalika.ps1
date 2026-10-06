# Gate L1 (local) and Gate P1 (live) for /products/kalika. PowerShell 5.1.
# Local: powershell -File scripts\smoke-kalika.ps1
# Live:  powershell -File scripts\smoke-kalika.ps1 -Base https://aignitelk.com -Reference ""
# -Reference is a base URL whose DrapeStudio page text should match (the pre-deploy live site). Empty skips it.
param([string]$Base = "http://localhost:8088", [string]$Reference = "https://aignitelk.com")
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing
$fail = 0
function Check($name, $ok, $detail) {
  if ($ok) { "PASS  $name  $detail" } else { "FAIL  $name  $detail"; $script:fail++ }
}
# nginx sends text/html without a charset, so decode the bytes as UTF-8 ourselves.
function Get-Utf8($url) {
  $r = Invoke-WebRequest $url -UseBasicParsing -TimeoutSec 30
  [pscustomobject]@{ Status = $r.StatusCode; Html = [System.Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray()) }
}
function MainText($html) {
  $m = [regex]::Match($html, '(?s)<main.*?</main>')
  (($m.Value -replace '<script.*?</script>', '' -replace '<[^>]+>', ' ') -replace '\s+', ' ').Trim()
}

# Kalika page
$k = Get-Utf8 "$Base/products/kalika"
Check "kalika 200" ($k.Status -eq 200) $k.Status
$sinhala = [System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String("4LaU4La24LeaIOC3gOC3iuKAjeC2uuC3j+C2tOC3j+C2u+C3kuC2miDgtq3gt5Pgtrvgtqsg4LeD4Laz4LeE4LePIOC2muC3j+C2vSDgtrjgt4/gtrvgt4rgtpzgt53gtrTgtq/gt5rgt4Hgtro="))
foreach ($s in @("Business decisions, better timed.", "From Rs. 9,000", "Rs. 3,000", "Rs. 8,000", "Rs. 5,000", $sinhala)) {
  Check "kalika contains '$s'" ($k.Html.Contains($s)) ""
}
$wa = [regex]::Matches($k.Html, 'href="(https://wa\.me/[^"]+)"') | ForEach-Object { $_.Groups[1].Value }
$badWa = @($wa | Where-Object { $_ -notmatch '^https://wa\.me/94767006085\?text=[^&"]+' })
Check "wa.me links use 94767006085 with text" ($wa.Count -gt 0 -and $badWa.Count -eq 0) "$($wa.Count) links $($badWa -join ' ')"

# Home page
$h = Get-Utf8 "$Base/"
Check "home 200" ($h.Status -eq 200) $h.Status
$nav = [regex]::Match($h.Html, '(?s)<nav.*?</nav>').Value
Check "nav links /products/kalika" ($nav.Contains('href="/products/kalika"')) ""
$grid = $h.Html.Substring([Math]::Max(0, $h.Html.IndexOf('id="products"')))
Check "products grid links /products/kalika" ($grid.Contains('href="/products/kalika"')) ""
$firstCard = [regex]::Match($grid, '<h3[^>]*>(.*?)</h3>').Groups[1].Value
Check "Kalika is the first product card" ($firstCard -eq "Kalika") "first h3: $firstCard"

# DrapeStudio regression
$d = Get-Utf8 "$Base/products/drapestudio"
Check "drapestudio 200" ($d.Status -eq 200) $d.Status
if ($Reference) {
  $ref = Get-Utf8 "$Reference/products/drapestudio"
  Check "drapestudio main content unchanged vs $Reference" ((MainText $d.Html) -eq (MainText $ref.Html)) ""
}

# Sample PDFs
foreach ($pdf in "Kalika_Sample_Sinhala_Life_Reading.pdf", "Kalika_Sample_Sinhala_Compatibility_Reading.pdf", "Kalika_Sample_Sinhala_Wealth_Reading.pdf") {
  $u = "https://cosmicnexus.ai/lk/$pdf"
  $r = Invoke-WebRequest $u -Method Head -UseBasicParsing -TimeoutSec 30
  Check "sample $pdf" ($r.StatusCode -eq 200 -and $r.Headers["Content-Type"] -like "application/pdf*") "$($r.StatusCode) $($r.Headers['Content-Type'])"
}

# OG image
$ogMeta = [regex]::Match($k.Html, '<meta property="og:image" content="([^"]+)"').Groups[1].Value
Check "og:image tag present" ($ogMeta -like "*kalika-share-1200x630.jpg") $ogMeta
$ogUrl = "$Base/img/kalika/og/kalika-share-1200x630.jpg"
$og = Invoke-WebRequest $ogUrl -UseBasicParsing -TimeoutSec 30
$img = [System.Drawing.Image]::FromStream((New-Object System.IO.MemoryStream(, $og.RawContentStream.ToArray())))
Check "og image 200, 1200x630" ($og.StatusCode -eq 200 -and $img.Width -eq 1200 -and $img.Height -eq 630) "$($og.StatusCode) $($img.Width)x$($img.Height)"
if ($Base -notlike "http://localhost*") {
  $ogLive = Invoke-WebRequest $ogMeta -UseBasicParsing -TimeoutSec 30
  Check "og:image URL resolves" ($ogLive.StatusCode -eq 200 -and $ogLive.Headers["Content-Type"] -like "image/*") "$($ogLive.StatusCode)"
}

# No em dash in new or edited copy files
$copyFiles = "src\app\products\kalika\content.ts", "src\app\products\kalika\page.tsx", "src\components\kalika\TimingWindow.tsx", "src\app\page.tsx", "src\app\layout.tsx", "src\components\SiteNav.tsx", "src\components\drapestudio\CountUp.tsx"
$em = @($copyFiles | ForEach-Object { Select-String -Path $_ -Pattern ([char]0x2014) -Encoding UTF8 } | Where-Object { $_ })
# layout.tsx carries one em dash in the site title that predates this work. Report it, but only fail on new lines.
$pre = @($em | Where-Object { $_.Filename -eq "layout.tsx" -and $_.Line -match 'title: "AiGNITE Software \(Pvt\) Ltd' })
$new = @($em | Where-Object { $pre -notcontains $_ })
Check "no new em dash in copy files" ($new.Count -eq 0) "pre-existing site title lines: $($pre.Count) $($new | ForEach-Object { "$($_.Filename):$($_.LineNumber)" })"

if ($fail) { throw "$fail check(s) failed against $Base" }
"All checks passed against $Base"
