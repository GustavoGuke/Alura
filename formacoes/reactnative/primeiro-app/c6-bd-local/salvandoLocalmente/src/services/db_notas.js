import { db } from "./sqlite";

export function criarTabela() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "Notas " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, texto TEXT);")
    })
}


export async function adcionarNota(nota){
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql(`INSERT INTO NOTAS (titulo, categoria, texto) VALUES (?,?,?);`,[nota.titulo, nota.categoria, nota.texto], () => {
                resolve("Nota adicionada com sucesso")
            })
        })
    })
}

export async function atualizarNota(nota) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql(`UPDATE Notas SET titulo = ?, categoria = ?, texto = ? WHERE id = ?;`, [nota.titulo, nota.categoria, nota.texto, nota.id], () => {
                resolve("Nota atualizada com sucesso")
            })
        })
    })
}

export async function deletarNota(nota) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql(`DELETE FROM Notas WHERE id = ?;`, [nota.id], () => {
                resolve("Nota deletada com sucesso")
            })
        })
    })
}

export async function buscaNota(){

    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql(`SELECT * FROM NOTAS;`,[], (transaction, resultado) => {
                resolve(resultado.rows._array)
            })
        })
    })
   
}