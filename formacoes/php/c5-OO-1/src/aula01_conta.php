<?php

function criarConta(string $cpf, string $titular, float $saldo): array
{
    if (strlen($cpf) < 11){
        echo "Cpf invalido";
        return [];
    }
    return [
        $cpf => [
            "titular" => $titular,
            "saldo" => $saldo
        ]
    ];
};