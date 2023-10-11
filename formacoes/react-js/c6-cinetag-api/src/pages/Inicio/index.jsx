import Banner from "@/components/Banner";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";

const Inicio = () => {
    return (
        <>
            <Cabecalho />
            <Banner imagem='home' />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Card capa='teste' titulo='teste'/>
            <Rodape />
        </>
    );
}

export default Inicio;
