import React from 'react'

import cesta from "../mocks/mock";
import { Text , Image, View, FlatList} from 'react-native';
import { StyleSheet } from 'react-native';

export default function Itens() {

    const renderItem = ({item: {nome, imagem}}) =>{
        return <View key={nome}>
            <Text >{nome}</Text>
            <Image source={imagem} />
        </View>
    }
  return (
    <>
        <Text>
            {cesta.itens.titulo}
        </Text>

        <FlatList 
              data={cesta.itens.lista}
              renderItem={renderItem}
              keyExtractor={({nome}) => nome}
        />
        {/* {
            cesta.itens.lista.map(({nome, imagem}) => {
                return <View key={nome}>
                    <Text >{nome}</Text>
                    <Image source={imagem}/>
                </View>
                https://github.com/alura-cursos/react-native-comecando-do-zero-/tree/projeto-final
            })
        } */}
    </>
  )
}

const estilo = StyleSheet.create({
    imgFruta: {
        width: 50,
        height: 50
    },
})