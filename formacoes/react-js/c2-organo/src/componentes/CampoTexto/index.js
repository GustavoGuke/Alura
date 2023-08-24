import './CampoTexto.css'

const CampoTexto = ({ label, valor, obrigatorio, placeholder, type = "text", aoAlterado }) => {



    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo-texto campo-${type}`}>
            <label>
                {label}
            </label>
            <input
                type={type}
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto