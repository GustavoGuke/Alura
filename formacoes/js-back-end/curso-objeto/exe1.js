const clientes = require('./exe-aula5.json')

function moraEmAp(lista, chave){
    return lista.filter((item)=> item[chave].apartamento === false)
}
// quantas pessoas moram/ou não em Ap  mudar função de true para false
// const moradoresAp = moraEmAp(clientes, 'endereco')
// console.log(moradoresAp.length)

// moram em ap mas não tem complemento
function semComp(lista, chave) {
    return lista.filter((item) => {
        return item[chave].apartamento && !item[chave].complemento})
}
const moradoresAp = semComp(clientes, 'endereco')

function mudarTipo(lista){
    return lista.map(lista => parseInt(lista.endereco.numero) )
}
console.log(mudarTipo(moradoresAp))

// ordenar por ordem alfabetica
// const ordenarPorAfabetico = moradoresAp.sort((a, b) =>  a.nome.localeCompare(b.nome))
// console.log(ordenarPorAfabetico)


// ordenar por ordem numero da casa
const ordenarPorNumCasa = moradoresAp.sort((a,b) => parseInt(a.endereco.numero) - parseInt(b.endereco.numero))
console.log(ordenarPorNumCasa)