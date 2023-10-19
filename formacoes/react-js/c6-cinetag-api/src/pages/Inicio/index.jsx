import Banner from "@/components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import videos from '@/json/db.json'
import style from './Inicio.module.css'


const Inicio = () => {
    return (
        <>
            
            <Banner imagem='home' />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={style.container}>
                {
                    videos.map((video) => (
                        <Card {...video} key={video.id} />
                    ))
                }
            </section>
           
        </>
    );
}

export default Inicio;
