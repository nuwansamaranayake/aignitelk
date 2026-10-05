# Smoke test for an aignitelk.com product page. Windows PowerShell 5.1 compatible.
# Usage (local Docker on port 8088):
#   powershell -ExecutionPolicy Bypass -File scripts\smoke-product-page.ps1 -BaseUrl http://localhost:8088
# Exit code 0 when every check passes, 1 otherwise.
param(
  [string]$BaseUrl = 'http://localhost:8088',
  [string]$PagePath = '/products/drapestudio',
  [string]$ClaimsDoc = 'docs\drapestudio-page-claims.md',
  [string[]]$SourceFiles = @(
    'src\app\products\drapestudio\content.ts',
    'src\app\products\drapestudio\page.tsx',
    'src\components\drapestudio\BeforeAfter.tsx',
    'src\components\drapestudio\RevealObserver.tsx',
    'src\components\drapestudio\CountUp.tsx',
    'src\components\SiteNav.tsx',
    'src\components\SiteFooter.tsx',
    'src\app\page.tsx',
    'src\app\globals.css',
    'tailwind.config.ts',
    'public\sitemap.xml',
    'docs\drapestudio-page-claims.md',
    'scripts\smoke-product-page.ps1'
  ),
  [string[]]$OutboundUrls = @('https://drapestudiolk.com', 'https://mirrorme.cc')
)

$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$script:fails = 0
function Check([string]$name, [bool]$ok, [string]$detail = '') {
  if ($ok) { Write-Output ("PASS  {0} {1}" -f $name, $detail) } else { $script:fails++; Write-Output ("FAIL  {0} {1}" -f $name, $detail) }
}
function Get-Url([string]$url) {
  try { return Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 20 -MaximumRedirection 5 }
  catch { return $null }
}
function Get-VisibleText([string]$html) {
  $t = $html -replace '(?is)<script[^>]*>.*?</script>', ' ' -replace '(?is)<style[^>]*>.*?</style>', ' ' -replace '(?is)<[^>]+>', ' '
  return ([System.Net.WebUtility]::HtmlDecode($t) -replace '\s+', ' ').Trim()
}

# 1 + 2. Page responds and carries the key text
$pageUrl = $BaseUrl.TrimEnd('/') + $PagePath
$res = Get-Url $pageUrl
Check 'page 200' ($res -ne $null -and $res.StatusCode -eq 200) $pageUrl
if ($res -eq $null) { Write-Output 'Page unreachable, stopping.'; exit 1 }
$html = $res.Content
$text = Get-VisibleText $html
$slashCode = 0
try { $slashCode = (Invoke-WebRequest -Uri ($pageUrl + '/') -UseBasicParsing -TimeoutSec 20).StatusCode } catch { if ($_.Exception.Response) { $slashCode = [int]$_.Exception.Response.StatusCode } }
Check 'trailing slash is not an error' ($slashCode -eq 200) ("status=" + $slashCode)
$decodedHtml = [System.Net.WebUtility]::HtmlDecode($html)

$h1s = [regex]::Matches($html, '(?is)<h1[^>]*>(.*?)</h1>')
Check 'exactly one h1' ($h1s.Count -eq 1) ("count=" + $h1s.Count)
$h1Text = ''
if ($h1s.Count -ge 1) { $h1Text = (Get-VisibleText $h1s[0].Groups[1].Value) }
Check 'h1 text in response' ($h1Text.Length -gt 0 -and $text.Contains($h1Text)) ('"' + $h1Text + '"')
Check 'mentions DrapeStudio' ($text.Contains('DrapeStudio'))
Check 'mentions MirrorMe' ($text.Contains('MirrorMe'))

$prices = [regex]::Matches($text, 'Rs\.\s?\d{1,3}(?:,\d{3})*(?!\d)') | ForEach-Object { $_.Value } | Sort-Object -Unique
Check 'prices found on page' ($prices.Count -gt 0) ($prices -join ' | ')

$ldBlocks = [regex]::Matches($html, '(?is)<script type="application/ld\+json">(.*?)</script>')
$faqQs = @()
foreach ($b in $ldBlocks) {
  try { $o = $b.Groups[1].Value | ConvertFrom-Json } catch { $o = $null }
  if ($o -ne $null -and $o.'@type' -eq 'FAQPage') { $faqQs = @($o.mainEntity | ForEach-Object { $_.name }) }
}
Check 'FAQ questions found' ($faqQs.Count -ge 6 -and $faqQs.Count -le 8) ("count=" + $faqQs.Count)
$missingQ = @($faqQs | Where-Object { -not $text.Contains($_) })
Check 'every FAQ question visible' ($missingQ.Count -eq 0) ($missingQ -join ' | ')

# Section structure: one h2 per section, hero has the h1
$sections = [regex]::Matches($html, '(?is)<section\b.*?</section>')
$badSections = 0
foreach ($s in $sections) {
  $h2 = [regex]::Matches($s.Value, '(?i)<h2\b').Count
  $h1 = [regex]::Matches($s.Value, '(?i)<h1\b').Count
  if (-not (($h1 -eq 1 -and $h2 -eq 0) -or ($h1 -eq 0 -and $h2 -eq 1))) { $badSections++ }
}
Check 'one heading per section' ($badSections -eq 0) ("sections=" + $sections.Count + " bad=" + $badSections)

# Metadata
$title = [regex]::Match($html, '(?is)<title>(.*?)</title>').Groups[1].Value
$title = [System.Net.WebUtility]::HtmlDecode($title)
$desc = [System.Net.WebUtility]::HtmlDecode([regex]::Match($html, '<meta name="description" content="([^"]*)"').Groups[1].Value)
Check 'title under 60 chars' ($title.Length -gt 0 -and $title.Length -lt 60) ("len=" + $title.Length)
Check 'description under 155 chars' ($desc.Length -gt 0 -and $desc.Length -lt 155) ("len=" + $desc.Length)
Check 'canonical' ($html -match '<link rel="canonical" href="https://aignitelk\.com/products/drapestudio"')
foreach ($m in @('og:title', 'og:description', 'og:image', 'og:url', 'twitter:card', 'twitter:image')) {
  Check ("meta " + $m) ($html -match ('(property|name)="' + [regex]::Escape($m) + '" content="[^"]+"'))
}

# 3. Every image, svg and font URL returns 200 with the right content type
$assetUrls = New-Object System.Collections.Generic.List[string]
foreach ($m in [regex]::Matches($html, '(?i)(?:src|href|srcset|imagesrcset|content)="([^"]+)"')) {
  foreach ($part in ($m.Groups[1].Value -split ',')) {
    $u = ($part.Trim() -split '\s+')[0]
    if ($u -match '\.(webp|png|jpe?g|svg|ico|woff2?)(\?.*)?$') { $assetUrls.Add($u) }
  }
}
foreach ($m in [regex]::Matches($html, '(?i)href="([^"]+\.css)"')) {
  $cssUrl = $m.Groups[1].Value
  if ($cssUrl.StartsWith('/')) { $cssUrl = $BaseUrl.TrimEnd('/') + $cssUrl }
  $css = Get-Url $cssUrl
  if ($css -ne $null) {
    foreach ($f in [regex]::Matches($css.Content, 'url\(([^)]+\.(?:woff2?|ttf|otf))\)')) { $assetUrls.Add($f.Groups[1].Value.Trim('"', "'")) }
  }
}
$uniq = $assetUrls | Sort-Object -Unique
$badAssets = @()
foreach ($u in $uniq) {
  $abs = $u
  if ($u.StartsWith('/')) { $abs = $BaseUrl.TrimEnd('/') + $u } elseif ($u -match '^https://aignitelk\.com') { $abs = $u -replace '^https://aignitelk\.com', $BaseUrl.TrimEnd('/') }
  $r = Get-Url $abs
  $ct = ''
  if ($r -ne $null) { $ct = [string]$r.Headers['Content-Type'] }
  $typeOk = ($ct -match '^(image/|font/|application/font|application/octet-stream)')
  if ($r -eq $null -or $r.StatusCode -ne 200 -or -not $typeOk) { $badAssets += ($u + ' [' + $ct + ']') }
}
Check 'assets return 200 with image or font type' ($badAssets.Count -eq 0) ("checked=" + $uniq.Count + ' ' + ($badAssets -join ' | '))
$imgTags = [regex]::Matches($html, '(?i)<img\b[^>]*>')
$noAlt = @($imgTags | Where-Object { $_.Value -notmatch '\balt="' })
Check 'every img has alt' ($noAlt.Count -eq 0) ("imgs=" + $imgTags.Count)
$sitemap = Get-Url ($BaseUrl.TrimEnd('/') + '/sitemap.xml')
Check 'sitemap lists the page' ($sitemap -ne $null -and $sitemap.Content -match [regex]::Escape('https://aignitelk.com' + $PagePath))

# 4. Outbound links
foreach ($u in $OutboundUrls) {
  $r = Get-Url $u
  $code = 0
  if ($r -ne $null) { $code = $r.StatusCode }
  Check ("outbound " + $u) ($code -eq 200) ("status=" + $code)
  Check ("page links to " + $u) ($html -match [regex]::Escape('href="' + $u))
}

# 5. JSON-LD parses
$parsed = 0
foreach ($b in $ldBlocks) { try { $null = $b.Groups[1].Value | ConvertFrom-Json; $parsed++ } catch { } }
Check 'JSON-LD blocks parse' ($ldBlocks.Count -ge 4 -and $parsed -eq $ldBlocks.Count) ("blocks=" + $ldBlocks.Count + " parsed=" + $parsed)

# 6. Copy gate
$emDash = [string][char]0x2014
$dashHits = @()
foreach ($f in $SourceFiles) {
  if (Test-Path $f) {
    $n = 0
    foreach ($line in [IO.File]::ReadAllLines((Resolve-Path $f), [Text.Encoding]::UTF8)) { if ($line.Contains($emDash)) { $n++ } }
    if ($n -gt 0) { $dashHits += ($f + ':' + $n) }
  } else { $dashHits += ($f + ':MISSING') }
}
Check 'no em dash in new or edited files' ($dashHits.Count -eq 0) ($dashHits -join ' | ')

$altText = ($imgTags | ForEach-Object { [regex]::Match($_.Value, 'alt="([^"]*)"').Groups[1].Value }) -join ' . '
$metaText = ([regex]::Matches($html, '<meta (?:name|property)="(?:description|og:[a-z:]+|twitter:[a-z:]+)" content="([^"]*)"') | ForEach-Object { $_.Groups[1].Value }) -join ' . '
$copy = $text + ' . ' + [System.Net.WebUtility]::HtmlDecode($altText) + ' . ' + [System.Net.WebUtility]::HtmlDecode($metaText) + ' . ' + $title
Check 'no semicolons in visible copy' (-not $copy.Contains(';'))
$banned = @('can','may','just','that','very','really','literally','actually','certainly','probably','basically','could','maybe','delve','embark','enlightening','esteemed','shed light','craft','crafting','imagine','realm','game-changer','unlock','unleash','discover','skyrocket','abyss','not alone','in a world where','revolutionize','disruptive','utilize','utilizing','dive deep','tapestry','illuminate','unveil','pivotal','intricate','elucidate','hence','furthermore','however','harness','exciting','groundbreaking','cutting-edge','remarkable','it','remains to be seen','glimpse into','navigating','landscape','stark','testament','in summary','in conclusion','moreover','boost','skyrocketing','opened up','powerful','inquiries','ever-evolving')
$hits = @()
foreach ($w in $banned) {
  $pattern = '(?i)(?<![\p{L}\p{N}])' + ([regex]::Escape($w) -replace '\\ ', '\s+') + '(?![\p{L}\p{N}])'
  $mm = [regex]::Matches($copy, $pattern)
  if ($mm.Count -gt 0) { $hits += ($w + ' x' + $mm.Count) }
}
Check 'no banned words in visible copy' ($hits.Count -eq 0) ($hits -join ' | ')

# 7. Claims gate: every price and feature string on the page has a row in the claims doc
$claims = [IO.File]::ReadAllText((Resolve-Path $ClaimsDoc), [Text.Encoding]::UTF8)
$unclaimed = @()
foreach ($p in $prices) { if (-not $claims.Contains($p)) { $unclaimed += $p } }
$imageCounts = [regex]::Matches($text, 'enough for (\d+) images') | ForEach-Object { $_.Groups[1].Value }
foreach ($n in $imageCounts) { if ($claims -notmatch ('\b' + $n + '\b')) { $unclaimed += ($n + ' images') } }
$features = @('Sinhala','Tamil','English','LKR pricing','Google sign-in','WhatsApp','Works in your phone browser','never expires','failed generation','5 free images','7 days',
  'Adult Clothing',"Children's Clothing",'Accessories','Virtual Fit-On','Up to 3 views','1 view','one garment, or a top and a bottom','size suggestion','five skin tones','four poses',
  'Starter Pack','Popular Pack','Value Pack','Bulk Pack','Best Value','five selfies','one piece or two','Style scenes','Facebook','Instagram','Download','18 and over',
  'separate account','PV 00362580','AIgnite Software (Private) Limited','Pay in rupees','comes from the DrapeStudio app','try the look before you buy the look')
foreach ($f in $features) {
  if (-not $text.ToLower().Contains($f.ToLower())) { $unclaimed += ('[not on page] ' + $f); continue }
  if (-not $claims.ToLower().Contains($f.ToLower())) { $unclaimed += $f }
}
Check 'every price and feature has a claims row' ($unclaimed.Count -eq 0) ($unclaimed -join ' | ')

Write-Output ''
if ($script:fails -eq 0) { Write-Output 'ALL CHECKS PASSED'; exit 0 } else { Write-Output ("{0} CHECK(S) FAILED" -f $script:fails); exit 1 }
