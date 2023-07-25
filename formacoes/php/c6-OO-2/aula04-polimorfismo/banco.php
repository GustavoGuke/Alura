<?php
require_once 'src/Modelo/Pessoa.php';
require_once 'src/Modelo/Contas/Conta.php';
require_once 'src/Modelo/Contas/ContaPoupanca.php';
require_once 'src/Modelo/Contas/ContaCorrente.php';
require_once 'src/Modelo/Contas/Titular.php';
require_once 'src/Modelo/CPF.php';
require_once 'src/Modelo/Endereco.php';
require_once 'src/Modelo/Funcionarios/Funcionario.php';
require_once 'src/Servicos/BonificacaoFunc.php';


// spl_autoload_register(function(string $caminhoDoArquivoCompleto){
//     //src/modelo/endereco  1 parte
//     //src/modelo/enderco.php 2 parte
    
//     $caminhoDoArquivo = str_replace('Alura\\Banco', 'src', $caminhoDoArquivoCompleto);
//     $caminhoDoArquivo = str_replace('\\', DIRECTORY_SEPARATOR, $caminhoDoArquivo);
//     $caminhoDoArquivo .= '.php';

//     if (file_exists($caminhoDoArquivo)){
//         require_once $caminhoDoArquivo;
//     }
   
// });

use Alura\Banco\Modelo\Pessoa;
use Alura\Banco\Modelo\CPF;
use Alura\Banco\Modelo\Endereco;
use Alura\Banco\Modelo\Funcionarios\Funcionario;
use Alura\Banco\Modelo\Contas\Conta;
use Alura\Banco\Modelo\Contas\ContaCorrente;
use Alura\Banco\Modelo\Contas\ContaPoupanca;
use Alura\Banco\Modelo\Contas\Titular;
use Alura\Banco\Servicos\BonificacaoFunc;

// Conta TITULAR
$endereco = new Endereco("aruja","mirante","bbbb","1111");
$gusta = new Titular(new CPF('123.456.789-10'),'Vinicius', $endereco);

$primeiraConta = new ContaCorrente($gusta);
$primeiraContaPoup = new ContaPoupanca($gusta);


$primeiraConta->deposita(500);
$primeiraConta->saca(300); // isso é ok

$primeiraContaPoup->deposita(500);
$primeiraContaPoup->saca(300); // isso é ok
//var_dump($primeiraConta->recuperaEnderoTitular());

// echo $primeiraConta->recuperaNomeTitular() . PHP_EOL;
// echo $primeiraConta->recuperaCpfTitular() . PHP_EOL;
// echo $primeiraConta->recuperaSaldo() . PHP_EOL;
// echo $primeiraContaPoup->recuperaSaldo() . PHP_EOL;

// $patricia = new Titular(new CPF('698.549.548-10'), 'Patricia', $endereco);
// $segundaConta = new Conta($patricia);
// var_dump($segundaConta);

// $outra = new Conta(new Titular(new CPF('123.654.789-01'), 'Abcdefg'));
// unset($segundaConta);
//echo Conta::recuperaNumeroDeContas();


// Conta Funcionario
$newFuncionario = new Funcionario(new CPF('123.456.789-10'),'Vinicius',"gerente",100);
$newFuncionario2 = new Funcionario(new CPF('123.456.789-10'),'Gustavo',"assitente de TI n2",200);
//$newFuncionario->alterarNome("teste");
echo $newFuncionario2->recuperaCargo() . PHP_EOL;

echo $newFuncionario2->recuperaNome() . PHP_EOL;
$newFuncionario->calculaBonificacao() . PHP_EOL;
echo $newFuncionario2->recuperaSalario() .  PHP_EOL;

$mostrarBonificaco = new BonificacaoFunc();
$mostrarBonificaco->somaBonificacao($newFuncionario);
$mostrarBonificaco->somaBonificacao($newFuncionario2);
echo $mostrarBonificaco->verTotalBoni();


// Como não aprender orientação a objetos: Herança
// https://www.alura.com.br/artigos/como-nao-aprender-orientacao-a-objetos-heranca