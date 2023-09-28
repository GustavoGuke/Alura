import { Container } from './styles';
import { memo, useContext, useState } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { CarrinhoContext } from 'common/context/Carrinho';


function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {

  const {carrinho, setCarrinho} = useContext(CarrinhoContext)
  const [quantidadeAdicionada, setQuantidadeAdicionada] = useState()


  const aoAdicionarItem = (novoProduto) => {
    const temProduto = carrinho.some(itemCarrinho => itemCarrinho.id === novoProduto.id)
    if(!temProduto) {
      novoProduto.quantidade = 1
      setQuantidadeAdicionada(novoProduto.quantidade)
      return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto])
    }
   setCarrinho(carrinhoAnterior => carrinhoAnterior.map(itemCarrinho => {
    if(itemCarrinho.id === novoProduto.id) itemCarrinho.quantidade += 1
    
    setQuantidadeAdicionada(itemCarrinho.quantidade)
    return itemCarrinho
  }))
  }
  return (
      <Container>
        <div>
          <img
            src={`/assets/${foto}.png`}
            alt={`foto de ${nome}`}
          />
          <p>
            {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <IconButton
            color="secondary"
          >
            <RemoveIcon />
          </IconButton>
            {quantidadeAdicionada}
          <IconButton>
            <AddIcon onClick={() => aoAdicionarItem({nome, foto, id, valor})}/>
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto)