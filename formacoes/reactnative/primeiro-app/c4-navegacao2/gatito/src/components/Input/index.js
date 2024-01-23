import React from 'react'
import { TextInput } from 'react-native'
import estilosPadrao from './estilos'

export default function Input({valor, acao, estilos}) {
    const numeroString = String(valor)

  return (
    <TextInput 
        style={[estilosPadrao.campo, estilos]}
        keyboardType='number-pad'
        selectTextOnFocus
        onChangeText={(novoValor) => acao(novoValor)}
        value={numeroString}
    />
  )
}
