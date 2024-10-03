// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "lista 5 presentes para dar para a mulher no aniversário de casamento";

const result = await model.generateContent(prompt);
console.log(result.response.text());