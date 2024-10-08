import Titulo from '@/components/Titulo';
import styles from './Player.module.css';
import videos from '@/json/db.json';
import Banner from '@/components/Banner';
import { useParams } from 'react-router-dom';
import NaoEncontrada from '../NaoEncontrada';

function Player() {
    const parametros = useParams()
    const video = videos.find(video => video.id === Number(parametros.id))

    if(!video){
        return <NaoEncontrada />
    }
    return (
        <>
            <Banner imagem='player' />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </section>
        </>
    )
}

export default Player;