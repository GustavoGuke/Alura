import { Route, Routes, useParams } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import PostModelo from '../../components/PostModelo';
import posts from '../../json/posts.json'
import './Post.css'
import styles from './Post.module.css'
import NaoEncontrada from '../NaoEncontrada';
import PaginaPrincipal from '../PaginaPrincipal';
import PostCard from '../../components/PostCard';

const Post = () => {
    const parametro = useParams()
    const postFiltro = posts.find(post => post.id === Number(parametro.id))

    if (!postFiltro) {
        return <NaoEncontrada />
    }

    const postRecomendado = posts
        .filter((post) => post.id !== Number(parametro.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)
    return (
        // rotas descedentes jeitos de ultizar  por children  ou aninhar dentro de routes
        <PaginaPrincipal>
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


                <h2 className={styles.tituloOutrosPosts}>
                    Posts Recomendados
                </h2>
                <ul className={styles.postsRecomendados}>
                    {postRecomendado.map(post => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
            </PostModelo>
        </PaginaPrincipal>

        // <Routes>  // rotas descedentes  um dos jeitos de ultizar
        //     <Route path='*' element={<PaginaPrincipal />}>
        //         <Route index element={
        //             <PostModelo
        //             key={postFiltro.id}
        //             fotoCapa={`/posts/${postFiltro.id}/capa.png`}
        //             titulo={postFiltro.titulo}
        //         >
        //             <div className='post-markdown-container'>
        //                 <ReactMarkdown>
        //                     {postFiltro.texto}
        //                 </ReactMarkdown>
        //             </div>
        //         </PostModelo>
        //         }/>
        //     </Route>
        // </Routes>
    );
}
export default Post;
