import styles from './Banner.module.scss'
import banner from  './banner.png'
const Banner = () => {
    return (
        <div className={styles.banner__imagem}>
            <h1>A Galeria mais completa do espaço </h1>
            <img src={banner} alt="A imagem da Terra vista do espaço" />
        </div>
    );
}

export default Banner;
