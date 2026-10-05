# Smoke test for /govihub (checks 4, 5, 8, 9 of the GoviHub brief). Windows PowerShell 5.1.
# Usage: powershell -ExecutionPolicy Bypass -File scripts\smoke-govihub.ps1 -BaseUrl http://localhost:8088
param([string]$BaseUrl = 'http://localhost:8088', [string]$PagePath = '/govihub')
$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$script:fails = 0
function Check([string]$name, [bool]$ok, [string]$detail = '') {
  if ($ok) { Write-Output ("PASS  {0} {1}" -f $name, $detail) } else { $script:fails++; Write-Output ("FAIL  {0} {1}" -f $name, $detail) }
}
function Status([string]$url) {
  $code = curl.exe -s -o NUL -L --ssl-no-revoke --max-time 25 -A 'Mozilla/5.0 aignitelk-smoke' -w '%{http_code}' $url
  return [int]$code
}
function Abs([string]$u) {
  if ($u.StartsWith('http')) { return ($u -replace '^https://aignitelk\.com', $BaseUrl.TrimEnd('/')) }
  return $BaseUrl.TrimEnd('/') + $u
}

$res = Invoke-WebRequest -Uri ($BaseUrl.TrimEnd('/') + $PagePath) -UseBasicParsing -TimeoutSec 20
$html = $res.Content
Check 'page 200' ($res.StatusCode -eq 200)
$text = ($html -replace '(?is)<script[^>]*>.*?</script>', ' ' -replace '(?is)<style[^>]*>.*?</style>', ' ' -replace '(?is)<[^>]+>', ' ')
$text = ([System.Net.WebUtility]::HtmlDecode($text) -replace '\s+', ' ')
Check 'headline present' ($text.Contains("Sri Lanka's AI farming marketplace"))

# 4. Every link returns 200
$links = [regex]::Matches($html, '(?i)<a\b[^>]*\bhref="([^"]+)"') | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
$bad = @()
foreach ($l in $links) {
  if ($l.StartsWith('mailto:') -or $l.StartsWith('tel:')) { continue }
  $u = ($l -split '#')[0]
  if ($u -eq '') { continue }
  $code = Status (Abs $u)
  if ($code -ne 200) { $bad += "$l=$code" }
}
Check 'every link returns 200' ($bad.Count -eq 0) ("links=" + $links.Count + ' ' + ($bad -join ' | '))

# 5. Image budget: every image file the page references, with size
$imgs = New-Object System.Collections.Generic.List[string]
foreach ($m in [regex]::Matches($html, '(?i)(?:src|srcset|href|content)="([^"]+)"')) {
  foreach ($part in ($m.Groups[1].Value -split ',')) {
    $u = ($part.Trim() -split '\s+')[0]
    if ($u -match '\.(webp|png|jpe?g|svg|ico)$') { $imgs.Add($u) }
  }
}
$total = 0; $largest = 0; $largestName = ''; $missing = @()
$rows = @()
# Site-wide icons (favicon, touch icon) predate this page and are reported separately.
$siteIcons = @($imgs | Sort-Object -Unique | Where-Object { $_ -match 'favicon|apple-touch-icon' })
foreach ($u in $siteIcons) { try { $r = Invoke-WebRequest -Uri (Abs $u) -UseBasicParsing -TimeoutSec 20; Write-Output ('INFO  site-wide icon {0} = {1} KB' -f $u, [math]::Round($r.RawContentLength / 1KB, 1)) } catch { } }
foreach ($u in ($imgs | Sort-Object -Unique | Where-Object { $_ -notmatch 'favicon|apple-touch-icon' })) {
  try {
    $r = Invoke-WebRequest -Uri (Abs $u) -UseBasicParsing -TimeoutSec 20
    $ct = [string]$r.Headers['Content-Type']
    $kb = [math]::Round($r.RawContentLength / 1KB, 1)
    if ($ct -notmatch '^image/') { $missing += "$u [$ct]"; continue }
    $rows += ('{0,8} KB  {1}' -f $kb, $u)
    $total += $kb
    if ($kb -gt $largest) { $largest = $kb; $largestName = $u }
  } catch { $missing += "$u [error]" }
}
$rows | ForEach-Object { Write-Output ('      ' + $_) }
Check 'all referenced images load as images' ($missing.Count -eq 0) ($missing -join ' | ')
Check 'largest image under 250 KB' ($largest -lt 250) ("$largest KB $largestName")
Write-Output ("INFO  referenced image bytes (all sizes and fallbacks) = {0} KB" -f [math]::Round($total))

# 6a. Alt text on every image
$imgTags = [regex]::Matches($html, '(?i)<img\b[^>]*>')
$noAlt = @($imgTags | Where-Object { $_.Value -notmatch '\balt="' })
Check 'every img has an alt attribute' ($noAlt.Count -eq 0) ("imgs=" + $imgTags.Count)
$siBlocks = [regex]::Matches($html, '(?i)<[a-z]+[^>]*\blang="si"[^>]*>')
Check 'Sinhala blocks carry lang="si"' ($siBlocks.Count -ge 3) ("count=" + $siBlocks.Count)

# 8. Copy check on built HTML
$em = [string][char]0x2014
$altAndMeta = (([regex]::Matches($html, '(?i)(?:alt|content|aria-label)="([^"]*)"') | ForEach-Object { $_.Groups[1].Value }) -join ' . ')
$copy = $text + ' . ' + [System.Net.WebUtility]::HtmlDecode($altAndMeta)
Check 'no em dash in the built HTML' (-not $html.Contains($em))
Check 'no semicolons in visible copy' (-not $text.Contains(';'))
$banned = @('predict', 'AI match', 'AI-powered match', 'price trend', 'partnership', 'agreement')
$hits = @($banned | Where-Object { $copy -match ('(?i)' + [regex]::Escape($_)) })
Check 'no banned phrases' ($hits.Count -eq 0) ($hits -join ' | ')

# 9. JSON-LD parses
$ld = [regex]::Matches($html, '(?is)<script type="application/ld\+json">(.*?)</script>')
$parsed = @()
foreach ($b in $ld) { try { $parsed += ($b.Groups[1].Value | ConvertFrom-Json) } catch { } }
$app = $parsed | Where-Object { $_.'@type' -eq 'SoftwareApplication' }
Check 'JSON-LD parses' ($ld.Count -ge 1 -and $parsed.Count -eq $ld.Count) ("blocks=" + $ld.Count)
Check 'JSON-LD SoftwareApplication fields' ($app -ne $null -and $app.name -eq 'GoviHub' -and $app.url -eq 'https://spices.govihublk.com' -and $app.operatingSystem -eq 'Web' -and $app.publisher.name -eq 'AiGNITE Sri Lanka' -and $app.award -match 'Digital Innovation Impact Pioneer')

# SEO basics
$title = [System.Net.WebUtility]::HtmlDecode([regex]::Match($html, '(?is)<title>(.*?)</title>').Groups[1].Value)
Check 'title' ($title -eq "GoviHub | Sri Lanka's AI farming marketplace | AiGNITE Sri Lanka") $title
Check 'canonical' ($html -match '<link rel="canonical" href="https://aignitelk\.com/govihub"')
$og = [regex]::Match($html, '<meta property="og:image" content="([^"]+)"').Groups[1].Value
Check 'og:image returns 200' ($og -ne '' -and (Status (Abs $og)) -eq 200) $og
$sm = Invoke-WebRequest -Uri ($BaseUrl.TrimEnd('/') + '/sitemap.xml') -UseBasicParsing -TimeoutSec 20
Check 'sitemap lists /govihub' ($sm.Content -match 'https://aignitelk\.com/govihub')

Write-Output ''
if ($script:fails -eq 0) { Write-Output 'ALL CHECKS PASSED'; exit 0 } else { Write-Output ("{0} CHECK(S) FAILED" -f $script:fails); exit 1 }
