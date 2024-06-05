import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import estilos from './estilos';
import { logar } from '../../services/reqFirebase';
import { auth } from '../../config/firebase';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // persistencia logar automatico
  useEffect(() => {
    const usuarioJaLogou = auth.onAuthStateChanged( usuario => {
      if(usuario){
        navigation.replace("Principal")
      }
    })
    return () => usuarioJaLogou()
  }, [])

  async function aoRealizarLogin(){
    const resultado = await logar(email, senha)
    console.log(resultado)

    if(resultado == 'sucesso'){
      navigation.replace('Principal')
    } else{
      Alert.alert('email ou senha estão errados')
    }
  }
  return (
    <View style={estilos.container}>
      <EntradaTexto 
        label="E-mail"
        value={email}
        onChangeText={texto => setEmail(texto)}
      />
      <EntradaTexto
        label="Senha"
        value={senha}
        onChangeText={texto => setSenha(texto)}
        secureTextEntry
      />
      
      <Botao onPress={() => aoRealizarLogin()}>LOGAR</Botao>
      <Botao 
        onPress={() => { navigation.navigate('Cadastro') }}
      >
        CADASTRAR USUÁRIO
      </Botao>
    </View>
  );
}
