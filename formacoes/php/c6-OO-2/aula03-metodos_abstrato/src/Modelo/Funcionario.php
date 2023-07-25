<?php
namespace Alura\Banco\Modelo;

class Funcionario extends Pessoa
{
    private string $cargo;
    private string $salario;

    public function __construct(CPF $cpf, string $nome, string $cargo, string $salario)
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

    public function alterarNome(string $nome) : void
    {
        $this->validaNomeTitular($nome);
        $this->nome = $nome;
    }

    
}