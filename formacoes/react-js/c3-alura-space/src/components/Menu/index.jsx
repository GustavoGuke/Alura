import styles  from './Menu.module.scss'
import home from './icones/home-ativo.png'
import m_curtidas from './icones/mais-curtidas-inativo.png'
import m_vistas from './icones/mais-vistas-inativo.png'
import n_inativo from './icones/novas-inativo.png'
import Surpreendame from './icones/surpreenda-me-inativo.png'

const Menu = () => {
    return (
       <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img  src={home} alt="" />
                    <a  href="/">Inicio</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={m_curtidas} alt="" />
                    <a href="/">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={m_vistas} alt="" />
                    <a href="/">Mais Vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={n_inativo} alt="" />
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={Surpreendame} alt="" />
                    <a href="/">Surpreendame-me</a>
                </li>
            </ul>
       </nav>
    );
}

export default Menu;
