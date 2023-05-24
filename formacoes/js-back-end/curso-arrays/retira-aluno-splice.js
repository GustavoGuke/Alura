// retirar caio e lara
// add rodrigo
let alunos = ['joao', 'ana', 'caio', 'lara', 'marjorie', 'leo']
let newAlunos = null

// sem alterar o array original
// function desistenciaAluno(nomeAluno){
//     newAlunos = alunos.filter( aluno => aluno != nomeAluno)
//     return newAlunos
// }

function desistenciaAluno(nomeAluno){
    //newAlunos = alunos.findIndex(exAluno => exAluno === nomeAluno)
    newAlunos = alunos.indexOf(nomeAluno)
    alunos.splice(newAlunos,1)
}

function addNovoAluno(nomeAluno){
    alunos.push(nomeAluno)
}
desistenciaAluno('caio')
desistenciaAluno('lara')
addNovoAluno('rodrigo')
console.log(alunos)
