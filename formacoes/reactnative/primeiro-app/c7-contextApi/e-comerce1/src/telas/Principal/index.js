import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';
import { produtos } from './produtos';
import { estilos } from './estilos';
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext } from 'react';
import { TemaContext } from '../../context/TemaContext';
import { AutenticaContext } from '../../context/AutenticacaoContext';
import { ProdutosContext } from '../../context/ProdutosContext';


export default function Principal({navigation}) {
  const {ultimosVistos, quantidade} = useContext(ProdutosContext)

  const {temaEscolhido} = useContext(TemaContext)
  const {usuario} = useContext(AutenticaContext)

  const estilo = estilos(temaEscolhido)

  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.tituloArea}>
        <Text style={estilo.titulo}>Olá, {usuario?.nome}</Text>
        <View style={estilo.carrinhoArea}>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="shopping-cart" size={30} color="#fff" style={estilo.carrinhoIcon} />
          </TouchableOpacity>
          <View style={estilo.carrinhoQuantidadeArea}>
            <Text style={estilo.carrinhoQuantidade}>{quantidade}</Text>  
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Configurações')} style={estilo.iconArea} >
            <MaterialCommunityIcons name="settings" size={30} color="#fff" style={estilo.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={item => item.texto}
        renderItem={({ item }) => <Produto item={item} adicionar={true} />}
        style={estilo.lista}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() =>
          <View>
            {ultimosVistos.length > 0 &&
              <View style={estilo.ultimosVistos}>
                <Text style={estilo.tituloUltimosVistos}>ultimos Vistos</Text>
                <FlatList
                  data={ultimosVistos}
                  keyExtractor={item => item.texto}
                  renderItem={({ item }) => <Produto item={item} adicionar={false} />}
                  style={estilo.lista}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>}
            <Text style={[estilo.titulo, { paddingLeft: 16 }]}>Produtos</Text>
          </View>
        }
      />
    </View>
  );
}

