import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import NotaEditor from "./src/componentes/NotaEditor"

export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      <NotaEditor/>
      <StatusBar backgroundColor={'green'}/>
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

