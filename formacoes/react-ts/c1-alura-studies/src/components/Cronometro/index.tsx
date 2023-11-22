import { Botao } from "../Botao"
import { Relogio } from "./Relogio"
import style from './style.module.scss'

export const Cronomentro = () => {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um Card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao type="button">
                Começar
            </Botao>
        </div>
    )
}