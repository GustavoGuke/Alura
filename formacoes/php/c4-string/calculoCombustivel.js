// Calcular o valor gasto em uma viagem
function calculo(preco, distancia, custoMedioKm){
    if(!preco || !distancia || !custoMedioKm){
        return 'valor obrigatorio'
    }
    let litrosConsumidos  = distancia / custoMedioKm
    let valorGasto = preco * litrosConsumidos
    return valorGasto.toFixed(2)
}

let res = calculo(3.89, 100, 11)
console.log(res)

// Calcula quantos de km o veiculo fara com determinado valor
function Combustivel(qtdValor, preco, fazPorLitro) {
    this.qtdValor = qtdValor
    this.preco = preco
    this.fazPorLitro = fazPorLitro
    let qtdLitro = qtdValor / preco
    

    setTimeout(() => {
        console.log(`R$ ${this.qtdValor},00 vai dar ${qtdLitro.toFixed(2)} Litros
O carro fara ${(qtdLitro * fazPorLitro).toFixed(2)}km com esse valor`)
    }, 1000)

}

//let palio = new Combustivel(100, 3.89, 11)
//console.log(palio)