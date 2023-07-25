<?php
require "src/aula06_conta_OO.php";
require "src/aula06_titular_OO.php";

$contaKerolin = new Conta( new Titular("111.111.111-11","Kerolin"));
$contaGusta = new Conta( new Titular("222.222.222-22","GusTA"));

// metodos getters
//var_dump($contaKerolin->trazSaldo());
echo $contaKerolin->trazTitular();
echo $contaKerolin->trazCpf();

echo $contaGusta->trazTitular();
echo $contaGusta->trazCpf();

// Metodo estatico da classe  - global para a classe toda
echo Conta::nContas();
//var_dump($contaGusta);