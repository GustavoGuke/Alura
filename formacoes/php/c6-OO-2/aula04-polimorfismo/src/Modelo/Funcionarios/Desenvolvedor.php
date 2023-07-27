<?php
namespace Alura\Banco\Modelo\Funcionarios;

class Desenvolvedor extends Funcionario 
{
    public function sobeNivel()
    {
        $this->aumento( $this->recuperaSalario() * 0.75);
    }
}