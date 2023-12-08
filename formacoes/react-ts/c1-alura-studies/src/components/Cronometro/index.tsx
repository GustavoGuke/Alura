import { useState, useEffect } from "react"
import { tempoSegundos } from "../../common/utils/data"
import { ITarefa } from "../../types/Tarefas"
import { Botao } from "../Botao"
import { Relogio } from "./Relogio"
import style from './style.module.scss'

interface Props {
    selecionado : ITarefa | undefined,
    aoTerminarTarefa: () => void

}

export const Cronomentro = ({selecionado, aoTerminarTarefa}: Props) => {
    const [tempo, setTempo] = useState<number>()

   useEffect(() => {
    if(selecionado?.tempo) {
        setTempo(tempoSegundos(selecionado.tempo))
    }
   },[selecionado])
  
   const regressiva = (contador: number = 0) => {
        setTimeout(() => {
            if(contador > 0){
                setTempo( contador - 1)
                return regressiva(contador - 1)
            }
            aoTerminarTarefa()
        }, 1000)
   }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um Card e inicie o cronômetro</p>
            
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            
            <Botao type="button" onClick={() => regressiva(tempo)}>
                Começar
            </Botao>
        </div>
    )
}