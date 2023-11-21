import style from './style.module.scss'

export const Botao = ({children, type}: {children: string, type:"button" | "submit" | "reset"}) => {
  return (
    <button className={style.botao} type={type}>{children}</button>
  )
}
