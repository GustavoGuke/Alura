<?php
require "src/aula05_conta_OO.php";

$contaKerolin = new Conta("111.111.111-11","Kerolin");
$contaGusta = new Conta("222.222.222.-22","GusTA");

// metodos getters
//var_dump($contaKerolin->trazSaldo());
echo $contaKerolin->trazTitular();
echo $contaKerolin->trazCpf();

echo $contaGusta->trazTitular();
echo $contaGusta->trazCpf();

// Metodo estatico da classe  - global para a classe toda
echo Conta::nContas();