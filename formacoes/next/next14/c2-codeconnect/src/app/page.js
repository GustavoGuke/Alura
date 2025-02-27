import { CardPost } from "@/components/CardPost"
import logger from "@/logger"
import styles from './page.module.css'
import Link from "next/link"
import db from "../../prisma/db"

async function getAllPosts (page) {
  try {
    const posts = await db.post.findMany({
      include: {
        author: true, 
      }
    })
    return {
      data: posts,
      prev: page > 1 ? page - 1 : null,
      next: posts.length > 0 ? page + 1 : null
    }

  } catch (error) {
    logger.error(error)
    return {
      data: [],
      prev: null,
      next: null
    }
  }}

export default async function Home({ searchParams }) {
  const currentPage = parseInt(searchParams.page || 1)
  const searchTerm = searchParams?.q
  const { data: posts, prev, next } = await getAllPosts(currentPage, searchTerm)
  return (
    <main className={styles.grid}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
      <div className={styles.links}>
        {prev && (
          <Link href={{ pathname: "/", query: { page: prev, q: searchTerm } }}>
            Página anterior
          </Link>
        )}
        {next && (
          <Link href={{ pathname: "/", query: { page: next, q: searchTerm } }}>
            Próxima página
          </Link>
        )}
      </div>
    </main>
  );
}
