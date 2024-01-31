import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import NotaEditor from "./src/componentes/NotaEditor"
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { Nota } from './src/componentes/Nota'
import { buscaNota, criarTabela } from "./src/services/db_notas";

export default function App() {
  const [notas, setNotas] = useState([])

  useEffect(() => {
    criarTabela()
    mostrarNota()
  },[])
  //  asyncstorage
  // async function mostrarNota() {
  //   const chaves = await AsyncStorage.getAllKeys()
  //   const todasAsNotas = await AsyncStorage.multiGet(chaves)
  //   setNotas(todasAsNotas)
  //   console.log(todasAsNotas)
  // }

  async function mostrarNota() {
    const todasAsNotas = await buscaNota()
    setNotas(todasAsNotas)
    console.log(todasAsNotas)
  }
  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        renderItem={(item) => <Nota {...item}/>}
        keyExtractor={item => item.id}
      />
      <NotaEditor mostrarNotas={mostrarNota} />
      <StatusBar backgroundColor={'green'} />
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
})

