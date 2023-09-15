import PostModelo from "../../components/PostModelo";
import styles from './SobreMim.module.css'
import fotoCapa from '../../assets/sobre_mim_capa.png'

const SobreMim = () => {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre Mim'
        >
            <h3 className={styles.subtitulo}>Gustavo Siva Dev</h3>

            <img className={styles.fotoSobreMim} src={fotoCapa} alt="" />

            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, esse iste est inventore veritatis maiores non nihil exercitationem? Omnis tempora veniam cumque non vitae natus nam a recusandae accusantium. Iste!
            </p>

            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, esse iste est inventore veritatis maiores non nihil exercitationem? Omnis tempora veniam cumque non vitae natus nam a recusandae accusantium. Iste!
            </p>

            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, esse iste est inventore veritatis maiores non nihil exercitationem? Omnis tempora veniam cumque non vitae natus nam a recusandae accusantium. Iste!
            </p>

            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, esse iste est inventore veritatis maiores non nihil exercitationem? Omnis tempora veniam cumque non vitae natus nam a recusandae accusantium. Iste!
            </p>

        </PostModelo>
    );
}

export default SobreMim;
