let newNota = 8
let notas = [4,3,9]
let notaFinal = 0
let minhaMedia

if(notas.length < 4){
    notas.push(newNota)
    console.log(`adicionado ${newNota} na nota`)
}else {
    console.log("Notas completas, não é permitido adicionar mais notas")
}

for (n of notas) {
    notaFinal += n
}
minhaMedia = notaFinal / notas.length
console.log(minhaMedia)
console.log(notaFinal)