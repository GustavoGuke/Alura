import Banner from "../components/Banner";
import Cabecalho from "../components/Cabecalho";
import Menu from "../components/Menu";
import Rodape from "../components/Rodape";
import styles from './Paginainicial.module.scss'

const PaginaInicial = () => {
    return (
    <>
        <Cabecalho/>
        <main >
            <section className={styles.principal}>
                <Menu />
                <Banner />
            </section>
        </main>
        <Rodape />
    </>
    
    );
}

export default PaginaInicial;
