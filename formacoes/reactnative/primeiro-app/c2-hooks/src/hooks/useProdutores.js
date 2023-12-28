import { useState, useEffect } from "react";
import { carregaProdutores } from '../services/carregaDados'

export default function useProdutores() {
    const [produtoresTitulo, setProdutoresTitulo] = useState('')
    const [produtoresLista, setProdutoresLista] = useState([])
    useEffect(() => {
        const res = carregaProdutores()
        setProdutoresTitulo(res.titulo)
        res.lista.sort((estrela1, estrela2) => estrela1.estrelas - estrela2.estrelas)
        setProdutoresLista(res.lista)
    }, [])

    return [produtoresTitulo, produtoresLista]
}