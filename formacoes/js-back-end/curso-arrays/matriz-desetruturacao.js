let aluno = ['gustavo', 'kerolin', 'kessilin', 'joao']
let notas = [7, 7.7, 10, 9]
let notasDeAlunos = [aluno,notas]


function notaaluno(nome){
    let [aluno, nota] = notasDeAlunos

    if(aluno.includes(nome)){
        let index = aluno.indexOf(nome)
        let notaAluno = nota[index]
        console.log(`Aluno(a) ${nome} ficou com a média ${notaAluno}`)
    }else{
        console.log('aluno não encontrado')
    }
}

notaaluno('kessilin')