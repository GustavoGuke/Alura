import PostCard from '../../components/PostCard'
import styles from './Inicio.module.css'
import posts from '../../json/posts.json'

const Inicio = () => {
  return (
    <ul className={styles.posts}>
      {posts.map(post => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  )
}

export default Inicio