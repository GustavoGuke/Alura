# Fun��o  para  obtermos o hash do arquivo localizado em $filePath.
function Get-FileSHA1 {
    # Bloco de par�metros. Aqui utilizamos o atributo Parameter
    # para adornar caracter�sticas ao argumento $filePath.
    param(
        [Parameter(
            # A propriedade ValueFromPipeline indica que este valor
            # pode ser preenchido pelo pipeline.
            ValueFromPipeline = $true,
            # A propriedade ValueFromPipelineByPropertyName indica
            # que o PowerShell pode enviar a esta fun��o apenas  o
            # valor da propriedade indicada, ao  inv�s  do  objeto
            # inteiro.
            ValueFromPipelineByPropertyName = "FullName",
            # Usando a propriedade Mandatory, indicamos  que  este
            # argumento � obrigat�rio.
            Mandatory = $true
        )]
        [String] $filePath
    )

    # Bloco de in�cio, onde carregaremos os recursos utilizados
    # por todos os itens recebidos pelo pipeline!
    begin {
        $sha1 = New-Object System.Security.Cryptography.SHA1Managed
        $prettyHashSB = New-Object System.Text.StringBuilder
    }

    # Bloco de processamento. Aqui ser�o executados os comandos
    # a seguir para todos os itens de nosso pipeline.
    process {
        $fileContent = Get-Content $filePath
        $fileBytes = [System.Text.Encoding]::UTF8.GetBytes($fileContent)

        $hash = $sha1.ComputeHash($fileBytes)

        foreach ($byte in $hash) {
            $hexaNotation = $byte.ToString("X2")
            $prettyHashSB.Append($hexaNotation) > $null
        }

        $prettyHashSB.ToString() 
        $prettyHashSB.Clear() > $null
    }

    # Bloco de fim, onde devemos liberar os recursos criados
    # durante a execu��o de nossa fun��o.
    # No caso, precisamos invocar o m�todo Dispose do objeto
    # IDisposable SHA1Managed.
    end {
        $sha1.Dispose()
    }
}