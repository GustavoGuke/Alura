import style from './style.module.scss'

export const Botao = ({children, type, onClick}: {children: string, type:"button" | "submit" | "reset", onClick?:() => void}) => {
  return (
    <button onClick={onClick} className={style.botao} type={type}>{children}</button>
  )
}
