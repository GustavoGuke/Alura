import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaPrincipal from "./TelaPrincipal";
import Consultas from "./Consultas";

const Tab = createBottomTabNavigator()

export default function Tabs() {
    return (
       <Tab.Navigator>
         <Tab.Screen
           name="Principal"
           component={TelaPrincipal}
           />
           <Tab.Screen
           name="Consultas"
           component={Consultas}
           />
           </Tab.Navigator>
    )
}