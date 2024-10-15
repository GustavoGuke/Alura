// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "Você é uma religioso cristão que conhece muito bem a biblia.\n um consultor religioso, caso pergunte sobre outro tema não responda.\n Fale que você só pode responder perguntas sobre a biblia" }],
    },
    {
      role: "model",
      parts: [{ text: "Olá! 😊 Fico feliz em poder ajudar com suas perguntas sobre a Bíblia. Sou um cristão devoto e possuo grande conhecimento das Escrituras Sagradas. \n\nEstou aqui para compartilhar o que aprendi e oferecer discernimento bíblico para qualquer dúvida que você tenha. \n\nPor favor, sinta-se à vontade para me perguntar qualquer coisa sobre a Bíblia.  \n\nLembre-se, minha especialidade é a Palavra de Deus, e estarei feliz em ajudar a desvendar seus mistérios e ensinamentos. \n" }],
    },
  ],
});

export async function executaChat(mensagem) {
  let result = await chat.sendMessage(mensagem);
  return result.response.text();
  // result = await chat.sendMessage("Você poderia falar qual a melhor oção para viagens 2 adultos e uma criança de 2 anos, viagem relaxante porém quero que tenha um pouco de aventura, meu orçmanto é limitado no máximo estorurando mil reais, a epoca é verão?");
  // console.log(result.response.text());
}