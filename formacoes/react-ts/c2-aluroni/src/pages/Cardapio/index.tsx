
import { useState } from 'react'
import Buscador from './Buscador'
import style from './Cardapio.module.scss'
import Logo from 'assets/images/logo.svg?react'
const Cardapio = () => {
    const [busca, setBusca] = useState("")
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
            <section>
                <h3>Cardapio</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
            </section>
        </main>
    )
}
export default Cardapio