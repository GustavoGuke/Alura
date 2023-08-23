import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import hexToRgba from 'hex-to-rgba'
const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar }) => {
    return (<div className='colaborador'>
        <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(nome)} />
        <div className='cabecalho' style={{ backgroundColor: hexToRgba(corDeFundo) }}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            {/* <h5>{cargo}</h5> */}
        </div>
    </div>)
}

export default Colaborador