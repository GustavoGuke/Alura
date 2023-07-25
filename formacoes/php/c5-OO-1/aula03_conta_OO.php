<?php
require "src/aula03_conta_OO.php";

//$contaKerolin = new Conta();
//$contaGusta = new Conta();

$contaKerolin->depositar(100);
var_dump($contaKerolin);
$contaKerolin->transfere(50, $contaGusta);
var_dump($contaGusta);
var_dump($contaKerolin);
