import './ListaSuspensa.css'

export const ListaSuspensa = ({label, itens, valor, alterado}) => {

    const handleValor = (e) => {
        alterado(e.target.value)
    }

    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select value={valor} onChange={handleValor}>
                {itens.map(item => <option  key={item}>{item}</option>)}
            </select>
        </div>
    )
}