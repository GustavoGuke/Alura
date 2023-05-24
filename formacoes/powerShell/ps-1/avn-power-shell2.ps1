#Set-ExecutionPolicy Unrestricted
Param($tipoDeExportacao)
# tratando erros
# Get-Variable | ? Name -like *error*
# Get-Variable | ? Name -like *Preference*
$ErrorActionPreference = "Stop"

#param($tipoDeExportacao)

$nameExpr = @{
	Label="NOME";
	Expression={$_.Name}
}

$lengthExpr = @{
	Label="TAMANHO";
	Expression={"{0:N2}KB" -f ($_.length / 1kb)}
}

$params = ($nameExpr, $lengthExpr)

$resultado = gci -Recurse -File |
		? Name -like "*txt*" |
		select $params


if ($tipoDeExportacao -eq "HTML") {
    #$estilos = Get-Content C:\Scripts\styles.css
    #$styleTag = "<style> $estilos </style>"
    $tituloPagina = "Relatório de Scripts em Migração"
    $tituloBody = "<h1> $tituloPagina </h1>"

    $resultado | 
        ConvertTo-Html -Head $styleTag -Title $tituloPagina -Body $tituloBody | 
        Out-File c:\cursos\alura\formacoes\powerShell\relatorio.html
} elseif ($tipoDeExportacao -eq "JSON") {
    $resultado | 
        ConvertTo-JSON |
        Out-File c:\cursos\alura\formacoes\powerShell\relatorio.json
} elseif ($tipoDeExportacao -eq "CSV") {
    $resultado | 
        ConvertTo-CSV | -Delimiter "1" 
        Out-File c:\cursos\alura\formacoes\powerShell\relatorio.csv
}


#$resultado | ConvertTo-Html | Out-File c:\cursos\alura\formacoes\powerShell\relatorio.html

Set-ExecutionPolicy Restricted

<#
 *Variavel privada
	PS C:\Scripts> $private:resultado = "essa é a minha variável privada!"

 *Converte arquivo em html
	$resultado | ConvertTo-Html | Out-File c:cursos\alura\formacoes\powerShell\relatorio.html

 *Estrutura HTML
	#$estilos = Get-Content C:\scripts\styles.css
	#$styleTag = "<style> $estilos </style>"
	$tituloPagina = "Relatório de Scripts em Migração"
	$tituloBody = "<h1> $tituloPagina </h1>"

	$resultado | 
    	ConvertTo-Html -Head $styleTag -Title $tituloPagina -Body $tituloBody | 
    	Out-File C:\tempGui\relatorio.html

 *Convert para html-json-csv

	if ($tipoDeExportacao -eq "HTML") {
    $estilos = Get-Content C:\Scripts\styles.css
    $styleTag = "<style> $estilos </style>"
    $tituloPagina = "Relatório de Scripts em Migração"
    $tituloBody = "<h1> $tituloPagina </h1>"

    $resultado | 
        ConvertTo-Html -Head $styleTag -Title $tituloPagina -Body $tituloBody | 
        Out-File C:\tempGui\relatorio.html
} elseif ($tipoDeExportacao -eq "JSON") {
    $resultado | 
        ConvertTo-JSON |
        Out-File C:\tempGui\relatorio.json
} elseif ($tipoDeExportacao -eq "CSV") {
    $resultado | 
        ConvertTo-CSV | -Delimiter "1"
        Out-File C:\tempGui\relatorio.csv
}
33333333333333333333333333333333333333
param($tipoDeExportacao)

$ErrorActionPreference = "Stop"

<#
  Aqui a gente cria um hashtable para a coluna de nome
#>
$nameExpr = @{
	Label="Nome";
	Expression= { $_.Name }
}

# Tambem montamos um hashtable. Só que esse daqui é pro Tamanho
$lengthExpr = @{
	Label="Tamanho";
	Expression= { "{0:N2}KB" -f ($_.Length / 1KB) }
}

# Basta usar uma vírgula e nos temos um array
$params = $nameExpr, $lengthExpr

$resultado =
	gci -Recurse -File |
		? Name -like "*_migrando_*" |
		select $params

		
if ($tipoDeExportacao -eq "HTML") {
	$estilos = Get-Content c:\scripts\styles.css
	$styleTag = "<style> $estilos </style>"
	$tituloPagina = "Relatorio de Scripts em Migracao"
	$tituloBody = "<h1> $tituloPagina </h1>"

	$resultado |
		ConvertTo-Html -Head $styleTag -Title $tituloPagina -Body $tituloBody  |
		Out-File c:\tempGui\relatorio.html	
} elseif ($tipoDeExportacao -eq "JSON") {
	$resultado |
		ConvertTo-JSON |
		Out-File c:\tempGui\relatorio.json
} elseif ($tipoDeExportacao -eq "CSV") {
	$resultado |
		ConvertTo-CSV -NoTypeInformation |
		Out-File c:\tempGui\relatorio.csv
}
#>