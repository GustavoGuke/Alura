import { Botao } from "../Botao"


export const Formulario = () => {
  return (
    <>
        <form>
            <div>
                <label htmlFor="tarefa">Nova tarefa</label>
                <input type="text"
                name="tarefa"
                id="tarefa"
                placeholder="Vai estudar o que"
                required />
            </div>

            <div>
                <label htmlFor="tempo">Tempo</label>
                <input 
                type="time"
                id="tempo"
                name="tempo" />
            </div>
            <Botao />
        </form>
    </>
  )
}
