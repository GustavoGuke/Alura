import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListaPets from '../paginas/ListaPets'
import Mensagem from '../paginas/Mensagem'
import { Image } from "react-native";

const Tab = createBottomTabNavigator()

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name='ListaPets'
                component={ListaPets}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/pets-green.png')} style={{ width: 24, height: 24 }} />
                    )
                }}
            />

            <Tab.Screen
                name='Mensagem'
                component={Mensagem}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/mensagens.png')} style= {{width: 24, height: 24}}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}