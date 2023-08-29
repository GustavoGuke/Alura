import styles  from './Menu.module.scss'
import icones from './icones.json'


const Menu = () => {
    return (
       <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {icones.map((icone)=> {
                    return (
                        <li key={icone.id} className={styles.menu__item}>
                            <img src={icone.path} alt={icone.alt} />
                            <a href="/">{icone.link}</a>
                        </li>
                    )
                })}
                {/* <li className={styles.menu__item}>
                    <img  src={home} alt="" />
                    <a  href="/">Inicio</a>
                </li> */}
            </ul>
       </nav>
    );
}

export default Menu;
