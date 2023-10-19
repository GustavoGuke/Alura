import Banner from '@/components/Banner'
import Titulo from '@/components/Titulo'
import Card from '../../components/Card'

export const Favoritos = () => {
  return (
    <>
      <Banner imagem='favoritos'/>
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>

      <section>
        <Card id='2' titulo='favoritos' capa='estar por vir'/>
      </section>
    </>
  )
}
