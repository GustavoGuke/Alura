import Image from "next/image"
import { Avatar } from "./Avatar"
import { PostsDTO } from "../dtos/PostsDTO"

type Props = {
    post:PostsDTO
}

export const CardPost = ({ post }: Props) => {
    return (
        <article className="w-96 ">
            <header className="p-6 bg-gray-700 rounded-t-md">
                <figure className="m-0">
                    <Image className="rounded-md" src={post.cover} alt="" width={300} height={100}/>
                </figure>
            </header>
            <section className="p-6 leading-150 m-0 text-sm bg-gray-900" >
                <h2 className="text-2xl font-bold py-2">{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer className="p-6 bg-gray-900 flex justify-end">
                <Avatar imageSrc={post.author.avatar} name={post.author.name} key={post.author.id}/>
            </footer>
        </article>
    )
}