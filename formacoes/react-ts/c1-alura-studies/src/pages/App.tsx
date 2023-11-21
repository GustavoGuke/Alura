import { useState } from 'react'
import { Cronomentro } from "../components/Cronometro"
import { Lista } from "../components/Lista"
import { Formulario } from "../components/formulario"
import style from './style.module.scss'
import { ITarefa } from '../types/Tarefas'


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronomentro />
    </div>
  )
}

export default App
