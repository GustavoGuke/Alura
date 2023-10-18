import Banner from "@/components/Banner";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import videos from '@/json/db.json'
import style from './Inicio.module.css'
import capa1 from "@/assets/imagens/capa/Rectangle 4-1.png"

const Inicio = () => {
    return (
        <>
            <Cabecalho />
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
            <Rodape />
        </>
    );
}

export default Inicio;
