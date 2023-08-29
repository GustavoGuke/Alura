import styles from './Tags.module.scss'
import fotos from '../Galeria/fotos.json/'

const Tags = ({tags, aoFiltrar, setFotosViwe}) => {


  return (
    <div className={styles.tags}>
        <p>Navegue por Tags:</p>
        <ul className={styles.tags__lista}>
            {/* <li onClick={() => aoFiltrar("Estrelas")} >Estrelas</li> */}
            {
              tags.map((tag) => {
                return (
                  <li key={tag} onClick={() => aoFiltrar(tag)}>{tag}</li>
                )
              })
            }
            <li onClick={() => setFotosViwe(fotos)}> Todas</li>
        </ul>
    </div>
  )
}

export default Tags