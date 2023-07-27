<?php

namespace Alura\Banco\Modelo;

class Endereco
{
    private string $cidade;
    private string $bairro;
    private string $rua;
    private string $numero;

    public function __construct(string $cidade, string $bairro, string $rua, string $numero)
    {
        $this->cidade = $cidade;
        $this->bairro = $bairro;
        $this->rua = $rua;
        $this->numero = $numero;
    }

    public function __toString(): string
    {
        return "{$this->rua}, {$this->numero}, {$this->bairro}, {$this->cidade}";
    }

    public function recuperaCidade(): string
    {
        return $this->cidade;
    }

    public function recuperaBairro(): string
    {
        return $this->bairro;
    }

    public function recuperaRua(): string
    {
        return $this->rua;
    }

    public function numero(): string
    {
        return $this->numero;
    }
}
