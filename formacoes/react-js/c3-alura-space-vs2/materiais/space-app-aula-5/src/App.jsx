import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import bannerBackground from './assets/banner.png'
import Galeria from "./componentes/Galeria"

import fotosGaleria from './fotos.json'
// import { useState } from "react"
import { useEffect, useState } from "react"
import ModalZoom from "./componentes/ModalZoom"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainEstilizado= styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`


function App() {
  const [fotos, setFotos] = useState(fotosGaleria)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  const [fotoComZoom, setFotoComZoom] = useState(null)

  useEffect(() => {
    const fotosFiltradas = fotosGaleria.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotos(fotosFiltradas)
  }, [filtro, tag])
  const [modalAberta, setModalAberta] = useState(false)

  const aoFecharModal = () => {
    setModalAberta(false)
    const element = document.getElementById(`foto-${fotoComZoom.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setFotoComZoom(null)
  }

  const abrirModal = (foto) => {
    setModalAberta(true)
    setFotoComZoom(foto)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  const alternarFavorito = (foto) => {
    setFotos(fotos.map(f => {
      if (foto.id === fotoComZoom?.id) {
        setFotoComZoom({
          ...fotoComZoom,
          favorita: !fotoComZoom.favorita
        })
      }
      return {
        ...f,
        favorita: f.id === foto.id ? !f.favorita : f.favorita
      }
    }));

  };

  return (
    <>
      <FundoGradiente>
        <EstilosGlobais />
        <Cabecalho filtro={filtro} setFiltro={setFiltro} />
        <MainEstilizado>
          <BarraLateral />
          <Container>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria
              alternarFavorito={alternarFavorito}
              aoZoomSolicitado={abrirModal}
              fotos={fotos}
              setTag={setTag}
            />
          </Container>
        </MainEstilizado>
      </FundoGradiente>
      {/* <Rodape /> */}
      <ModalZoom
        aberta={modalAberta && fotoComZoom}
        foto={fotoComZoom}
        aoFecharModal={aoFecharModal}
        alternarFavorito={alternarFavorito}
      />
    </>
  )
}

export default App


// const App = () => {
//   const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
//   const [fotoSelecionada, setFotoSelecionada] = useState(null)

//   const aoAlternarFavorito = (foto) => {
//     if (foto.id === fotoSelecionada?.id) {
//       setFotoSelecionada({
//         ...fotoSelecionada,
//         favorita: !fotoSelecionada.favorita
//       })
//     }
//     setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
//       return {
//         ...fotoDaGaleria,
//         favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
//       }
//     }))
//   }
  
//   return (
//     <FundoGradiente>
//       <EstilosGlobais />
//       <AppContainer>
//         <Cabecalho />
//         <MainContainer>
//           <BarraLateral />
//           <ConteudoGaleria>
//             <Banner
//               texto="A galeria mais completa de fotos do espaço!"
//               backgroundImage={bannerBackground}
//             />
//             <Galeria 
//               aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
//               aoAlternarFavorito={aoAlternarFavorito}
//               fotos={fotosDaGaleria}
//             />
//           </ConteudoGaleria>
//         </MainContainer>
//       </AppContainer>
//       <ModalZoom 
//         foto={fotoSelecionada}
//         aoFechar={() => setFotoSelecionada(null)}
//         aoAlternarFavorito={aoAlternarFavorito}
//       />
//     </FundoGradiente>
//   )
// }

// export default App
