import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Item from './Item'


export default function Servicos() {
  const servicos = [
    {
      id: 1, nome: "Banho", preco: 79.9, descricao: "NÃO DE BANHO NO SEU GATO. MAS SE PRECISAR NÓS DAMOS.",
    },
    {
      id: 2, nome: "Vacina V4", preco: 79.9, descricao: "Uma dose da vacina V4. Seu gato precisa de duas.",
    },
    {
      id: 3, nome: "Vacina Antirrábica", preco: 99.9, descricao: "Uma dose da vacina Antirrábica. O seu gato precisa de uma por ano."
    }
  ]
  return (
    <SafeAreaView style={estilo.margemInicio}>
      <StatusBar />
      <Text>Servicos</Text>
      <FlatList 
        data={servicos}
        removeClippedSubviews={false}
        renderItem={({item}) => <Item {...item}/>}
        keyExtractor={({id}) => String(id)}
      />
    </SafeAreaView>
  )
}
const estilo = StyleSheet.create({
  margemInicio: {
    marginTop: 30,
    marginHorizontal: 20
  }
})