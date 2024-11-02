
import { CardPost } from "./components/Card";
import { PostsDTO } from "./dtos/PostsDTO";
import logger from "@/logger";

async function getAllPosts() {
  try {
    const response = await fetch('http://localhost:3042/posts')
    if (!response.ok) {
      logger.error('Ops, alguma coisa correu mal')
    }
    logger.info('Todos os posts foram carregados')
    return response.json()
  } catch (error) {
    logger.error('Ops, alguma coisa correu mal', error)
  }
}

export default async function Home() {
  const posts = await getAllPosts()
  return (
    <div className="flex flex-wrap gap-8 ">
      {
        posts.map((post: PostsDTO) => {
          return (
            <CardPost post={post} key={post.id}/>
          )
        })
      }
     
    </div>
  );
}
