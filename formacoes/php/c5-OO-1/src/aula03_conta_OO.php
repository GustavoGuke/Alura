<?php
class Conta 
{

    // criar metodos 
    public string $cpf;
    public string $titular;
    private float $saldo = 0;

    public function sacar(float $valor): void{

        if($valor > $this->saldo) {
            echo "Saldo indisponivel";
            return;
        }
        $this->saldo = $this->saldo - $valor;

    }

    public function depositar(float $valor): void{

        if($valor < 0) {
            echo "Valor precisa ser positivo";
            return;
        }
        $this->saldo = $this->saldo + $valor;

    }

    public function transfere(float $valor, $contaDestino): void {

        if (gettype($contaDestino) !== "object") {
            echo "destinario não encontrado";
        }
        if($valor > $this->saldo) {
            echo "Saldo indisponivel";
            return;
        } 
        $this->sacar($valor);
        $contaDestino->depositar($valor);
    }

};