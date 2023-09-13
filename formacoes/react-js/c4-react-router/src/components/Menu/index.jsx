import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.css'
import MenuLink from './MenuLink'

const Menu = () => {


  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to={"/"}>
          Inicio
        </MenuLink>
        <MenuLink to={"/sobremim"}>
          Sobre mim
        </MenuLink>
      </nav>
    </header>
  )
}

export default Menu