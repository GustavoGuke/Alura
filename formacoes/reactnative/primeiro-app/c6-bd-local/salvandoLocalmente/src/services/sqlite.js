import * as SQLite from 'expo-sqlite'


// function conexao(){
//     const database = SQLite.openDatabase("dbnotas.db")
//     return database
// }
function conexao(){
    const database = SQLite.openDatabase("dbnota.db")
    return database
}
export const db = conexao()