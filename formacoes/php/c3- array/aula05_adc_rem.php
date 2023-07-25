<?php
$alunos = ["Gustavo", "kerolin"];

// adicionar elementos no array
// no final - pode ser passado varios elementos
array_push($alunos, "Kessilin");
// no final - apenas um elemento
$alunos[] = "João";
// no inicio
array_unshift($alunos, "Gabriel");
var_dump($alunos);

// remove elementos
// no inicio
echo array_shift($alunos);
// no final
echo array_pop($alunos);


// função list
$contas = [
    [
        'titular' => 'Vinicius Dias',
        'saldo' => 100
    ],
    [
        'titular' => 'Maria Joaquina',
        'saldo' => 1000
    ],
    [
        'titular' => 'João da Silva',
        'saldo' => 800
    ],
];

foreach ($contas as ['titular' => $titular, 'saldo' => $saldo]) {
    echo "$titular possui $saldo reais" . PHP_EOL;
}

// extract
extract($alunos);
var_dump($nome1, $nome2);

// programação funcional curso - map - filter e reduce