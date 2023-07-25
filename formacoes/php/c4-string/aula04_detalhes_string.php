<?php
// string numericas
$ano = "1994";
$minha_idade = 2023 - $ano;
//echo $minha_idade;


// identação com heredoc le as variaveis -  e nowdoc aspa simples não le as variaveis
$corpo_email = <<<FIM
    Bom dia!
    favor enviar assinaturas.
    $ano
    FIM;
//echo $corpo_email;


// substuição de string
$texto_palavrão = "caracas vc e bobo";
$texto_modificado = str_replace(
    ["caracas", "bobo"],
    ["c**", "b**"],
    $texto_palavrão
) . PHP_EOL;

echo $texto_modificado;