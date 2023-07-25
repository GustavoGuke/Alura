<?php
$primeira_lp = "https://alura.com.br";
$nome = "gustavo líma";

// recupera parte da string 
$sub_String = substr($primeira_lp, 8, 5);
echo  "\n recupera parte da string:  " . $sub_String;

// pegar uma posição na string para recuperar ela quando não sabemos sua posição
$pos_last_name = strpos($nome, "lima");
echo "\n pegar uma posição na string: " . $pos_last_name;
echo "\n" . substr($nome, 0,$pos_last_name);
echo "\n" . substr($nome, $pos_last_name);

//verifcar tamanho de uma string strlen() por byte caso tenha acento tbm sera contado
// mb_strlen conta os caracteres--- para usar mb_string deve renomear php.ini-dev - assistir ultimo video 
// do curso php-string aula 2 - substrings
$senha = "12345789";
$tam = strlen($senha);
if($tam < 8){
    echo "\n senha invalida";
}
else {
    echo "\nsenha cadastrada";
};

// deixar palavra em maisuculo strtoupper  ---- deixar minusculas strtolower
// mb_strtoupper pega os acentos 
$nome_maisculo = mb_strtoupper($nome);
echo "\n" .  $nome_maisculo;


// video sobre mb_string
//https://cursos.alura.com.br/extra/alura-mais/trabalhando-com-multibyte-string-em-php-c64