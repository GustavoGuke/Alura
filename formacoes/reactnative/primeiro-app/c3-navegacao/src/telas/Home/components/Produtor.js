import React, { useReducer, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Estrelas from '../../../components/Estrelas'
import { useNavigation } from '@react-navigation/native'
import Oprodutor from '../../Oprodutor'

export default function Produtor({ nome, imagem, distancia, estrelas, cestas }) {
    //const [selecionado, setSelecionado] = useState()
    const [selecionado, invertSelecionado] = useReducer(
        (selecionado) => !selecionado, false
    )
    const item = {nome, imagem, distancia, estrelas, cestas}
    const navega = useNavigation()
    return (
        <>
            <TouchableOpacity
                style={estilos.cartao}
                // onPress={() => setSelecionado(!selecionado)}
                onPress={invertSelecionado}
            >
                <Image style={estilos.img} source={imagem} accessibilityLabel={nome} />
                <View style={estilos.informacoes}>
                    <View>
                        <Text style={estilos.nome} >{nome}</Text>
                        <View style={estilos.viewmStack}>
                            <Estrelas
                                qtd={estrelas}
                                editavel={selecionado}
                                grande={selecionado}
                            />

                            <TouchableOpacity>
                                <AntDesign
                                    name='arrowright'
                                    size={24} 
                                    onPress={ () => navega.navigate('O Produtor', item)} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <Text style={estilos.distancia}>{distancia}</Text>
                </View>
            </TouchableOpacity>

        </>
    )
}


const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#f5f5f5',
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 6,
        flexDirection: 'row',
        elevation: 4
    },
    img: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginHorizontal: 16,
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginRight: 16,
        marginVertical: 16
    },
    nome: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 22
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19
    },
    viewmStack: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    }

})