import { useState, useEffect } from "react";
import { carregaTopo } from '../services/carregaDados'

export default function useTopo(){
    const [topoBoasVindas, setTopoBoasVindas] = useState('')
    const [topoLegendas, setTopoLegendas] = useState('')

    useEffect(() => {
        const res = carregaTopo()
        setTopoBoasVindas(res.boasVindas)
        setTopoLegendas(res.legenda)
    }, [])

    return [topoBoasVindas, topoLegendas]
}