const {edGalho, edFolha} = require('./arrays')

function juntaLista(lista1, lista2){

// variaveis contadores
let passagemLista1 = 0
let passagemLista2 = 0
let atual = 0
let listaFinal = []


    while (passagemLista1 < lista1.length && passagemLista2 < lista2.length ){
        // posicaoLista1 = primeiraLista[na posição zero e assim por diante]
        let posicaoLista1 = lista1[passagemLista1]
        let posicaoLista2 = lista2[passagemLista2]

        if (posicaoLista1.preco < posicaoLista2.preco) {
            // preco da lista1 e menor que preco na lista2
            listaFinal[atual] = posicaoLista1
            // listaFinal recebe o valor atual q começa em 0 = livro mais barato
            passagemLista1++
            // passagem lista recebe 1
        }
        else{
            listaFinal[atual] = posicaoLista2
            passagemLista2++
        }
        atual++
    }

    while(passagemLista1 < lista1.length){
        // lista esta vazia 
        listaFinal[atual] = lista1[passagemLista1]
        // lista recebe o valor atual 
        passagemLista1++
        atual++
    }

    while (passagemLista2 < lista2.length) {
        listaFinal[atual] = lista2[passagemLista2]
        passagemLista2++
        atual++
    }

return listaFinal
}

console.log(juntaLista(edGalho, edFolha))