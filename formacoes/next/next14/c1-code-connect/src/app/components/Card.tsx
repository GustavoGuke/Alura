import Image from "next/image"
import { Avatar } from "./Avatar"
import { PostsDTO } from "../dtos/PostsDTO"

type Props = {
    post:PostsDTO
}

export const CardPost = ({ post }: Props) => {
    return (
        <article>
            <header>
                <figure>
                    <Image src={post.cover} alt="" width={438} height={133}/>
                </figure>
            </header>
            <section>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer>
                <Avatar imageSrc={post.author.avatar} name={post.author.name} key={post.author.id}/>
            </footer>
        </article>
    )
}