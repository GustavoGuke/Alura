import './CampoTexto.css'

const CampoTexto = ({label, placeholder, obrigatorio}) =>{

    const handleValor = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="campo-texto">
            <label htmlFor="">{label}</label>
            <input onChange={handleValor} required={obrigatorio} type="text" placeholder={placeholder}/>
        </div>
    )
}
export default CampoTexto