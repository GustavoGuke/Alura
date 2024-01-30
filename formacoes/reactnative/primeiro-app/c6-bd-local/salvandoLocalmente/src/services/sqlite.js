import * as SQLite from 'expo-sqlite'


function conexao(){
    const database = SQLite.openDatabase("dbnotas.db")
    return database
}

export const db = conexao()