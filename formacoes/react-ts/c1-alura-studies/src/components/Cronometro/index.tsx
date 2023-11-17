import { Botao } from "../Botao"
import { Relogio } from "./Relogio"
import style from './style.module.scss'

export const Cronomentro = () => {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um Crad e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    )
}