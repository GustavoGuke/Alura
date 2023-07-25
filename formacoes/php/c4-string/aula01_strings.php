<?php
$nome = "gustavo lima";

// verificar se string esta contida na palavra devolve true ou false
$contem = str_contains($nome, "lima");
echo $contem;

// verificar a primeira palavra ou letra devolve true ou false
$primeira_lp = "https://alura.com.br";
$res = str_starts_with($primeira_lp, "t");
echo $res . "\n";

// verifica a ultima pelavra ou letra
$ultima_lp = "https://alura.com.br";
$res2 = str_ends_with($ultima_lp, ".br");
echo $res2 . "\n";

