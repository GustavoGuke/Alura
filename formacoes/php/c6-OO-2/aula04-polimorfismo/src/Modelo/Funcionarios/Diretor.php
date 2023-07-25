<?php
namespace Alura\Banco\Modelo\Funcionarios;

class Diretor extends Funcionario
{
    public function calculaBonificacao(): float
    {
        return $this->recuperaSalario() * 2;
    }

    public function autentica(string $senha): bool
    {
        return $senha === "1234";
    }
}