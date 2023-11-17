import { Botao } from "../Botao"
import style from './style.module.scss'

export const Formulario = () => {
  return (
    <>
        <form className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Nova tarefa</label>
                <input type="text"
                name="tarefa"
                id="tarefa"
                placeholder="Vai estudar o que"
                required />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input 
                type="time"
                id="tempo"
                name="tempo" />
            </div>
            <Botao > Adicionar</Botao>
        </form>
    </>
  )
}
