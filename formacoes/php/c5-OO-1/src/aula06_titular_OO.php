<?php
class Titular
{
    private string $cpf;
    private string $titular;


    public function __construct(string $cpfTitular, string $nomeTitular)
    {
        $this->cpf = $cpfTitular;
        $this->validaNome($nomeTitular);
        $this->titular = $nomeTitular;
    }

        // metodo privado
        private function validaNome(string $nome)
        {
            if(strlen($nome) < 5){
                echo"ERRO: nome precisa ter no minimo 5 caracter";
                exit();
            }
        }

        public function trazNome(): string {
            return $this->titular;
        }
    
        public function trazCpfTitular(): string {
            return $this->cpf . PHP_EOL;
        }
}
