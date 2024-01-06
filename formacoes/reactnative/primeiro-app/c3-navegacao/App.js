import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppRouter from './src/router/AppRouter';

export default function App() {
  return (

    <SafeAreaView style={estilos.tela}>
      <StatusBar />
      <AppRouter />
    </SafeAreaView>

  )
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }
})

