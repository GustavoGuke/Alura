import { db } from "./sqlite";

export function criarTabela() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "NOTA " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, urgencia TEXT, texto TEXT);")
    })
}


export async function adcionarNota(nota){
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql(`INSERT INTO NOTA (titulo, categoria, urgencia, texto) VALUES (?,?,?,?);`,[nota.titulo, nota.categoria,nota.urgencia, nota.texto], () => {
                resolve("Nota adicionada com sucesso")
                console.log("criado")
            })
        })
    })
}

export async function atualizarNota(nota) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql(`UPDATE Nota SET titulo = ?, categoria = ?, urgencia = ?, texto = ? WHERE id = ?;`, [nota.titulo, nota.categoria,nota.urgencia, nota.texto, nota.id], () => {
                resolve("Nota atualizada com sucesso")
            })
        })
    })
}

export async function deletarNota(nota) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql(`DELETE FROM Nota WHERE id = ?;`, [nota.id], () => {
                resolve("Nota deletada com sucesso")
            })
        })
    })
}

export async function buscaNota(){

    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql(`SELECT * FROM NOTA;`,[], (transaction, resultado) => {
                resolve(resultado.rows._array)
            })
        })
    })
   
}