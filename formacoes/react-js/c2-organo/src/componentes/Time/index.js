import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba'
const Time = (props) => {
    //const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ?
            <section
                className='time'
                style={{ backgroundColor: hexToRgba(props.corPrimaria, "0.6") }}>

                <input
                    onChange={evento => props.mudarCor(evento.target.value, props.id)}
                    type='color'
                    className='input-cor'
                    value={props.corPrimaria} />

                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map((colaborador, indice) => {
                        return <Colaborador
                            corDeFundo={props.corPrimaria}
                            key={indice}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            id={colaborador.id}
                            aoDeletar={props.aoDeletar}
                            />
                    })}
                </div>
            </section>
            : ''
    )
}

export default Time