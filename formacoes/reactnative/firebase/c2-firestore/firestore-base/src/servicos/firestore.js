import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";


// Add a new document in collection "cities"
export async function criarProduto(data) {
    try {
        await addDoc(collection(db, 'curso_firebase_alura'), data);
        console.log(data)
        return "ok"
        
    } catch (error) {
        console.log(error)
        return "erro"
    }
}

