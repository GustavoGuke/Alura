import { createContext } from "react";

export const GlobalContext = createContext()

export function GlobalInfoProvider({children}){
    const valor = 150
    return (
        <GlobalContext.Provider value={{valor}}>
            {children}
        </GlobalContext.Provider>
    )
}