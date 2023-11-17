import style from './style.module.scss'

export const Botao = ({children}: {children: string}) => {
  return (
    <button className={style.botao}>{children}</button>
  )
}
