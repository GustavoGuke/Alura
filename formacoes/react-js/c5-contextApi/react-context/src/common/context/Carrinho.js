import { createContext, useContext, useEffect, useState } from 'react'
import { usePagamentoContext } from './Pagamento'
import { UserContext } from './Usuario'

export const CarrinhoContext = createContext()
CarrinhoContext.displayName = "Carrinho"

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([])
  const [quantidadeProduto, setQuantidadeProduto] = useState(0)
  const [novoValorTotal, setNovoValorTotal] = useState(0)
  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho, quantidadeProduto, setQuantidadeProduto, novoValorTotal, setNovoValorTotal }}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export const UseCarrinhoContext = () => {
  const { carrinho, setCarrinho, quantidadeProduto, setQuantidadeProduto, novoValorTotal, setNovoValorTotal  } = useContext(CarrinhoContext)
  //const [produtoNoCarrinho, setProdutoNoCarrinho] = useState(0)

  const {formaPagamento} = usePagamentoContext()
  const User = useContext(UserContext)
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
    const produto = carrinho.find(itemCarrinho => itemCarrinho.id === id)
    const ultimoItem = produto.quantidade === 1
    if (ultimoItem) {
      return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(item => {
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

  const aoEfetuarCompra = () => {
    setCarrinho([])
    User.setSaldo(saldoAtual => saldoAtual - novoValorTotal)
  }

  useEffect(() => {
    const {novaQuantidadeProduto, novoTotal} = carrinho.reduce((contador, produto) => ({
      novaQuantidadeProduto: contador.novaQuantidadeProduto + produto.quantidade,
      novoTotal: contador.novoTotal + (produto.valor * produto.quantidade)
    }),{
      novaQuantidadeProduto: 0,
      novoTotal: 0
    })
    setQuantidadeProduto(novaQuantidadeProduto)
    setNovoValorTotal(novoTotal + (novoTotal * formaPagamento.juros / 100))
  }, [carrinho, setQuantidadeProduto, setNovoValorTotal, formaPagamento])

  return {
    carrinho, 
    setCarrinho, 
    aoAdicionarItem, 
    aoRemoverItem, 
    quantidadeProduto, 
    setQuantidadeProduto, 
    novoValorTotal,
    aoEfetuarCompra
  }
}