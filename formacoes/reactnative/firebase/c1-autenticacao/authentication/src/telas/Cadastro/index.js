import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';

import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import estilos from './estilos';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { cadastrar } from '../../services/reqFirebase';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/config';


export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [statusErro, setStatusErro] = useState('')
  const [mensagemError, setmensagemError] = useState('')

  async function aoRealizarcadastro() {

    if (email == '') {
      setmensagemError('Preencha o campo')
      setStatusErro('email')
    } else if (senha == '') {
      setmensagemError('Preencha o campo')
      setStatusErro('senha')
    } else if (confirmaSenha == '') {
      setmensagemError('Preencha o campo')
      setStatusErro('confirmaSenha')
    } else {
      const resultado = await cadastrar(email, senha)

      if (resultado == 'sucesso') {
        Alert.alert("usuário cadastrado com sucesso")
        setEmail('')
        setSenha('')
        setConfirmaSenha('')
      }
      else {
        Alert.alert(resultado)
        setStatusErro('')
        setmensagemError('')
      }
      
      
    }

  }

  // useEffect(() => {
    
  //   createUserWithEmailAndPassword(auth, 'teste3@email.com', '1234567')
  //     .then((userCredential) => {
  //       // Signed in 
  //       const user = userCredential.user;
  //       console.log(user)
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage)
  //       // ..
  //     });
  // })

  return (
    <View style={estilos.container}>
      <EntradaTexto
        label="E-mail"
        value={email}
        onChangeText={texto => setEmail(texto)}
        error={statusErro == 'email'}
        messageError={mensagemError}
      />
      <EntradaTexto
        label="Senha"
        value={senha}
        onChangeText={texto => setSenha(texto)}
        secureTextEntry
        error={statusErro == 'senha'}
        messageError={mensagemError}
      />

      <EntradaTexto
        label="Confirmar Senha"
        value={confirmaSenha}
        onChangeText={texto => setConfirmaSenha(texto)}
        secureTextEntry
        error={statusErro == 'confirmaSenha'}
        messageError={mensagemError}
      />

      <Botao onPress={() => aoRealizarcadastro()}>CADASTRAR</Botao>

    </View>
  );
}
