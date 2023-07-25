<?php

namespace Alura\Banco\Modelo\Contas;
class ContaPoupanca extends Conta
{

    protected function tarifa(): float
    {
        return 0.03;
    }

}