import { ITarefa } from '../../../types/Tarefas'
import style from '../style.module.scss'

interface Props extends ITarefa {
    aoSelecionarTarefa: (tarefaSelecionada: ITarefa) => void
}

export const Item = ({ tarefa, tempo, selecionado, completado, id, aoSelecionarTarefa }: Props) => {
    console.log('item atual', {tarefa, tempo, selecionado, completado, id})

    return (
        <li
            className={`${style.item} ${selecionado ? style.itemSelecionado: ''} ${completado? style.itemCompletado: ''}`}
            onClick={() => !completado && aoSelecionarTarefa({ tarefa, tempo, selecionado, completado, id })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido}></span>}
        </li>
    )
}