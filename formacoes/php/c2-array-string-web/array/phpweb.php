<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Contas correntes</h1>
    <p>servidor php -S localhost:8080</p>
    <dl>
        <?php foreach($contasCorrentes as $cpf => $conta) { ?>
        <dt>
            <h3><?= $conta['titular']; ?> - <?= $cpf; ?></h3>
        </dt>
        <dd>
            Saldo: <?= $conta['saldo']; ?>
        </dd>
        <?php } ?>
    </dl>
</body>
</html>