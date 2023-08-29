import Tags from "../Tags"
import fotos from './fotos.json'
import styles from'./Galeria.module.scss';


const Galeria = () =>{
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela Galeria</h2>
        <Tags />
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
                    <img src="" alt="icone coração" />
                    <img src="" alt="icone modal" />
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
    </section>
  )
}

export default Galeria