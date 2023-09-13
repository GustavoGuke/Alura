import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <header>
        <nav className={styles.navegacao}>
            <Link className={styles.link} to="/">
                Inicio
            </Link>
              <Link className={styles.link} to="/sobremim">
                  Sobre Mim
              </Link>
        </nav>
    </header>
  )
}

export default Menu