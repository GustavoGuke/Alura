import { createContext, useContext, useState } from 'react'

export const CarrinhoContext = createContext()
CarrinhoContext.displayName = "Carrinho"

export const CarrinhoProvider = ({children}) => {
    const [carrinho, setCarrinho] = useState([])
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const UseCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext)
    //const [produtoNoCarrinho, setProdutoNoCarrinho] = useState(0)

  const mudarQuantidade = (id, quantidade) => {
    return carrinho.map(itemCarrinho => {
      if (itemCarrinho.id === id) itemCarrinho.quantidade += quantidade
      return itemCarrinho
    })
  }
  const aoAdicionarItem = (novoProduto) => {
    const temProduto = carrinho.some(itemCarrinho => itemCarrinho.id === novoProduto.id)
    if (!temProduto) {
      novoProduto.quantidade = 1
      //setProdutoNoCarrinho(novoProduto.quantidade)
      return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto])
    }

    setCarrinho(mudarQuantidade(novoProduto.id, 1))
    // setCarrinho(carrinhoAnterior => carrinhoAnterior.map(itemCarrinho => {
    //   if (itemCarrinho.id === novoProduto.id) itemCarrinho.quantidade += 1
    //   //setProdutoNoCarrinho(itemCarrinho.quantidade)
    //   return itemCarrinho
    // }))
  }

  const aoRemoverItem = (id) => {
    const produto = carrinho.find( itemCarrinho => itemCarrinho.id === id)
    const ultimoItem = produto.quantidade === 1
    if(ultimoItem){
      return setCarrinho( carrinhoAnterior => carrinhoAnterior.filter( item => {
        return item.id !== id
      }))
    }
    setCarrinho(mudarQuantidade(id, -1))
    // setCarrinho(carrinhoAnterior => carrinhoAnterior.map(itemCarrinho => {
    //   if (itemCarrinho.id === id) itemCarrinho.quantidade -= 1
    //   //setProdutoNoCarrinho(itemCarrinho.quantidade)
    //   return itemCarrinho
    // }))
  }

    return {
        carrinho,setCarrinho,aoAdicionarItem, aoRemoverItem
    }
}