const { createContext, useState } = require("react");

export const UserContext =  createContext()
UserContext.displayName = "Usuario"

export const UserProvider = ({children}) => {
    const [nome, setNome] = useState('')
    const [saldo, setSaldo] = useState(0)
    return (
        <UserContext.Provider value={{ nome, setNome, saldo, setSaldo }}>
            {children}
        </UserContext.Provider>
    )
}