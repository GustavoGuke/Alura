<?php
class Titular extends Pessoa
{
    private Endereco $endereco;
    public function __construct(CPF $cpf, string $nome, Endereco $endereco)
    {
        // construtor da classe Pessoa - PAI
        parent::__construct($nome, $cpf);
        $this->endereco = $endereco;
    }
    public function recuperaEndereco(): Endereco
    {
        return $this->endereco;
    }
}
