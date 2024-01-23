import React, { useState } from 'react'
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import estilos from './estilosItem'
import Input from '../../../components/Input'
import Botao from '../../../components/Botao'
export default function Item({ nome, preco, descricao }) {
  const [quantidade, setQuantidade] = useState(1)
  const [total, setTotal] = useState(preco)
  const [expandirBotao, setExpandirBotao] = useState(false)

  const invertExpandirBotao = () => {
    setExpandirBotao(!expandirBotao)
    atualizaQuantidade(1)
    setTotal(preco)
  }
  const atualizaQuantidade = (novaQuantidade) => {
    setQuantidade(novaQuantidade)
    calculaTotal(novaQuantidade)
  }

  const calculaTotal = (quantidade) => {
    setTotal(quantidade * total)
  }

  return (
    <>
      <TouchableOpacity style={estilos.informacao} onPress={invertExpandirBotao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>{
          Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
          }).format(preco)
        }</Text>
      </TouchableOpacity>

      {expandirBotao && 
        <View style={estilos.carrinho}>
          <View>
            <View style={estilos.valor}>
              <Text style={estilos.descricao}>Quantidade:</Text>
              <Input
                style={estilos.quantidade}
                valor={quantidade}
                acao={atualizaQuantidade} />
            </View>

            <View style={estilos.valor}>
              <Text style={estilos.descricao}>Preço:</Text>
              <Text style={estilos.preco}>{
                Intl.NumberFormat('pt-BR', {
                  style: 'currency', currency: 'BRL'
                }).format(total)
              }</Text>
            </View>
          </View>
          <Botao descricao="Adicionar" />
        </View> 
      } 
      <View style={estilos.divisor}/>
    </>
  )
}
