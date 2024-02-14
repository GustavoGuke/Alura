import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Calendar } from 'lucide-react-native'
import { Icon} from "@gluestack-ui/themed";

import TelaPrincipal from "./TelaPrincipal";
import Consultas from "./Consultas";

const Tab = createBottomTabNavigator()

export default function Tabs() {
    return (
       <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#002851"
          },
          tabBarActiveTintColor: "#339cff",
          tabBarInactiveTintColor: "#fff"
        }}
       >
         <Tab.Screen
           name="Principal"
           component={TelaPrincipal}
           options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon as={Home} size="lg"  color={color}/>
            )
           }}
           />
           <Tab.Screen
           name="Consultas"
           component={Consultas}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon as={Calendar} size="lg" color={color} />
            )
          }}
           />
           </Tab.Navigator>
    )
}