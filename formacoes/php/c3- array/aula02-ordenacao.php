<?php
$notas = [6,9,8,10];

$ordenadas = $notas;

// função ordena array  em crescente usar rsort para decrescente
// asort para associação e z sort
// ksort krsort para ordenar pela chaves em array associativo
sort($ordenadas);
//echo "Ordenadas";
//var_dump($ordenadas);

//echo "Desordenados";
//var_dump($notas);

//função ordena arrays associativos
$notas2 = [
    [
        'aluno' => 'Gustavo',
        'nota' => 8,
    ],
    [
        'aluno' => 'Kerolin',
        'nota' => 6,
    ],
    [
        'aluno' => 'Kessilin',
        'nota' => 10,
    ],
];

function ordenaNotas($n1, $n2): int{

    return $n1['nota'] <=> $n2['nota'];
    // if($n1['nota'] > $n2['nota']){
    //     return -1;
    // }

    // if ($n2['nota'] > $n1['nota']){
    //     return 1;
    // }

    // return 0;
};

usort(array:$notas2, callback:'ordenaNotas');
var_dump($notas2);