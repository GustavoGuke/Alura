<?php
namespace Alura\Banco\Modelo\Funcionarios;

use Alura\Banco\Modelo\CPF;
use Alura\Banco\Modelo\Pessoa;

class Funcionario extends Pessoa
{
    private string $cargo;
    private float $salario;

    public function __construct(CPF $cpf, string $nome, string $cargo, float $salario)
    {   
        // construtor da classe Pessoa - PAI
        parent::__construct($nome, $cpf);
        $this->cargo = $cargo;
        $this->salario = $salario;
    }

    public function recuperaCargo() : string
    {
        return $this->cargo;
    }

    public function recuperaSalario(): float
    {
        // if ($cargo == "gerente" || $cargo == "diretor"){
        //     return $this->salario;
        // }
        // echo "Salario não disponivel = ";
        return $this->salario;
    }

    public function alterarNome(string $nome) : void
    {
        $this->validaNomeTitular($nome);
        $this->nome = $nome;
    }

    public function calculaBonificacao(): float
    {
        
        return $this->salario * 0.1;
    }
}