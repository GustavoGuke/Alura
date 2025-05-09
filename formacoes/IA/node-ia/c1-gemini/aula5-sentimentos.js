import { incializaModelo } from './modelo.js';
import { fazerPergunta } from './pergunta.js';
import  fs  from 'fs';

const model = await incializaModelo("gemini-1.5-flash");

export async function processaArquivoTexto() {
    //const arquivo = await fazerPergunta("Me informe o caminho e nome do arquivo: ");
    const dados = fs.readFileSync("./aula5.txt", 'utf8');

    const prompt = `Analise as opiniões descritas em sequência e resuma os pontos positivos e negativos citados pelos clientes sobre esses destinos. Depois, categorize o percentual de respostas em satisfeito, insatisfeitos ou neutros, colocando no seguinte formato, por exemplo:  
    Satisfeitos: 20% - 20 respostas 
    Insatisfeitos: 50% - 50 respostas
    Neutros: 30% - 30 respostas 
    O total de respostas deve coincidir com o total de opiniões lidas. 
    Opiniões: ${dados}`;

    const result = await model.generateContent(prompt);
    
    console.log(result.response.text());

}
processaArquivoTexto()