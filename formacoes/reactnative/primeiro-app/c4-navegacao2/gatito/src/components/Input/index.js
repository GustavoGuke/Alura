import React from 'react'
import { TextInput } from 'react-native'

export default function Input({valor, acao}) {
    const numeroString = String(valor)

  return (
    <TextInput 
        keyboardType='number-pad'
        selectTextOnFocus
        onChangeText={(novoValor) => acao(novoValor)}
        value={numeroString}
    />
  )
}
