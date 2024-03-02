import { createContext, useState } from "react";


export const AutenticaContext = createContext()

export function AutenticaProvider({ children }) {
    const [usuario, setUsuario] = useState({})

    function login(email, senha){
        if(email == 'alura' && senha == 123){
            setUsuario({
                nome:'Alura',
                email: email,
                endereco:'av. Paulista',
                telefone: '(11) 98888-8888'
            })
            return 'ok'
        }
        else {
            return 'E-mail ou senha incorretos';
        }
    }
    return (
        <AutenticaContext.Provider value={{usuario, login }}>
            {children}
        </AutenticaContext.Provider>
    )
}