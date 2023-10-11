import styles from './Card.module.css'
import favoritar from'./favorite.png'

const Card = ({id, titulo, capa}) => {
    return (
        <div className={styles.container}>
            <img className={styles.capa} src={capa} alt={titulo} />
            <h2>{titulo}</h2>
            <img src={favoritar} alt="favoritar filme" className={styles.favoritar} />
        </div>
    );
}

export default Card;
