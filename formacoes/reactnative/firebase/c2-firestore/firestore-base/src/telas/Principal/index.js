import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';
import Produto from '../../componentes/Produtos';
import estilos from './estilos';
import { auth, db } from '../../config/firebase';
import { collection, addDoc } from "firebase/firestore";
import { BotaoProduto } from '../../componentes/BotaoProduto';



export default function Principal({ navigation }) {
  const usuario = auth.currentUser;

  function deslogar() {
    auth.signOut();
    navigation.replace('Login');
  }
  // useEffect(() => {
  //   // Add a new document in collection "cities"
  //   async function criarProduto() {
  //     await addDoc(collection(db, "curso_firebase_alura"), {
  //       name: "Los Angeles",
  //       state: "CA",
  //       country: "USA"
  //     });
  //   }


  // }, [])
  return (
    <View style={estilos.container}>
      <Cabecalho logout={deslogar} />
      <Text style={estilos.texto}>Usuário: {usuario.email}</Text>

      <Produto nome="Tênis" preco="200,00" />
      <Produto nome="Camisa" preco="100,00" />
      <Produto nome="Suplementos" preco="150,00" />

      <BotaoProduto onPress={() => {navigation.navigate("Produtos")}} />
    </View>
  );
}
