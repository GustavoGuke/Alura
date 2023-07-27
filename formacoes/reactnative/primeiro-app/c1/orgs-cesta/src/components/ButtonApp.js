import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function ButtonApp({texto}) {
  return (
      <TouchableOpacity style={estilos.botao}>
          <Text style={estilos.textoBotao}>
              Comprar
          </Text>
      </TouchableOpacity>
  )
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 26,
        fontWeight: 'bold'
    }
})