import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';
import Produto from '../../componentes/Produtos';
import estilos from './estilos';
import { auth } from '../../config/firebase';

import { BotaoProduto } from '../../componentes/BotaoProduto';
import { pegarProdutos } from '../../servicos/firestore';
import Botao from '../../componentes/Botao';
export default function Principal({ navigation }) {
  const usuario = auth.currentUser;
  const [produtos, setProdutos] = useState([])
  const [refreshing, setRefreshing] = React.useState(false);

  function deslogar() {
    auth.signOut();
    navigation.replace('Login');
  }

  async function mostarProdutos() {
    setRefreshing(true)
    const produtosFirestore = await pegarProdutos()
    //console.log(produtosFirestore)
    setProdutos(produtosFirestore)
    setRefreshing(false)
  }

  useEffect(() => {
   
    mostarProdutos()
  }, [])
  return (
    <View style={estilos.container}>
      <Cabecalho logout={deslogar} />
      <Text style={estilos.texto}>Usuário: {usuario.email}</Text>

      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Produto nome={item.nome} preco={item.preco} />
        )}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing}
            onRefresh={mostarProdutos}
          />
        }
        showsVerticalScrollIndicator={false}  
      />


      <BotaoProduto onPress={() => { navigation.navigate("Produtos") }} />

    </View>
  );
}
