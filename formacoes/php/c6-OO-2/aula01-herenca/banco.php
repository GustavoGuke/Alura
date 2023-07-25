<?php
require_once 'src/Pessoa.php';
require_once 'src/Conta.php';
require_once 'src/Titular.php';
require_once 'src/CPF.php';
require_once 'src/Endereco.php';
require_once 'src/Funcionario.php';

// $endereco = new Endereco("aruja","mirante","bbbb","1111");
// $gusta = new Titular(new CPF('123.456.789-10'),'Vinicius', $endereco);
// $primeiraConta = new Conta($gusta);
// $primeiraConta->deposita(500);
// $primeiraConta->saca(300); // isso é ok
//var_dump($primeiraConta->recuperaEnderoTitular());

$newFuncionario = new Funcionario(new CPF('123.456.789-10'),'Vinicius',"assitente de TI");
$newFuncionario->alterarNome("teste");
echo $newFuncionario->recuperaCargo() . PHP_EOL;

echo $newFuncionario->recuperaNome() . PHP_EOL;

// echo $primeiraConta->recuperaNomeTitular() . PHP_EOL;
// echo $primeiraConta->recuperaCpfTitular() . PHP_EOL;
// echo $primeiraConta->recuperaSaldo() . PHP_EOL;

// $patricia = new Titular(new CPF('698.549.548-10'), 'Patricia', $endereco);
// $segundaConta = new Conta($patricia);
// var_dump($segundaConta);

// $outra = new Conta(new Titular(new CPF('123.654.789-01'), 'Abcdefg'));
// unset($segundaConta);
//echo Conta::recuperaNumeroDeContas();


// Como não aprender orientação a objetos: Herança
// https://www.alura.com.br/artigos/como-nao-aprender-orientacao-a-objetos-heranca