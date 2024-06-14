import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, RefreshControl, Alert } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';
import Produto from '../../componentes/Produtos';
import estilos from './estilos';
import { auth } from '../../config/firebase';

import { BotaoProduto } from '../../componentes/BotaoProduto';
import { deletarProduto, mostraEmTempoReal, pegarProdutos } from '../../servicos/firestore';
import { TouchableOpacity } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function Principal({ navigation }) {
  const usuario = auth.currentUser;
  const [produtos, setProdutos] = useState([])
  const [refreshing, setRefreshing] = useState(false);

  function deslogar() {
    auth.signOut();
    navigation.replace('Login');
  }

  function deletar(id) {

    Alert.alert("Deletar Produto", "deseja realmente deletar este produto", [
      {
        text: "Sim", onPress: async () => { 
          await deletarProduto(id) 
          //await mostarProdutos()
        }
      },
      { text: "Não", onPress: () => {} },
    ])
  }

  async function mostarProdutos() {
    setRefreshing(true)
    const produtosFirestore = await pegarProdutos()
    setProdutos(produtosFirestore)
    setRefreshing(false)
  }

  function tempoReal(){
    mostraEmTempoReal(setProdutos)
  }

  useEffect(() => {
    mostarProdutos()
    tempoReal()
  }, [])
  return (
    <View style={estilos.container}>
      <Cabecalho logout={deslogar} />
      <Text style={estilos.texto}>Usuário: {usuario.email}</Text>

      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (

          <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                navigation.navigate("Produtos", item)
              }}
            >
              <Produto nome={item.nome} preco={item.preco} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deletar(item.id)}>
              
              <MaterialIcons style={{ paddingRight: 35 }} name='delete' size={32} />
            </TouchableOpacity>
          </View>
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
