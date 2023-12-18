
import style from './Cardapio.module.scss'
import Logo from 'assets/images/logo.svg?react'
const Cardapio = () => {
    return (
        <main>
            <nav className={style.menu}>
                <Logo />
            </nav>
            <header className={style.header}>
                <div className={style.header__text}>
                    Easy Food
                </div>
            </header>
        </main>
    )
}
export default Cardapio