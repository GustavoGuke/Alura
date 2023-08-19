import './CampoTexto.css'

const CampoTexto = ({label, placeholder, obrigatorio, valor, alterado}) =>{

    const handleValor = (e) => {
        alterado(e.target.value)
    }
    return (
        <div className="campo-texto">
            <label htmlFor="">{label}</label>
            <input value={valor} onChange={handleValor} required={obrigatorio} type="text" placeholder={placeholder}/>
        </div>
    )
}
export default CampoTexto