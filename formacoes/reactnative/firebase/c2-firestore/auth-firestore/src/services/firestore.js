import { firebase } from "@react-native-firebase/auth";
import { db } from "../config/firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
//import { firestore } from "firebase/firestore";
import firestore from '@react-native-firebase/firestore';

// Add a new document in collection "cities"
export async function criarProduto(data) {
    try {
        console.log("entro na func2")

        firestore()
            .collection('aluraCurso')
            .add(data)
            .then(() => {
                console.log('User added!');
            });

        //await addDoc(collection(db,"aluraCurso"), data);
        console.log("saiu na func2")
        return "ok"

    } catch (error) {
        console.log(error)
        return "erro"
    }
}

