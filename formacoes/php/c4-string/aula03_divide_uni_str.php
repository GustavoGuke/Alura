<?php
$nome = "gustavo.lima ";

// transfomar string em array
// separar uma string em duas usando um separador explode() devolve um array de string
$array_nome = explode(" ", $nome);
//var_dump($array_nome);

// iterar sobre o array
foreach($array_nome as $resultado){
    //echo $resultado . PHP_EOL;
};

// pegar as palavras do array com list
list($name, $last_name) = $array_nome;
//echo $name;
//echo $last_name;


// transformar array em string FUNÇÃO IMPLODE - PASSANDO COMO SERA SEPARADO (PHP_EOL), "," , "  espaços"
$telefones = ["(11) 99999 - 9999", "(24) 11111 - 1111", "(11) 2222 - 2222"];
//echo implode(PHP_EOL, $telefones);


// tirar espaços da string trim()
$nome_sem_espaco = trim($nome);
var_dump($nome);
var_dump($nome_sem_espaco);