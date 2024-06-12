import { db } from "../config/firebase";
import { collection, addDoc, getDocs} from "firebase/firestore";

// Add a new document in collection "cities"
export async function criarProduto(data) {
    try {
        await addDoc(collection(db,"aluraCurso"), data);
        return "ok"
    } catch (error) {
        console.log(error)
        return "erro"
    }
}

export async function pegarProdutos(){
    try {
        const docRef = await getDocs(collection(db, 'aluraCurso'))
        let produtos = []
        docRef.forEach((doc) => {
            let produto = 
            {
                id:doc.id, ...doc.data()
            }
            produtos.push(produto)
        })
        return produtos
    } catch (error) {
        console.log(error)
        return []
    }
}