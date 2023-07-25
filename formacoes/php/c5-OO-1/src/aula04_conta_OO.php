<?php
class Conta 
{   

    // encapsulamento criar metodos para mexer com a classe sem expor os dados (private variaveis)
    private string $cpf = "";
    private string $titular;
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

    public function defineTitular(string $nomeTitular) {
        $this->titular = $nomeTitular;
    }

    public function defineCpf(string $cpfTitular) {
        $this->titular = $cpfTitular;
    }

    public function trazSaldo(): float {
       return $this->saldo;
    }

    public function trazTitular(): string {
        return $this->titular;
    }

    public function trazCpf(): string {
        return $this->cpf;
    }

};