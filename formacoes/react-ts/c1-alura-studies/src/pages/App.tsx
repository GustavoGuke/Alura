import { useState } from 'react'
import { Cronomentro } from "../components/Cronometro"
import { Lista } from "../components/Lista"
import { Formulario } from "../components/formulario"
import style from './style.module.scss'
import { ITarefa } from '../types/Tarefas'


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function aoSelecionarTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function aoTerminarTarefa() {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefaAmterior => tarefaAmterior.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        aoSelecionarTarefa={aoSelecionarTarefa}
      />
      <Cronomentro
        selecionado={selecionado} 
        aoTerminarTarefa={aoTerminarTarefa}/>
    </div>
  )
}

export default App
