import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import hexToRgba from 'hex-to-rgba'

const Colaborador = ({ nome, imagem, cargo, id, favorito, corDeFundo, aoDeletar, aoFavoritar }) => {

    const favoritar = () => {
        aoFavoritar(id)
    }

    const propsFavorito ={
        size:25,
        onClick:favoritar
    }
    return (<div className='colaborador'>
        <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(id)} />

        <div className='cabecalho' style={{ backgroundColor: hexToRgba(corDeFundo) }}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <div className='favorito'>
                {favorito
                    ? <AiFillHeart {...propsFavorito} color="red"/>
                    : <AiOutlineHeart {...propsFavorito} />}
            </div>
        </div>
    </div>)
}

export default Colaborador