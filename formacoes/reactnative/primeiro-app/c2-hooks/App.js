import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/telas';

export default function App() {
  return (

    <SafeAreaView style={estilos.tela}>
      <StatusBar />
      <Home />
    </SafeAreaView>

  )
}

const estilos = StyleSheet.create({
    tela: {
      flex: 1
    }
})

