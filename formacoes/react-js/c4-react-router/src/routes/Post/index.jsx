import { useParams } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import PostModelo from '../../components/PostModelo';
import posts from '../../json/posts.json'
import './Post.css'

const Post = () => {
    const parametro = useParams()
    const postFiltro = posts.find(post => post.id === Number(parametro.id))
    if(!postFiltro){
       return <h1>Post não encontrado</h1>
    }
    return (
        <PostModelo
            key={postFiltro.id}
            fotoCapa={`/posts/${postFiltro.id}/capa.png`}
            titulo={postFiltro.titulo}
        >
            <div className='post-markdown-container'>
                <ReactMarkdown>
                    {postFiltro.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    );
}
export default Post;
