import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Topo from './Topo'
import Produtor from './Produtor'
import useProdutores from '../../../hooks/useProdutores'
import useTopo from '../../../hooks/useTopo'

export default function Produtores({ melhoresProdutores }) {
  
    const produtoresLista = useProdutores(melhoresProdutores)
    const {tituloProdutores} = useTopo()

    const TituloLista = () => {
        return (
            <>
                <Topo />
                <Text style={estilos.titulo}>{tituloProdutores}</Text>
            </>
        )
    }
  return (
    <FlatList 
        data={produtoresLista}
        renderItem={({ item }) => <Produtor {...item } />}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={TituloLista}
    />
  )
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})
