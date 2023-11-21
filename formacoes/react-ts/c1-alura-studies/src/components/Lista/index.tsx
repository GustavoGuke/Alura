import { Item } from './Item'
import style from './style.module.scss'
import { ITarefa } from '../../types/Tarefas'

export const Lista = ({tarefas}: {tarefas: ITarefa[]}) => {

    return (
        <aside className={style.listaTarefas}>
            <h2 >Estudos do dia</h2>
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