import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import OprodutorRouter from "./OprodutorRouter";
import MelhoresRouter from "./MelhoresRouter";


const Tab = createBottomTabNavigator()

export default function AppRouter() {
  return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name='Home' component={OprodutorRouter} />
              <Tab.Screen name='Melhores produtores' component={MelhoresRouter} />
          </Tab.Navigator>
      </NavigationContainer>
  )
}
