param(
  [Parameter(Mandatory = $true)]
  [string]$SourceProject
)

$ErrorActionPreference = "Stop"
$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$Destination = Join-Path $ProjectRoot "assets\font"

$files = @(
  "Inter\Inter-VariableFont_opsz,wght.ttf",
  "Inter\Inter-Italic-VariableFont_opsz,wght.ttf",
  "Inter\OFL.txt",
  "Newsreader\Newsreader-VariableFont_opsz,wght.ttf",
  "Newsreader\Newsreader-Italic-VariableFont_opsz,wght.ttf",
  "Newsreader\OFL.txt",
  "MaterialSymbols\MaterialSymbolsOutlined.woff2"
)

foreach ($relative in $files) {
  $source = Join-Path $SourceProject (Join-Path "assets\font" $relative)
  $target = Join-Path $Destination $relative

  if (-not (Test-Path $source)) {
    Write-Warning "Not found: $source"
    continue
  }

  $targetDir = Split-Path $target -Parent
  New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
  Copy-Item -Force $source $target
  Write-Host "Copied $relative"
}

Write-Host "`nFont copy complete. Run: npm run build"
