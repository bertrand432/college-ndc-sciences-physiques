$ErrorActionPreference = 'Stop'
$siteRoot = 'C:\Documents\sites\site_college\college-ndc-sciences-physiques'
$stageRoot = Join-Path $PSScriptRoot 'site-chimie'
$files = @('js/quiz-3d-chimie.js','css/quiz-3d-chimie.css','qcm/3e/chimie-3d.html','qcm/3e/index.html','images/qcm-3d-chimie/bilan-a-completer.png','images/qcm-3d-chimie/volume.png','images/qcm-3d-chimie/forme-liquide.png','images/qcm-3d-chimie/impalpable.png')
$backup = Join-Path $PSScriptRoot 'index-3e-avant-chimie.html'
if (-not (Test-Path -LiteralPath $backup)) { Copy-Item -LiteralPath (Join-Path $siteRoot 'qcm/3e/index.html') -Destination $backup }
foreach ($relative in $files) {
  $destination = [IO.Path]::GetFullPath((Join-Path $siteRoot $relative))
  if (-not $destination.StartsWith($siteRoot + '\', [StringComparison]::OrdinalIgnoreCase)) { throw 'Destination hors du site' }
  [void][IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($destination))
  Copy-Item -LiteralPath (Join-Path $stageRoot $relative) -Destination $destination
  if ((Get-FileHash -LiteralPath $destination).Hash -ne (Get-FileHash -LiteralPath (Join-Path $stageRoot $relative)).Hash) { throw 'Échec de vérification de copie' }
}
Write-Output '7 nouveaux fichiers installés et index des QCM de 3e mis à jour.'
