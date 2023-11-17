import style from '../style.module.scss'

export const Item = ({tarefa, tempo} : {tarefa:string, tempo: string}) => {
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}