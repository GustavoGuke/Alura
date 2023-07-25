<?php
$lista = [
    "1" => [
        "titular" => "gustavo",
        "saldo" => 300
    ],
    "2" => [
        "titular" => "kerolin",
        "saldo" => 500
    ],
    "3" => [
        "titular" => "kessilin",
        "saldo" => 100
    ]
];
 
//echo $lista["1"]["saldo"];

// passagem de referencia para uma conta &$variavel
function letraMaiuscula($conta){
    global $lista;
    echo "\n" . $lista[$conta]["titular"] =  strtoupper($lista[$conta]["titular"]);
}

// metodo stroupper letra maiuscula
function letraMaiuscula2(){
    $nome = "gusta";
    $nome =  strtoupper($nome);
    echo $nome;
}

function saque($conta, $valor){
    global $lista;
    $nova_conta = "";
    echo "\nSaldo Inicial: " . $lista[$conta]["saldo"];
    if($valor > $lista[$conta]["saldo"] ){
        echo "Valor do saque maior do que esta na conta";
        
    } 
    else {
        echo "\nSaque: -" . $valor;
        echo "\nSaldo: " . $lista[$conta]["saldo"] -= $valor;
        letraMaiuscula($conta);
    }
}
echo saque(1, 90);


function deposito($conta,$valor){
    global $lista;
    echo "\nDeposito: " . $valor;
    echo "\nsaldo: " . $lista[$conta]["saldo"] += $valor;
}
echo deposito(1,10);
?>
