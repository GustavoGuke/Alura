import styles from './Tags.module.scss'

const Tags = () => {
  return (
    <div className={styles.tags}>
        <p>Navegue por Tags:</p>
        <ul className={styles.tags__lista}>
            <li>Estrelas</li>
            <li>Galáxia</li>
            <li>Luas</li>
            <li>Planetas</li>
        </ul>
    </div>
  )
}

export default Tags