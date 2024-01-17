import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import estilos from './estilosItem'
import Input from '../../../components/Input'
export default function Item({ nome, preco, descricao }) {
  const [quantidade, setQuantidade] = useState(0)
  return (
    <>
      <View style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>{preco}</Text>
      </View>

      <View style={estilos.carrinho}>
        <View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Quantidade:</Text>
            <Input valor={quantidade} acao={setQuantidade}/>
          </View>

          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Preço:</Text>
            <Text style={estilos.preco}>0</Text>
          </View>  
        </View> 
        <Button title='Adicionar'/>
      </View>  
      <View style={estilos.divisor}/>
    </>
  )
}
