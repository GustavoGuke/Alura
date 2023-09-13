import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css'

const MenuLink = ({ children, to }) => {

    // pegar a pagina ativa uselocation usar no componente Link
    //const localizacao = useLocation()
    //const estiloLink = `${styles.link} ${localizacao.pathname == to ? styles.linkDestacado : ""}`

    const estiloNavLink = ({isActive}) => `${styles.link} ${ isActive? styles.linkDestacado: ""}`
    return (
        <NavLink className={estiloNavLink} to={to}>
            {children}
        </NavLink>
    );
}

export default MenuLink;
