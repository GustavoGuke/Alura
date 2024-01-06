import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../telas';
import Oprodutor from '../telas/Oprodutor';

const Stack = createNativeStackNavigator();

export default function OprodutorRouter({componente = Home}) {
  return (
      <Stack.Navigator>
          <Stack.Screen name="Home screen" component={componente} />
          <Stack.Screen name="O Produtor" component={Oprodutor} />
      </Stack.Navigator>
  )
}
