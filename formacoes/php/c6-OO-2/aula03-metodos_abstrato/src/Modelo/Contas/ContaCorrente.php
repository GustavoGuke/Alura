<?php

namespace Alura\Banco\Modelo\Contas;
class ContaCorrente extends Conta
{

    public function transfere(float $valorATransferir, Conta $contaDestino): void
    {
        if ($valorATransferir > $this->saldo) {
            echo "Saldo indisponível";
            return;
        }

        $this->saca($valorATransferir);
        $contaDestino->deposita($valorATransferir);
    }


    protected function tarifa(): float
    {
        return 0.05;
    }

}