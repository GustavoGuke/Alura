<?php
$notas = [
    "joao" => 7,
    "Kessilin" => 8,
    "Gustavo" => 6,
    "Kerolin" => 5,
    "gusta" => null,
];

// ordenações
//rsort($notas);
//var_dump($notas);

// verificações
//echo gettype($notas);
//var_dump(array_is_list($notas));

if (gettype($notas) === "array"){
   // echo "Só iterar \n";
};

// verificar uma chave no array
foreach ($notas as $aluno => $nota) {
    if ($aluno === "Gustavo"){
        //var_dump(True);
    };
};

// verificar chave no array com uma função nativa do php 
// verifica se a chave existe
//var_dump(array_key_exists('Gustavo', $notas));

// verifica se a chave existe e o valor  não é nulo
//var_dump(isset($notas['gusta']));

// verifica se o valor existe
//var_dump(in_array(8, $notas));

// retorna a chave de um valor dado
var_dump(array_search(8, $notas));