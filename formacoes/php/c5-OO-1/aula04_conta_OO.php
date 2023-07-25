<?php
require "src/aula04_conta_OO.php";

//$contaKerolin = new Conta();
//$contaGusta = new Conta();

// usar private para deixar dado privado
//$contaKerolin->saldo = 300;


// metodos setters
$contaKerolin->defineCpf("111.111.111-11");
$contaKerolin->defineTitular("Kerolin");

//var_dump($contaKerolin);

// metodos getters
//var_dump($contaKerolin->trazSaldo());
echo $contaKerolin->trazTitular();
echo $contaKerolin->trazCpf();
