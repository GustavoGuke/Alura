import { useFavoritoContext } from '../../context/Favoritos';
import styles from './Card.module.css'
import favoritar from'./favorite.png'
import desfavoritar from './favorite_outline.png'

const Card = ({id, titulo, capa}) => {
    const {favorito, adicionarFavorito} = useFavoritoContext()

    // busca no array se tem algum id true
    const ehFavorito = favorito.some( fav => fav.id === id)

    // caso tenha algum id true muda a imagem para favorito
    const icone = ehFavorito ? favoritar: desfavoritar
    return (
        <div className={styles.container}>
            <img className={styles.capa} src={capa} alt={titulo} />
            <h2>{titulo}</h2>
            <img 
            src={icone} 
            alt="favoritar filme" 
            className={styles.favoritar} 
            onClick={() => {adicionarFavorito({id, titulo, capa})}}/>
        </div>
    );
}

export default Card;
