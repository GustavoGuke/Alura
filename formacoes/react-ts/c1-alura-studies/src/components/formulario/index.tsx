import { useState } from "react"
import { Botao } from "../Botao"
import style from './style.module.scss'
import { ITarefa } from "../../types/Tarefas"

export const Formulario = ({ setTarefas }: { setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }) => {
  const [tarefa, setNovaTarefa] = useState('')
  const [tempo, setTempo] = useState('')

  const aoAdicionarTarefa = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    setTarefas( oldTarefas => [...oldTarefas,{tarefa, tempo}] )
    setNovaTarefa('')
    setTempo('')
  }
  return (
    <>
      <form className={style.novaTarefa} onSubmit={aoAdicionarTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Nova tarefa</label>
          <input type="text"
            value={tarefa}
            name="tarefa"
            id="tarefa"
            onChange={(e) => setNovaTarefa(e.target.value)}
            placeholder="Vai estudar o que"
            required />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            value={tempo}
            onChange={(e) => setTempo(e.target.value)}
            type="time"
            id="tempo"
            name="tempo" />
        </div>
        <Botao type="submit"> Adicionar</Botao>
      </form>
    </>
  )
}
