import { useRoute } from '@react-navigation/native'
import { FlatList, StyleSheet, Text } from 'react-native'

import Cesta from './componentes/Cesta'
import Topo from '../Home/components/Topo'
import useTopo from '../../hooks/useTopo'
export default function Oprodutor() {
    const route = useRoute()
    const {tituloProdutor, tituloCestas} = useTopo()
    const {nome, imagem, cestas} = route.params
    
    const TopoLista = () => {
        return <>
            <Topo />
        </>
    }
    return (
        <FlatList
            ListHeaderComponent={TopoLista}
            data={cestas}
            renderItem={({ item }) => <Cesta {...item} produtor={{ nome, imagem }}/>}
            style={estilos.lista}
        />
    )
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    }
});
