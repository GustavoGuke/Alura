import { View, Text, Image, StyleSheet } from "react-native";
import logo from '../../../assets/logo.png'
import useTopo from "../../../hooks/useTopo";

export default function Topo({melhoresProdutores}) {
    // hook feito 
    const { boasVindas, legenda, legendaMelhoresProdutores } = useTopo()
    return (
        <View style={estilos.topo}>
            <Image source={logo} style={estilos.imagem} />
            <Text style={estilos.boasVindas}>{melhoresProdutores ? "" : boasVindas}</Text>
            <Text style={estilos.legenda}>{melhoresProdutores ? legendaMelhoresProdutores : legenda}</Text>
        </View>    
    )
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        paddingVertical: 50,
        padding: 16,
    },
    compra: {
        backgroundColor: '#EAF5F3',
        padding: 16,
    },
    compraMensagem: {
        fontSize: 16,
        lineHeight: 26,
        color: '#464646',
    },
    imagem: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646'
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3',
    }
});

const estilo = StyleSheet.create({
    topo: {
        backgroundColor: '#f6f6f6',
        paddingVertical: 50,
        paddingHorizontal: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    textoBoasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26
    }
})