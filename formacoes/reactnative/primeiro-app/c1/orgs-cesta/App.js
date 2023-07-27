import { StatusBar, SafeAreaView,  StyleSheet, Text, View } from 'react-native';

import Tela from './src/components/Tela';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Tela/>
    </SafeAreaView>
  );
}

