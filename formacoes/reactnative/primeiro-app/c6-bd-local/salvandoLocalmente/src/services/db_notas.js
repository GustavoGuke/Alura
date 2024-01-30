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