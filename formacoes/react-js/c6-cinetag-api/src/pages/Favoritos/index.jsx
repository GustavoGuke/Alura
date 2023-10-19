import Banner from '@/components/Banner'
import Titulo from '@/components/Titulo'
import Card from '../../components/Card'
import { useFavoritoContext } from '../../context/Favoritos'

import styles from './Favoritos.module.css'

export const Favoritos = () => {

  const {favorito} = useFavoritoContext()
  return (
    <>
      <Banner imagem='favoritos'/>
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>

      <section className={styles.container}>
        {favorito.map( fav => (
         <Card {...fav} key={fav.id} />
        ))}
      </section>
    </>
  )
}
