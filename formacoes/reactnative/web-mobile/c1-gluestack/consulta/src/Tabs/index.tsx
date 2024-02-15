import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Calendar, Search, PersonStanding } from 'lucide-react-native'
import { Icon} from "@gluestack-ui/themed";

import TelaPrincipal from "./TelaPrincipal";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";

const Tab = createBottomTabNavigator()

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#002851"
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#FFF"
}

const tabs = [
  {
    name: 'Principal',
    component: TelaPrincipal,
    icon: Home
  },
  {
    name: 'Consultas',
    component: Consultas,
    icon: Calendar
  },
  {
    name: 'Explorar',
    component: Explorar,
    icon: Search
  },
  {
    name: 'Perfil',
    component: Perfil,
    icon: PersonStanding
  },
]

export default function Tabs() {
    return (
       <Tab.Navigator
        screenOptions={screenOptions}
       >
         {
          tabs.map((item) => (
            <Tab.Screen
            key={item.name}
              name={item.name}
              component={item.component}
              options={{
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <Icon as={item.icon} size="lg" color={color} />
                )
              }}
            />
          ))
         }
           </Tab.Navigator>
    )
}