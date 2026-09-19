$ErrorActionPreference = 'Stop'
$wordApp = New-Object -ComObject Word.Application
$wordApp.Visible = $false
$wordApp.DisplayAlerts = 0
try {
  foreach ($name in @('interrogation-3d-chimie','corrige-3d-chimie')) {
    $inputFile = Join-Path $PSScriptRoot ($name + '.docx')
    $pdfFile = Join-Path $PSScriptRoot ($name + '-qa.pdf')
    $wordDoc = $wordApp.Documents.Open($inputFile, $false, $true)
    try { $wordDoc.ExportAsFixedFormat($pdfFile, 17) } finally { $wordDoc.Close(0) }
  }
} finally {
  $wordApp.Quit()
  [void][System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($wordApp)
}
