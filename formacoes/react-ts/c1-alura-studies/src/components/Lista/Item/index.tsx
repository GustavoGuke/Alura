import { ITarefa } from '../../../types/Tarefas'
import style from '../style.module.scss'

export const Item = ({tarefa, tempo, selecionado, completado, id} : ITarefa) => {
    console.log('item atual', {tarefa, tempo, selecionado, completado, id})
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}