import favorito from './favorito.png'
import open from './open.png'

const Card = ({fotos, styles}) => {
    return (
        <ul className={styles.galeria__cards}>
        {fotos.map(foto => {
          return (
            <li key={foto.id} className={styles.galeria__card}>
              <img 
              className={styles.galeria__imagem} 
              src={foto.imagem} 
              alt={foto.titulo}  />
              <p className={styles.galeria__descricao}>{foto.titulo}</p>
              <div>
                <p>{foto.creditos}</p>
                <span>
                  <img src={favorito} alt="icone modal" />
                  <img src={open} alt="icone coração" />
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    );
}

export default Card;
