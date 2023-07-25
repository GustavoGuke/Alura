<?php
    // Primeiros script em PHP
    $idade = 15;
    $estaComAcompanhanteMaior = "sim";
    $nome = "Gustavo";
    echo "ola mundo: $nome \n";
    echo gettype($idade);

    // condicionais
    if ($idade >= 18){
        echo "\nacesso liberado";
    } else if ($idade >= 16 && $estaComAcompanhanteMaior == "sim"){
        echo "\nacesso liberado com acompanhante";
    } else {
        echo "\n acesso negado";
    };

    //ternário
    $msg = $idade < 18 && $estaComAcompanhanteMaior == "sim"? "\nacesso liberado com acompanhante": "\nacesso liberado";
    echo $msg;


    // repetição
    // while
    /*
    $contador = 1;
    while ($contador <= 15){
        echo "\n#$contador";
        $contador = $contador + 1;
    };
    */

    // for 
    for ($n = 1; $n <= 10; $n++){
        echo "\nFOR$n";
    };
?>