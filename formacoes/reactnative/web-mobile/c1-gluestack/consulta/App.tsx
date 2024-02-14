import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from "@gluestack-ui/config"

import { StatusBar } from 'react-native';
import Login from './src/login';
import Cadastro from './src/cadastro';
import { AppRouter } from './src/router/AppRouter';


export default function App() {

  return (
    <GluestackUIProvider config={config}>
      <StatusBar backgroundColor='blue' />
      {/* <Login /> */}
      <AppRouter />
    </GluestackUIProvider>
  );
}


