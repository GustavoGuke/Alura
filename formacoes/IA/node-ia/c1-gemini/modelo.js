import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'


export async function incializaModelo(modelo) {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: modelo });
    return model
}