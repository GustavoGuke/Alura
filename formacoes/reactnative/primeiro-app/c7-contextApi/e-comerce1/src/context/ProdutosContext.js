import { createContext } from "react";

export const ProdutosContext = createContext()

export function ProdutosProvider({children}){
    
    return (
        <ProdutosContext.Provider value={{}}>
            {children}
        </ProdutosContext.Provider>
    )
}