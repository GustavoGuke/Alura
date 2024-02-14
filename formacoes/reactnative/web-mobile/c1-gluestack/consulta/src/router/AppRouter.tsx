import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../login';
import Cadastro from '../cadastro';
import Tabs from '../Tabs';


const Stack = createNativeStackNavigator();

export function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

