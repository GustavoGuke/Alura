const livros = require('./listaLivros');
//const menorValor = require('./menorValor');

function insertSort(lista) {
  for (let atual = 0; atual < lista.length; atual++){
    let analise = atual
    while (analise > 0 && lista[analise].preco < lista[analise -1].preco){

      let itemAtual = lista[analise];
      let itemAnterior = lista[analise - 1];
      lista[analise] = itemAnterior
      lista[analise -1] = itemAtual
      
      analise--
    }
  }
  console.log(lista)
}
insertSort(livros)
// lista [{nome:js, preco:50},{nome:php, preco:25}, {nome:go, preco:15}]

/**
 analise = 0   1    2
 analise = -1

  php preco 25 < analise -1 = js 50 true  então
  cria variavel itemAtual e itemAnterior
  lista[1] = itemAnterio = 0
  lista[1 - 1] = itemAtual = 1
  itemAtual que 1 php preco 25 
 */