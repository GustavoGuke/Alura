import chalk from 'chalk';
import fs from "fs";



function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({ [captura[1]]: captura[2] }))
    return resultados;
}

function tratarErro(erro){
    throw new Error(chalk.red(erro.code, "Arquivo não encontrado"))
}

// function pegarArquivo(caminho){
//     const encondig = 'utf-8'
//     fs.readFile(caminho, encondig, (erro, texto) => {
//         if (erro){
//             tratarErro(erro)
//         }
//         console.log(chalk.green(texto))
//     })
// }

// codigo assíncrono com then
// function pegarArquivo(caminho){
//     const encondig = 'utf-8'
//     fs.promises.readFile(caminho, encondig)
//         .then((texto) => console.log(texto))
//         .catch(tratarErro)
// }

// codigo assíncrono com async await
async function pegarArquivo(caminho){

    try {
        const encondig = 'utf-8'
        const texto = await fs.promises.readFile(caminho, encondig)
        console.log(extraiLinks(texto))
    } catch (error) {
        tratarErro(error)
    }
}
pegarArquivo('./arquivos/texto.md')