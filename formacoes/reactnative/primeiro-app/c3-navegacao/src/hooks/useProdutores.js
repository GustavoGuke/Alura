import { useState, useEffect } from "react";
import { carregaProdutores } from '../services/carregaDados'

export default function useProdutores(melhoresProdutores) {
    const [produtoresTitulo, setProdutoresTitulo] = useState('')
    const [produtoresLista, setProdutoresLista] = useState([])
    useEffect(() => {
        const res = carregaProdutores()
        setProdutoresTitulo(res.titulo)
        res.lista.sort((estrela1, estrela2) => estrela1.estrelas - estrela2.estrelas)
        let novaLista = res.lista

        if (melhoresProdutores) {
            novaLista = novaLista.filter(
                (produtor) => produtor.estrelas > 3
            );
        }
        setProdutoresLista(novaLista)
    }, [])

    return produtoresLista
}