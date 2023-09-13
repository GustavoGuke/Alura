import styles from './Banner.module.css'

import circuloColorido from '../../assets/circulo_colorido.png'

const Banner = () => {
    return (

// import styles from './Banner.module.css';
// import circuloColorido from 'assets/circulo_colorido.png';
// import minhaFoto from 'assets/minha_foto.png'

// export default function Banner() {
//     return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={circuloColorido}
                    alt="Foto do Antônio Evaldo sorrindo"
                />
            </div>
        </div>
//     )
// }





        // <div className={styles.banner}>
        //     <div className={styles.apresentacao}>
        //         <h1 className={styles.titulo}>Olá Mundo</h1>

        //         <p className={styles.paragrafo}>
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus beatae dolorum impedit ducimus quae repellendus expedita architecto dolorem accusantium? Dolore soluta maxime sed cumque quos nam praesentium quia quasi.
        //         </p>
        //     </div>

        //     <div className={styles.imagens}>
        //         <img className={styles.circuloColorido} src={circuloColorido} alt="" />

        //         <img className={styles.minhaFoto} src={circuloColorido} alt="minha foto" />
        //     </div>

        // </div>
    );
}

export default Banner;
