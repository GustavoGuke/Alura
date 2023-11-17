import { useState } from 'react'
import { Item } from './Item'
import style from './style.module.scss'

export const Lista = () => {

    const [tarefas, setTarefas] = useState(
        [
            {
                tarefa:"React",
                tempo:"01:00"
            }
        ]
        )
    
    const aoSelecionarEstudo = () => {
        const novaTarefa = {tarefa:"c#", tempo:"02:00"}
        setTarefas([...tarefas, novaTarefa])
    }
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={aoSelecionarEstudo}>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <Item
                        key={index}
                        tarefa={tarefa.tarefa}
                        tempo={tarefa.tempo}
                        // {...Item} jeito de desestruturar os itens e enviar 
                    />
                ))}
            </ul>
        </aside>
    )
}