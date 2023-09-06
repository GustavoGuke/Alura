import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"

import imagemBanner from './assets/banner.png'
import fotos from './fotos.json'
import { useState } from "react"
import ModalZoom from "./componentes/ModalZoom"


const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width:100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px;
  max-width:100%;
  margin:0 auto;
`
const MainContainer = styled.main`
  display:flex;
  gap:24px;
`
const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const Container = styled.div`
  /* Estilos para todas as telas */
  width: 100%;

  @media (min-width: 768px) {
    /* Estilos para telas a partir de 768px */
    width: 80%;
  }

  @media (min-width: 1200px) {
    /* Estilos para telas a partir de 1200px */
    width: 60%;
  }
`;


function App() {

  const [fotosGaleria, setFotosGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const aoFavoritar = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosGaleria(fotosGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
      }
    }))
  }

  const aoSelecionarTag = (tag) => {
    if(tag === 0){
      setFotosGaleria(fotos)
      return
    }
    const filtroPorTag = fotos.filter( fotoTag => fotoTag.tagId === tag)
    setFotosGaleria(filtroPorTag)
  }

  const aoBuscarFotoInput = (input) => {
    const filtroInput = fotos.filter( foto => {
      return foto.titulo.toLocaleLowerCase().includes(input)
    })
    setFotosGaleria(filtroInput)
  }
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho aoBuscarFotoInput={aoBuscarFotoInput}/>
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              backgroundImage={imagemBanner}
              texto="A galeria mais completa de fotos do espaço!" />
            <Galeria
              fotos={fotosGaleria}
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              aoFavoritar={aoFavoritar}
              aoSelecionarTag={aoSelecionarTag} />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} aoFechar={() => setFotoSelecionada(null)} aoFavoritar={aoFavoritar} />
    </FundoGradiente>
  )
}

export default App
