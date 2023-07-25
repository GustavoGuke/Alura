<?php

namespace Alura\Banco\Servicos;

use Alura\Banco\Modelo\Funcionarios\Funcionario;

class BonificacaoFunc
{
    public $totalDeBonificacao;

    public function somaBonificacao(Funcionario $funcionario) {
        $this->totalDeBonificacao += $funcionario->calculaBonificacao();
    }

    public function verTotalBoni(): float
    {
        return $this->totalDeBonificacao;
    }
}