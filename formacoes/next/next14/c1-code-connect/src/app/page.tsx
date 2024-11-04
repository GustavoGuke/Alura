
import { CardPost } from "./components/Card";
import { PostsDTO } from "./dtos/PostsDTO";
import logger from "@/logger";

async function getAllPosts(page:number) {
  try {
    const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
    if (!response.ok) {
      logger.error('Ops, alguma coisa correu mal')
      return []
    }
    logger.info('Todos os posts foram carregados')
    return response.json()
  } catch (error) {
    logger.error('Ops, alguma coisa correu mal', error)
  }
}

export default async function Home() {
  const {data} = await getAllPosts(1)
  return (
    <div className="flex flex-wrap gap-8 ">
      {
        data.map((post: PostsDTO) => {
          return (
            <CardPost post={post} key={post.id}/>
          )
        })
      }
     
    </div>
  );
}
