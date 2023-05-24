let lista = [2,1,4,6,3,0,10,8]
function comparaNumeros(a,b) {
     if (a == b) return 0;  // =
     if (a < b) return -1; // <
     if (a > b) return 1; // >
}

let num1 = 4
let num2 = 9

console.log(comparaNumeros(num1, num2))


console.log(lista)
console.log(lista.sort(comparaNumeros))