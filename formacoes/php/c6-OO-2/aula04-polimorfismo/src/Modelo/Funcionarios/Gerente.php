<?php
namespace Alura\Banco\Modelo\Funcionarios;

class Gerente extends Funcionario
{
    public function calculaBonificacao(): float
    {
        return $this->recuperaSalario();
    }
}