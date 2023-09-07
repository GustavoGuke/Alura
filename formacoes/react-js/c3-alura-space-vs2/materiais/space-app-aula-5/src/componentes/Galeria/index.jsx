import { styled } from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
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

const Galeria = ({ fotos = [], setTag, aoZoomSolicitado, alternarFavorito }) => {

    return (
        <>
            <Titulo>Navegue pela galeria</Titulo>
            <GaleriaContainer>
                <SecaoFluida>
                    <Tags setTag={setTag} />
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem
                            alternarFavorito={alternarFavorito}
                            aoPedirZoom={aoZoomSolicitado}
                            key={foto.id}
                            foto={foto} />)
                        }
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria
