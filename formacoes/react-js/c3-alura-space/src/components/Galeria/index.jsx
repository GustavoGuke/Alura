import { useState } from "react";
import Tags from "../Tags"
import Card from "./Card/Card";
import fotos from './fotos.json'
import styles from'./Galeria.module.scss';


const Galeria = () =>{
  const [fotosView, setFotosViwe] = useState(fotos)
  const tags = [...new Set(fotos.map((foto) => foto.tag))]

  const aoFiltrar = (tag) => {
    const filtro = fotos.filter((foto) => foto.tag === tag )
    setFotosViwe(filtro)
    }
  
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela Galeria</h2>
        <Tags tags={tags} aoFiltrar={aoFiltrar} setFotosViwe={setFotosViwe}/>
       <Card fotos={fotosView} styles={styles}/>
    </section>
  )
}

export default Galeria