import { Item } from './Item'
import style from './style.module.scss'
import { ITarefa } from '../../types/Tarefas'


interface Props {
    tarefas: ITarefa[],
    aoSelecionarTarefa: (tarefaSelecionada: ITarefa) => void
}

export const Lista = ({ tarefas, aoSelecionarTarefa }: Props) => {
    return (
        <aside className={style.listaTarefas}>
            <h2 >Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        aoSelecionarTarefa={aoSelecionarTarefa}
                        key={item.id}
                        // tarefa={tarefa.tarefa}
                        // tempo={tarefa.tempo}
                        // selecionado
                        // completado
                        {...item} //jeito de desestruturar os itens e enviar 
                    />
                ))}
            </ul>
        </aside>
    )
}