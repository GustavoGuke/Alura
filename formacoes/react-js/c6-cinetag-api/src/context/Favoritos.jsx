import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext()
FavoritosContext.displayName = 'Favoritos'

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([])

    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext)

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novaLista = [...favorito]

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito)
            return setFavorito(novaLista)
        }
        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        /*  jeito de filtrar e apagar o usuario
        novaLista.splice( novaLista.findIndex (
        item => item.id === novaLista.find(item => item.id === novoFavorito.id).id
        ),1)
        */
        return setFavorito(novaLista)
    }

    return {
        favorito,
        adicionarFavorito
    }
}


// Alura + video sobre contextAPI
// https://cursos.alura.com.br/extra/alura-mais/conhecendo-o-context-api-do-react-c46

/*
        explicação de context   https://react.dev/reference/react/useContext  doc

        Segundo a documentação do React, o Context (em português, contexto) fornece uma maneira de passar dados pela árvore de componentes sem ter que passar props manualmente em todos os níveis.

Geralmente, quando estamos desenvolvendo um projeto em React, os dados são passados de por meio de props, de componente pai para filho.

Esse uso pode ser complicado para alguns tipos de propriedades que são exigidas por muitos componentes dentro de um aplicativo, como no nosso caso em que gostaríamos de mostrar quais filmes foram favoritados seja na página inicial ou na página de favoritos. A estrutura para iniciar um contexto é a seguinte:

const MeuContexto = createContext();COPIAR CÓDIGO
Cada objeto Context vem com um componente Provider React que permite que os componentes que estão usando esse contexto façam alterações nele.

<MeuContexto.Provider value={ algum valor }COPIAR CÓDIGO
Após abranger o componente com o provider, você consegue acesso ao componente utilizando o hook useContext(MeuContexto).

Resumidamente, o contexto fornece uma maneira de compartilhar valores como esses entre componentes sem ter que passar explicitamente um prop por todos os níveis da árvore.

Você pode visualizar a aplicação de Contexts em outro projeto React no Alura da Juliana Negreiros Conhecendo o Context API do React e no curso React: gerenciamento de estados globais com ContextAPI do Luiz Fernando.
*/