import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import funcaoEstilosBotao from './estilosBotao'

export default function Botao({pequeno = false, invertido = false, descricao, acao}) {
    const estilosPadrao = funcaoEstilosBotao(pequeno, invertido)
  return (
    <TouchableOpacity onPress={acao} style={[estilosPadrao.botao]}>
        <Text style={[estilosPadrao.valor]}>{descricao}</Text>
    </TouchableOpacity>
  )
}
