import styles from './Cabecalho.module.css'
import logo from '../../../public/imagens/logo.png'
import { Link } from 'react-router-dom';
import CabecalhoLink from '../CabecalhoLink';

const Cabecalho = () => {
    return (
     <header className={styles.cabecalho}>
        <Link to='./'>
            <img src={logo} alt="logo" />
        </Link>

        <nav>
            <CabecalhoLink url='./'>Home</CabecalhoLink>
            <CabecalhoLink url='./Favoritos'>Favoritos</CabecalhoLink>
        </nav>
     </header>
     
    );
}

export default Cabecalho;
