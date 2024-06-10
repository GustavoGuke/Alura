import { db } from "../config/firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";


// Add a new document in collection "cities"
export async function criarProduto(data) {
    try {
        console.log("entro na func2")
        await addDoc(collection(db,"alura-curso-fire-c1"), data);
        console.log("saiu na func2")
        return "ok"
        
    } catch (error) {
        console.log(error)
        return "erro"
    }
}

