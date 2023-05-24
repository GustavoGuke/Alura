let alunos = ['gustavo', 'kerolin', 'kessilin', 'joao']
let notas = [7, 7.7, 10, 9]


let addPonto = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1)
notas = [...addPonto]

function notaSAlteradas() {
    let alunoENota = [alunos, notas]
    let [aluno, nota] = alunoENota

    for (let i = 0; i < aluno.length; i++) {
        console.log(`Aluno: ${aluno[i].toLocaleUpperCase()} - Nota: ${nota[i]} `)
    }
}

function aluno10(){

    const alunoMaiorNota = alunos.filter((aluno, index) => {
        return notas[index] === 10
    })
    console.log(alunoMaiorNota)
}

function start(){
    notaSAlteradas()
    aluno10()
}
start()
