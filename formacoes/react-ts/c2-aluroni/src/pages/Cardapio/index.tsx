
import style from './Cardapio.module.scss'
import Logo from 'assets/images/logo.svg?react'
const Cardapio = () => {
    return (
        <main>
            <nav className={style.menu}>
                <Logo />
            </nav>
        </main>
    )
}
export default Cardapio