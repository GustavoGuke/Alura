<?php
$lista = [
    1 => "um",
    2 => "dois",
    3 => "tres"
];
$lista2 = [1,2,3];

//var_dump($lista);

// percorrer valores com for normal
for ($n = 0; $n < count($lista2); $n++){
    //echo $lista2[$n] . PHP_EOL;
}

// percorrer as chaves 
foreach($lista2 as $chaves => $numeros){
    echo "\n$chaves: $numeros";
}