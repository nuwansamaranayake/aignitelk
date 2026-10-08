<#
SEO smoke test. Real responses only, no mocks. PowerShell 5.1 and curl.exe.

Local:      .\scripts\seo-smoke.ps1
Production: .\scripts\seo-smoke.ps1 -BaseUrl https://aignitelk.com -CanonicalHost https://aignitelk.com -Production

Canonical tags are compared to -CanonicalHost, not to the request host, so a localhost run passes.
Exits 1 if any check fails.
#>
param(
  [string]$BaseUrl = 'http://localhost:3102',
  [string]$CanonicalHost = 'https://aignitelk.com',
  [switch]$Production
)

# ---- Site expectations (the only block that differs per repo) ----
$Expect = @{
  MinUrls = 5
  # @type values that must appear in the JSON-LD of these paths.
  Types = @{
    '/' = @('Organization', 'WebSite')
    '/govihub' = @('Organization', 'SoftwareApplication', 'Offer', 'BreadcrumbList')
    '/products/kalika' = @('Organization', 'Service', 'FAQPage', 'BreadcrumbList')
    '/products/drapestudio' = @('Organization', 'SoftwareApplication', 'BreadcrumbList')
    '/products/scanpass' = @('Organization', 'SoftwareApplication', 'BreadcrumbList')
    '/products/primepath' = @('Organization', 'SoftwareApplication', 'BreadcrumbList')
  }
  Languages = $false
  # og:image and og:url per page are not part of this site's scope.
  RequireOpenGraph = $false
  # Extra hosts that must 301 to the canonical host in production.
  RedirectHosts = @('www.aignitelk.com')
}
# ------------------------------------------------------------------

$ErrorActionPreference = 'Stop'
$BaseUrl = $BaseUrl.TrimEnd('/')
$CanonicalHost = $CanonicalHost.TrimEnd('/')
$script:pass = 0; $script:fail = 0; $script:warn = 0
$tmp = Join-Path $env:TEMP ('seo_smoke_' + [guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path $tmp | Out-Null

function Report([bool]$ok, [string]$name, [string]$detail = '') {
  if ($ok) { $script:pass++; Write-Output ("PASS  {0}" -f $name) }
  else { $script:fail++; Write-Output ("FAIL  {0}  {1}" -f $name, $detail) }
}
function Warn([string]$name, [string]$detail) { $script:warn++; Write-Output ("WARN  {0}  {1}" -f $name, $detail) }

function Fetch([string]$url, [switch]$NoFollow) {
  $body = Join-Path $tmp 'body.bin'; $hdr = Join-Path $tmp 'hdr.txt'
  if (Test-Path $body) { Remove-Item $body }
  $cargs = @('-sS', '--max-time', '20', '-o', $body, '-D', $hdr, '-w', '%{http_code}')
  # Schannel on this host cannot reach revocation servers through the local TLS proxy.
  # This skips only the revocation lookup. The chain is still validated.
  if ($url -like 'https:*') { $cargs += '--ssl-no-revoke' }
  if (-not $NoFollow) { $cargs += '-L' }
  $code = & curl.exe @cargs $url 2>&1
  $headers = if (Test-Path $hdr) { Get-Content $hdr } else { @() }
  # With -L the dump holds every hop. Keep the last block.
  $last = @(); foreach ($h in $headers) { if ($h -match '^HTTP/') { $last = @() }; $last += $h }
  $get = { param($n) $l = $last | Where-Object { $_ -match ('^' + $n + ':') } | Select-Object -First 1; if ($l) { ($l -replace ('^' + $n + ':\s*'), '').Trim() } else { '' } }
  $html = if (Test-Path $body) { [IO.File]::ReadAllText($body, [Text.Encoding]::UTF8) } else { '' }
  [pscustomobject]@{
    Status = "$code".Trim(); Html = $html
    ContentType = (& $get 'content-type'); Location = (& $get 'location'); XRobots = (& $get 'x-robots-tag')
  }
}

function Attr([string]$tag, [string]$name) {
  $m = [regex]::Match($tag, '(?i)\b' + [regex]::Escape($name) + '\s*=\s*"([^"]*)"')
  if ($m.Success) { [Net.WebUtility]::HtmlDecode($m.Groups[1].Value) } else { $null }
}

function Meta([string]$html, [string]$key) {
  foreach ($m in [regex]::Matches($html, '(?is)<meta\s[^>]*>')) {
    $k = Attr $m.Value 'name'; if (-not $k) { $k = Attr $m.Value 'property' }
    if ($k -eq $key) { return (Attr $m.Value 'content') }
  }
  $null
}

function LdBlocks([string]$html) {
  [regex]::Matches($html, '(?is)<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>') | ForEach-Object { $_.Groups[1].Value }
}

# Walk parsed JSON-LD and collect every node that has an @type.
function LdNodes($node, $acc) {
  if ($null -eq $node) { return }
  if ($node -is [System.Array]) { foreach ($n in $node) { LdNodes $n $acc }; return }
  if ($node -is [pscustomobject]) {
    if ($node.PSObject.Properties.Name -contains '@type') { [void]$acc.Add($node) }
    foreach ($p in $node.PSObject.Properties) { LdNodes $p.Value $acc }
  }
}

function VisibleText([string]$html) {
  # React splits "$" and "10.00" into two text nodes with <!-- --> between them.
  # Comments are never visible, so drop them without adding a space.
  $t = [regex]::Replace($html, '(?s)<!--.*?-->', '')
  $t = [regex]::Replace($t, '(?is)<(script|style|svg|noscript)[^>]*>.*?</\1>', ' ')
  $t = [regex]::Replace($t, '<[^>]+>', ' ')
  ([Net.WebUtility]::HtmlDecode($t) -replace '\s+', ' ')
}

# Price strings a visitor could see for a JSON-LD price. The top of a range is often
# printed without the currency, as in "LKR 150,000 to 300,000".
function PriceVariants([string]$price, [string]$currency, [switch]$RangeEnd) {
  $d = [decimal]::Parse($price, [Globalization.CultureInfo]::InvariantCulture)
  $inv = [Globalization.CultureInfo]::InvariantCulture
  $nums = @($d.ToString('0.##', $inv), $d.ToString('#,0.##', $inv), $d.ToString('0.00', $inv), $d.ToString('#,0.00', $inv)) | Select-Object -Unique
  $prefixes = switch ($currency) {
    'USD' { @('$', 'US$', 'USD ') }
    'LKR' { @('Rs. ', 'Rs.', 'Rs ', 'LKR ') }
    default { @("$currency ") }
  }
  $v = foreach ($p in $prefixes) { foreach ($n in $nums) { "$p$n" } }
  if ($RangeEnd) { foreach ($n in $nums) { $v += "to $n"; $v += "- $n"; $v += ([string][char]0x2013 + " $n") } }
  if ($d -eq 0) { $v += 'free'; $v += 'Free' }
  $v
}

# Path and query of a URL, whatever its host. Off-host locs are caught by check 2.
function PathOf([string]$loc) { ([uri]$loc).PathAndQuery }
function LocalUrl([string]$loc) { $BaseUrl + (PathOf $loc) }

Write-Output ("SEO smoke  base={0}  canonical={1}  production={2}" -f $BaseUrl, $CanonicalHost, [bool]$Production)

# 1. robots.txt
$r = Fetch "$BaseUrl/robots.txt"
Report ($r.Status -eq '200') 'robots.txt returns 200' "got $($r.Status)"
Report ($r.ContentType -like 'text/plain*') 'robots.txt is text/plain' "got '$($r.ContentType)'"
$smLine = ($r.Html -split "`n" | Where-Object { $_ -match '^\s*Sitemap:\s*(\S+)' } | ForEach-Object { $Matches[1] }) | Select-Object -First 1
Report ($smLine -eq "$CanonicalHost/sitemap.xml") 'robots.txt Sitemap line points at canonical host' "got '$smLine'"

# 2. sitemap.xml
$s = Fetch "$BaseUrl/sitemap.xml"
Report ($s.Status -eq '200') 'sitemap.xml returns 200' "got $($s.Status)"
$xml = $null
try { $xml = [xml]$s.Html; Report $true 'sitemap.xml parses as XML' } catch { Report $false 'sitemap.xml parses as XML' "$_" }
$locs = @(); $mods = @()
if ($xml) {
  $ns = New-Object Xml.XmlNamespaceManager $xml.NameTable
  $ns.AddNamespace('s', 'http://www.sitemaps.org/schemas/sitemap/0.9')
  $locs = @($xml.SelectNodes('//s:url/s:loc', $ns) | ForEach-Object { $_.InnerText.Trim() })
  $mods = @($xml.SelectNodes('//s:url/s:lastmod', $ns) | ForEach-Object { $_.InnerText.Trim() })
}
$offHost = @($locs | Where-Object { -not ($_ -eq $CanonicalHost -or $_.StartsWith("$CanonicalHost/")) })
Report ($locs.Count -gt 0 -and $offHost.Count -eq 0) 'every sitemap <loc> starts with canonical host' ("off-host: " + ($offHost -join ', '))
Report ($locs.Count -ge $Expect.MinUrls) ("sitemap has at least {0} URLs" -f $Expect.MinUrls) "got $($locs.Count)"
if ($mods.Count -gt 1 -and @($mods | Select-Object -Unique).Count -eq 1) { Warn 'sitemap lastmod' "all $($mods.Count) lastmod values are identical ($($mods[0]))" }

# 3, 4, 6. Per page checks
$pages = @{}
foreach ($loc in $locs) {
  $path = PathOf $loc
  $p = Fetch (LocalUrl $loc)
  $pages[$path] = $p
  $h = $p.Html
  $noSvg = [regex]::Replace($h, '(?is)<svg[^>]*>.*?</svg>', ' ')
  $titles = [regex]::Matches($noSvg, '(?is)<title[^>]*>').Count
  $desc = Meta $h 'description'
  $dl = if ($desc) { $desc.Length } else { 0 }
  $h1 = [regex]::Matches($h, '(?is)<h1[\s>]').Count
  $canon = @([regex]::Matches($h, '(?is)<link\s[^>]*rel="canonical"[^>]*>') | ForEach-Object { Attr $_.Value 'href' })
  $want = if ($path -eq '/') { @($CanonicalHost, "$CanonicalHost/") } else { @("$CanonicalHost$path") }
  $robots = "$(Meta $h 'robots') $($p.XRobots)"
  $problems = @()
  if ($p.Status -ne '200') { $problems += "status $($p.Status)" }
  if ($titles -ne 1) { $problems += "$titles <title>" }
  if ($dl -lt 50 -or $dl -gt 160) { $problems += "description length $dl" }
  if ($h1 -ne 1) { $problems += "$h1 <h1>" }
  if ($canon.Count -ne 1 -or $want -notcontains $canon[0]) { $problems += "canonical '$($canon -join ' | ')'" }
  if ($robots -match 'noindex') { $problems += 'noindex' }
  if ($Expect.RequireOpenGraph) {
    $ogImage = Meta $h 'og:image'; $ogUrl = Meta $h 'og:url'
    if (-not $ogImage -or -not $ogImage.StartsWith("$CanonicalHost/")) { $problems += "og:image '$ogImage'" }
    if ($want -notcontains $ogUrl) { $problems += "og:url '$ogUrl'" }
  }
  Report ($problems.Count -eq 0) "page $path" ($problems -join '; ')

  # 4. JSON-LD parses and holds the expected types
  $nodes = New-Object System.Collections.ArrayList
  $bad = 0
  foreach ($b in (LdBlocks $h)) { try { LdNodes ($b | ConvertFrom-Json) $nodes } catch { $bad++ } }
  if ($bad -gt 0) { Report $false "json-ld parses on $path" "$bad block(s) failed to parse" }
  if ($Expect.Types.ContainsKey($path)) {
    $types = @($nodes | ForEach-Object { $_.'@type' } | ForEach-Object { $_ })
    $missing = @($Expect.Types[$path] | Where-Object { $types -notcontains $_ })
    Report ($missing.Count -eq 0 -and $bad -eq 0) "json-ld types on $path" ("missing: " + ($missing -join ', '))
  }

  # 6. Offer prices match visible price text
  $offers = @($nodes | Where-Object { @($_.'@type') -contains 'Offer' -or @($_.'@type') -contains 'AggregateOffer' })
  if ($offers.Count -gt 0) {
    $text = VisibleText $h
    $missingPrices = @()
    foreach ($o in $offers) {
      $cur = "$($o.priceCurrency)"
      foreach ($f in 'price', 'lowPrice', 'highPrice') {
        $val = $o.$f
        if ($null -eq $val -or "$val" -eq '') { continue }
        $hit = $false
        foreach ($v in (PriceVariants "$val" $cur -RangeEnd:($f -eq 'highPrice'))) {
          if ($text -match ([regex]::Escape($v) + '(?![\d])')) { $hit = $true; break }
        }
        if (-not $hit) { $missingPrices += "$f=$val $cur" }
      }
    }
    Report ($missingPrices.Count -eq 0) "offer prices visible on $path" ("not in page text: " + ($missingPrices -join ', '))
  }
}
foreach ($k in $Expect.Types.Keys) {
  if (-not $pages.ContainsKey($k)) { Report $false "json-ld types on $k" 'path is not in the sitemap' }
}

# 5. Unknown path is a real 404
$z = Fetch "$BaseUrl/zzz-seo-test" -NoFollow
Report ($z.Status -eq '404') 'unknown path returns 404' "got $($z.Status)"

# 7. Language alternates
if ($Expect.Languages) {
  foreach ($path in $pages.Keys) {
    $h = $pages[$path].Html
    $alts = @{}
    foreach ($m in [regex]::Matches($h, '(?is)<link\s[^>]*hreflang="[^"]*"[^>]*>')) { $alts[(Attr $m.Value 'hreflang')] = (Attr $m.Value 'href') }
    if ($alts.Count -eq 0) { continue }
    $lang = [regex]::Match($h, '(?is)<html[^>]*\blang="([^"]*)"').Groups[1].Value
    $self = "$CanonicalHost$path"; if ($path -eq '/') { $self = @($CanonicalHost, "$CanonicalHost/") }
    $selfCode = @($alts.Keys | Where-Object { $_ -ne 'x-default' -and (@($self) -contains $alts[$_]) })
    $problems = @()
    if (-not $alts.ContainsKey('x-default')) { $problems += 'no x-default' }
    if ($selfCode.Count -ne 1) { $problems += 'page is not listed in its own alternates' }
    elseif ($selfCode[0] -ne $lang) { $problems += "html lang '$lang' but hreflang '$($selfCode[0])'" }
    foreach ($code in $alts.Keys) {
      if ($code -eq 'x-default') { continue }
      $other = $alts[$code]
      if (-not $other.StartsWith($CanonicalHost)) { $problems += "alternate off host $other"; continue }
      $op = PathOf $other
      if (-not $pages.ContainsKey($op)) { $pages[$op] = Fetch (LocalUrl $other) }
      $back = @([regex]::Matches($pages[$op].Html, '(?is)<link\s[^>]*hreflang="[^"]*"[^>]*>') | ForEach-Object { Attr $_.Value 'href' })
      if (-not (@($back) | Where-Object { @($self) -contains $_ })) { $problems += "$op does not link back" }
    }
    Report ($problems.Count -eq 0) "hreflang on $path" ($problems -join '; ')
  }
}

# 8. Production redirects
if ($Production) {
  $apex = ([uri]$CanonicalHost).Host
  $hp = Fetch "http://$apex/" -NoFollow
  Report (@('301', '308') -contains $hp.Status -and $hp.Location -like "https://$apex*") 'http redirects to https' "got $($hp.Status) -> $($hp.Location)"
  foreach ($rh in $Expect.RedirectHosts) {
    $w = Fetch "https://$rh/" -NoFollow
    Report ($w.Status -eq '301' -and $w.Location.TrimEnd('/') -eq $CanonicalHost) "$rh redirects 301 to apex" "got $($w.Status) -> $($w.Location)"
  }
}

Remove-Item -Recurse -Force $tmp
Write-Output ("RESULT  {0} passed, {1} failed, {2} warnings, {3} checks" -f $script:pass, $script:fail, $script:warn, ($script:pass + $script:fail))
if ($script:fail -gt 0) { exit 1 } else { exit 0 }
