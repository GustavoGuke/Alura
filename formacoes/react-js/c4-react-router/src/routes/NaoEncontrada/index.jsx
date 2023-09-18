import styles from './NaoEncontrada.module.css'
import erro404 from '../../assets/erro_404.png'
import Botao from '../../components/Botao';
import { useNavigate } from 'react-router-dom';

const NaoEncontrada = () => {

    const navegar = useNavigate()
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}> “Ops! Página não encontrada”</h1>

                <p className={styles.paragrafo}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt asperiores sequi nam molestiae! Nobis enim iusto impedit quo magnam voluptatum vel dicta, accusantium expedita odio maxime soluta quas ea accusamus!
                </p>

                <div className={styles.botaoContainer} onClick={() => navegar(-1)}>

                    <Botao tamanho="lg">Voltar</Botao>
                    <img src={erro404} alt="cachorro" className={styles.imagemCachorro} />

                </div>
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    );
}
export default NaoEncontrada;
