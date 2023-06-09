# Função  para  obtermos o hash do arquivo localizado em $filePath.
function Get-FileSHA1($filePath) {

    # Nossa primeira tarefa é verificar se o usuário  desta  função
    # está utilizando o argumento $filePath ou se ele  deseja  usar
    # o pipeline. Para tal, basta verificar se a várivel  $filePath
    # é Não Igual (not equals, ou NE) a nulo  -  representado  pela 
    # variável automática $null

    if($filePath -ne $null) {
        $fileContent = Get-Content $filePath
        $fileBytes = [System.Text.Encoding]::UTF8.GetBytes($fileContent)

        $sha1 = New-Object System.Security.Cryptography.SHA1Managed

        $hash = $sha1.ComputeHash($fileBytes)

        $prettyHashSB = New-Object System.Text.StringBuilder

        foreach ($byte in $hash) {
            $hexaNotation = $byte.ToString("X2")
            $prettyHashSB.Append($hexaNotation) > $null
        }

        $prettyHashSB.ToString()
    } else {
        foreach ($item in $input) {
            $fileContent = Get-Content $item
            $fileBytes = [System.Text.Encoding]::UTF8.GetBytes($fileContent)

            $sha1 = New-Object System.Security.Cryptography.SHA1Managed

            $hash = $sha1.ComputeHash($fileBytes)

            $prettyHashSB = New-Object System.Text.StringBuilder

            foreach ($byte in $hash) {
                $hexaNotation = $byte.ToString("X2")
                $prettyHashSB.Append($hexaNotation) > $null
            }

            $prettyHashSB.ToString()
        }
    }
}