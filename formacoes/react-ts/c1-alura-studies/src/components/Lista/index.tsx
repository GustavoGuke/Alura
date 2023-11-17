import { Item } from './Item'
import style from './style.module.scss'

export const Lista = () => {

    const tarefas = [
        {
            tarefa: "React-ts",
            tempo: "02:00:00"
        },
        {
            tarefa: "C#",
            tempo: "02:00:00"
        }
    ]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
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