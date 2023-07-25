<?php
$notas1 = [
    "joao" => 7,
    "Kessilin" => 8,
    "Gustavo" => 6,
    "Kerolin" => 5,
    "Kerolin2" => 10,
];

$notas2 = [
    "joao" => 7,
    "Kessilin" => 8,
    "Kerolin" => 5,
];

// diferenças entre arrays leva em considerção o valor leva em consideração o primeiro array 
var_dump(array_diff($notas1, $notas2));

// diferenças entre arrays leva em considerção a chave
var_dump(array_diff_key($notas1, $notas2));

// diferenças entre arrays leva em considerção a chave e o valor
var_dump(array_diff_assoc($notas1, $notas2));

echo "Alunos Faltantes";
$alunos_falatantes = array_diff_key($notas1, $notas2);
// retorna as chaves
var_dump(array_keys($alunos_falatantes));
// retorna os valores
var_dump(array_values($alunos_falatantes));

// unindo arrays
// $alunos2022 = array_merge($alunos2021, $novosAlunos)

// combina arrays
// array_combine($array1, array2)

// mudar chave para valor e vice versa
// array_flip($array1, array2)

// $array1 = [1, 2, 3];
// $array2 = [3, 4, 5];
// $array3 = [1, 7, 13];

// $diferenca = array_diff($array3, $array1);
// var_dump($diferenca);