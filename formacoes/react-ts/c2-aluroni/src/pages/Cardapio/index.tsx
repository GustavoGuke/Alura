import { Botao } from '../../components/Botao'
import style from './Cardapio.module.scss'
const Cardapio = () => {
    return (
        <main>
            <nav className={style.menu}>Aluroni</nav>
            <Botao />
        </main>
    )
}
export default Cardapio