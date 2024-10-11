// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "Ola" }],
    },
    {
      role: "model",
      parts: [{ text: "Ola?" }],
    },
  ],
});
let result = await chat.sendMessage("Eu gostaria de viajar");
console.log(result.response.text());
result = await chat.sendMessage("Você poderia falar qual a melhor oção para viagens 2 adultos e uma criança de 2 anos, viagem relaxante porém quero que tenha um pouco de aventura, meu orçmanto é limitado no máximo estorurando mil reais, a epoca é verão?");
console.log(result.response.text());