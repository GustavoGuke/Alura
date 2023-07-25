<?php
// lista
$lista_de_idade = [01,13,29,10,25];

// funcionalidade list
[$n1, , $n29, , $n25] = $lista_de_idade;
//echo $n25;


//echo $lista_de_idade[1];

// inserir novo item na lista
$lista_de_idade[] = 35;

// remover um item lista 
//unset($lista_de_idade[1]);


// iterar lista
for ($n = 0; $n < count($lista_de_idade); $n++){
    echo $lista_de_idade[$n] . PHP_EOL;
};

// arrays associativos
$conta = [
    "titular" => "Gustavo",
    "saldo" => 300
];
$conta1 = [
    "titular" => "kerolin",
    "saldo" => 200
];
$conta2 = [
    "titular" => "kessilin",
    "saldo" => 100
];
$lista_correntes = [$conta, $conta1, $conta2];


// acessar conta 

// echo $conta["titular"];

for ($n = 0; $n < count($lista_correntes); $n++){
    //echo $lista_correntes[$n]["titular"] . PHP_EOL ;
}


// foreach
foreach ($lista_correntes as $correntes){
   // echo $correntes['saldo'] . PHP_EOL;
};

// acessar as chaves da lista associativas
foreach($lista_correntes as $chave => $correntes){
   // echo $chave . PHP_EOL;
};

// lista 2
$lista_cursos = [
    "dotNet" => [
        "curso" => "Formação visual Basic",
        "horas" => "142"
    ],
    "php" => [
        "curso" => "Formação PHP",
        "horas" => 72
    ],
    "dados" => [
        "curso" => "Formação mySql oracle",
        "horas" => 42
    ]
];

// inserir novo item na lista associativa
$lista_cursos["js"] = [
    "curso" => "Formação js",
    "horas" => 38
];

foreach($lista_cursos as $chave => $correntes){
   // echo $chave . ": " . $correntes["curso"] . PHP_EOL;
};

?>