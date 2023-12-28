import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
// import { carregaProdutores } from '../../../services/carregaDados'
import Topo from './Topo'
import Produtor from './Produtor'
import useProdutores from '../../../hooks/useProdutores'

export default function Produtores() {
    // const [produtoresTitulo, setProdutoresTitulo] = useState('')
    // const [produtoresLista, setProdutoresLista] = useState([])
    // useEffect(() => {
    //     const res = carregaProdutores()
    //     setProdutoresTitulo(res.titulo)
    //     setProdutoresLista(res.lista)
    // }, [])

    // usando hook feito em curso
    const [produtoresTitulo, produtoresLista] = useProdutores()

    const TituloLista = () => {
        return (
            <>
                <Topo />
                <Text style={estilos.titulo}>{produtoresTitulo}</Text>
            </>
        )
    }
  return (
    <FlatList 
        data={produtoresLista}
        renderItem={({ item }) => <Produtor {...item }/>}
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
