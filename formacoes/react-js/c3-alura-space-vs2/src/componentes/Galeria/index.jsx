import { styled } from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";



const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`
const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({fotos = [], aoFotoSelecionada, aoFavoritar, aoSelecionarTag}) => {
    return (
        <>
            <Tags aoSelecionarTag={aoSelecionarTag}/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela Galeria</Titulo>
                    {/* {fotos.map(foto => foto.titulo)} */}
                   <ImagensContainer>
                        {fotos.map(foto => <Imagem 
                        key={foto.id} 
                        foto={foto}
                        aoFotoSelecionada={aoFotoSelecionada}
                        aoFavoritar={aoFavoritar}/>)}
                   </ImagensContainer>

                </SecaoFluida>
                <Populares />

            </GaleriaContainer>
        </>
    );
}

export default Galeria;
