import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, 
    AuthErrorCodes, signInWithEmailAndPassword } from 'firebase/auth'


function errosFirebase(error) {
    let msg = ''
    switch (error.code) {
        case AuthErrorCodes.EMAIL_EXISTS:
            msg = 'Email já cadastrado'
            break
        case AuthErrorCodes.INVALID_EMAIL:
            msg = 'Email inválido'
            break
        case AuthErrorCodes.WEAK_PASSWORD:
            msg = 'A  senha precisar ter mais de 6 caracteres'
            break
        default:
            msg = 'Error desconhecido'
    }
    return msg
}

export async function cadastrar(email, senha) {
    const resultado = createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredencial) => {
            console.log(userCredencial)
            return 'sucesso'
        })
        .catch((error) => {
            console.log(error)
            return errosFirebase(error)
        })

    return resultado
}

export async function logar(email, senha) {
    const resultado = signInWithEmailAndPassword(auth, email, senha)
        .then((userCredencial) => {
            console.log(userCredencial)
            return 'sucesso'
        })
        .catch((error) => {
            console.log(error)
            return 'Erro ao Logar'
        })

    return resultado
}