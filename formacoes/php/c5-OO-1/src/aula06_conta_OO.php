<?php
class Conta 
{

    // No PHP8 a inicialização da variaveis podem ser no construtor direto
    private $titular;
    private float $saldo;
    private static $numeroDeContas = 0;  // atributo da classe  global


    // metodo constructor - inicializar a classe
    public function __construct(Titular $titular)
    {   
        //No PHP8 a inicialização da variaveis podem ser no construtor direto
        $this->titular = $titular;
        $this->saldo = 0;
        
        Conta::$numeroDeContas++;
    }

    // metodo destruct - destroi referencia a um obejto-classe que não é mais ultilizada
    public function __destruct()
    {
        // self referencia o nome da classe - a mesma coisa de nomeClasse::$numeroDeContas--;
        self::$numeroDeContas--;
    }

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
            echo "destinario não encontrado" . PHP_EOL;
        }
        if($valor > $this->saldo) {
            echo "Saldo indisponivel" . PHP_EOL;
            return;
        } 
        $this->sacar($valor);
        $contaDestino->depositar($valor);
    }

    public function trazSaldo(): float {
       return $this->saldo . PHP_EOL;
    }

    public function trazTitular(): string {
        return $this->titular->trazNome() . PHP_EOL;
    }

    public function trazCpf() {
        return $this->titular->trazCpfTitular() . PHP_EOL;
    }


    // metodos statics
    public static function nContas(): int
    {
        return Conta::$numeroDeContas . PHP_EOL;
    }
};

// https://martinfowler.com/bliki/ValueObject.html.