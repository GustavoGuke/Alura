import { Cronomentro } from "../components/Cronometro"
import { Lista } from "../components/Lista"
import { Formulario } from "../components/formulario"
import style from './style.module.scss'


function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronomentro />
    </div>
  )
}

export default App
