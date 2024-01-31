import { db } from "./sqlite";

export function criarTabela(){
    db.transaction((transaction) => {
        transaction.executeSql(`CREATE TABLE IF NOT EXISTS NOTAS
        (
            ID INTENGER PRIMARY KEY AUTOINCREMENT,
            TITULO TEXT, 
            CATEGORIA TEXT,
            TEXTO TEXT
        );`)
    })
}

export async function adcionarNota(nota){

    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql(`INSERT INTO NOTAS (TITULO, CATEGORIA, TEXTO) VALUES (?,?,?);`,[nota.titulo, nota.categoria, nota.texto], () => {
                resolve("Nota adicionada com sucesso")
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