import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( (colaborador,indice )=> {
                    return <Colaborador 
                    corDeFundo={props.corPrimaria} 
                    key={indice} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    aoDeletar={props.aoDeletar} /> 
                })}
            </div>
        </section> 
        : ''
    )
}

export default Time