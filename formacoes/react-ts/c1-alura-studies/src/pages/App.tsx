import { Lista } from "../components/Lista"
import { Formulario } from "../components/formulario"
import style from './style.module.scss'


function App() {
  return (
    <div className={style.AppStyle}>
      <h1>Inicio do curso</h1>
      <Formulario />
      <Lista />
    </div>
  )
}

export default App
