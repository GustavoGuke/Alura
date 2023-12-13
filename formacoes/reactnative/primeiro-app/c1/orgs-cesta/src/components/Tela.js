import React from "react";
import { Image, StyleSheet, Text, Dimensions, View, Button, TouchableOpacity, ScrollView, FlatList } from "react-native";
import cesta from "../mocks/mock";

const width = Dimensions.get("screen").width

import topo from '../../assets/topo.png'
import ButtonApp from "./ButtonApp";
import Itens from "./Itens";
export default function Tela() {


    const renderItem = ({ item: { nome, imagem } }) => {
        return (
            <View key={nome} style={estilos.cestaView}>
                <Text >{nome}</Text>
                <Image source={imagem} />
            </View>
        )
    }

    return (
        <>
            <FlatList
                data={cesta.itens.lista}
                renderItem={renderItem}
                keyExtractor={({ nome }) => nome}
                ListHeaderComponent={() => {
                    return <>
                        <Image style={estilos.topo} source={topo} />
                        <Text style={estilos.titulo}>
                            {cesta.topo.titulo}
                        </Text>
                        <View style={estilos.cestaView}>
                            <Text style={estilos.nome}>{cesta.detalhes.nome}</Text>

                            <View style={estilos.viewlogoDescricao}>
                                <Image style={estilos.logoFazenda} source={cesta.detalhes.logoFazenda} />
                                <Text style={estilos.nomeFazenda}>{cesta.detalhes.nomeFazenda}</Text>
                            </View>
                            <Text style={estilos.descricao}>{cesta.detalhes.descricao}</Text>
                            <Text style={estilos.preco}>
                                {cesta.detalhes.preco}
                            </Text>
                            <ButtonApp texto={cesta.detalhes.botao} />
                        </View>
                    </>
                }}
            />
        </>
    )
}


const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 26,
        padding: 16
    },
    cestaView: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
    },
    viewlogoDescricao: {
        flexDirection: "row",
        gap: 8,
        alignItems: 'center'
    },
    logoFazenda: {
        width: 50,
        height: 50
    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },

})