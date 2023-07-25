<?php
class Conta 
{

    // No PHP8 a inicialização da variaveis podem ser no construtor direto
    private string $cpf = "";
    private string $titular;
    private float $saldo;
    private static $numeroDeContas = 0;  // atributo da classe  global


    // metodo constructor - inicializar a classe
    public function __construct(string $cpfTitular, string $nomeTitular)
    {   
        //No PHP8 a inicialização da variaveis podem ser no construtor direto
        $this->cpf = $cpfTitular;
        $this->validaNome($nomeTitular);
        $this->titular = $nomeTitular;
        $this->saldo = 0;
        
        Conta::$numeroDeContas++;
    }

    // metodo destruct - destroi referencia a uma classe que não é mais ultilizada
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
        return $this->titular . PHP_EOL;
    }

    public function trazCpf(): string {
        return $this->cpf . PHP_EOL;
    }

    // metodo privado
    private function validaNome(string $nome)
    {
        if(strlen($nome) < 5){
            echo"ERRO: nome precisa ter no minimo 5 caracter";
            exit();
        }
    }

    // metodos statics
    public static function nContas(): int
    {
        return Conta::$numeroDeContas;
    }
};