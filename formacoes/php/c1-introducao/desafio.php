<?php
    // exibir numeros impares de 1 a 100
    // $impar = 1;
    // while ($impar <= 100){
    //     if($impar % 2 ==1 ){
    //         echo "Numero impar: $impar\n";
    //     }
    //     $impar++;
    // };
    // for ($i = 1; $i <= 100; $i++){
    //     if($i % 2 != 0 ){
    //         echo "FOR Numero impar: $i\n";
    //     }
    // }

    // tabuada
    // $num = 5;
    // for($contador = 0; $contador <= 9; $contador++){
    //     $resultado = $contador * $num;
    //     echo "$num x $contador = $resultado\n";
    // };

    // imc

    $peso = 60;
    $altura = 1.74;
    $imc = $peso / $altura ** 2;
    
    echo "Seu IMC é de $imc. Você está com o IMC ";
    
    if ($imc < 18.5) {
        echo "abaixo";
    } elseif ($imc < 25) {
        echo "dentro";
    } else {
        echo "acima";
    }
    
    echo " do recomendado";

?>
