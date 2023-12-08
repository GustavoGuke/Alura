import { useState } from "react"
import { Botao } from "../Botao"
import style from './style.module.scss'
import { ITarefa } from "../../types/Tarefas"
import { v4 as uuidv4 } from 'uuid'

export const Formulario = ({ setTarefas }: { setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }) => {
  const [tarefa, setNovaTarefa] = useState('')
  const [tempo, setTempo] = useState('')

  const aoAdicionarTarefa = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    setTarefas(oldTarefas => [...oldTarefas,
    {
      tarefa,
      tempo,
      selecionado: false,
      completado: false,
      id: uuidv4()
    }])
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
            step={1}
            id="tempo"
            name="tempo"
            min="00:00:00"
            max="01:30:00"
            required  />
        </div>
        <Botao type="submit"> Adicionar</Botao>
      </form>
    </>
  )
}
