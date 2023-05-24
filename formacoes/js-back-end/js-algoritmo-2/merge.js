const lista = require('./arrayMergeSort')

function mergeSort(array){

    if(array.length > 1){
        // dividi os indices do array para fatialo
        const meio = Math.floor(array.length / 2)
        // fatia o array parte 1
        const parte1 = mergeSort(array.slice(0, meio))
        // fatia o array parte 2
        const parte2 = mergeSort(array.slice(meio, array.length))
        array = ordenaLista(parte1, parte2)
    }
    return array
}

function ordenaLista(lista1, lista2){

    let passagemLista1 = 0
    let passagemLista2 = 0
    listaFinal = []

    while (passagemLista1 < lista1.length && passagemLista2 < lista2.length) {
        // posicaoLista1 = primeiraLista[na posição zero e assim por diante]
        let posicaoLista1 = lista1[passagemLista1]
        let posicaoLista2 = lista2[passagemLista2]

        if (posicaoLista1.preco < posicaoLista2.preco) {
            // preco da lista1 e menor que preco na lista2
            listaFinal.push(posicaoLista1)
            // listaFinal recebe o valor atual q começa em 0 = livro mais barato
            passagemLista1++
            // passagem lista recebe 1
        }
        else {
            listaFinal.push(posicaoLista2)
            passagemLista2++
        }   
    }

    return listaFinal.concat(passagemLista1 < lista1.length
        ? lista1.slice(passagemLista1)
        : lista2.slice(passagemLista2))

}

console.log(mergeSort(lista))