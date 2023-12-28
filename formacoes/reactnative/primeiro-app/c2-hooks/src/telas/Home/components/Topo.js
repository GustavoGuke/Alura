import { View, Text, Image, StyleSheet } from "react-native";
import logo from '../../../assets/logo.png'
import useTopo from "../../../hooks/useTopo";
export default function Topo() {
    // hook feito 
    const [topoBoasVindas, topoLegendas] = useTopo()
    return (
        <View style={estilos.topo}>
            <Image source={logo} style={estilos.imagem} />
            <Text style={estilos.textoBoasVindas}>{topoBoasVindas}</Text>
            <Text style={estilos.legenda}>{topoLegendas}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
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