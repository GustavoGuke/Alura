import { useState, useEffect } from "react";
import { carregaTopo } from '../services/carregaDados'

export default function useTopo(){
    const [textos, setTextos] = useState({})

    useEffect(() => {
        const res = carregaTopo()
        setTextos(res)
    }, [])

    return textos
}