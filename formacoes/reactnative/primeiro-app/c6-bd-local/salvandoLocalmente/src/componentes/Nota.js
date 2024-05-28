import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Nota({ item, setNotaSelacionada }) {
  const categorias = { Pessoal: "#FF924F", Outros: "#00911F", Trabalho: "#2F71EB" }
  const urgencias = { Urgente: "#FF924F", Esperar: "#00911F", Pouco: "#2F71EB" }
  const style = styleFunction(categorias[item.categoria], urgencias[item.urgencia])

  return (
    <TouchableOpacity
      style={style.cartao}
      onPress={() => setNotaSelacionada(item)}
      >
      <Text style={style.titulo}>{item.titulo}</Text>
      <Text style={style.categoria}>{item.categoria}</Text>
      <Text style={style.urgenciaa}>{item.urgencia}</Text>
      <Text style={style.texto} numberOfLines={5}>{item.texto}</Text>
    </TouchableOpacity>
  )
}

const styleFunction = (cor,urgenciaas) => StyleSheet.create({
  cartao: {
    borderRadius: 8,
    backgroundColor: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderTopWidth: 5,
    borderColor: cor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
  },
  categoria: {
    borderRadius: 4,
    backgroundColor: cor,
    padding: 4,
    color: "#FAFAFA",
    alignSelf: "flex-start",
  },
  texto: {
    lineHeight: 28,
  },
  urgenciaa: {
    borderRadius: 4,
    backgroundColor: urgenciaas,
    padding: 4,
    color: "#FAFAFA",
    alignSelf: "flex-start",
  },
})
