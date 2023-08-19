import './CampoTexto.css'

const CampoTexto = ({label, placeholder}) =>{
    return (
        <div className="campo-texto">
            <label  htmlFor="">{label}</label>
            <input type="text" placeholder={placeholder}/>
        </div>
    )
}
export default CampoTexto