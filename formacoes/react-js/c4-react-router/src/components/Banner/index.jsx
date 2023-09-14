import styles from './Banner.module.css'

import circuloColorido from '../../assets/circulo_colorido.png'

const Banner = () => {
    return (

        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá Mundo</h1>

                <p className={styles.paragrafo}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus beatae dolorum impedit ducimus quae repellendus expedita architecto dolorem accusantium? Dolore soluta maxime sed cumque quos nam praesentium quia quasi.
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} alt="" />

                <img className={styles.minhaFoto} src={circuloColorido} alt="minha foto" />
            </div>

        </div>
    );
}

export default Banner;
