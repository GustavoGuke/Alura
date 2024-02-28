import { createDrawerNavigator } from "@react-navigation/drawer"
import Tabs from "../../Tabs"
import Perfil from '../../paginas/Perfil'
import Home from '../../paginas/Home'

const Drawer = createDrawerNavigator()

export function HamburguerNav() {
    return (
        <Drawer.Navigator 
            screenOptions={{
                drawerStyle: {backgroundColor: '#36D6AD'},
                drawerLabelStyle: {
                    color: '#FFF',
                    fontSize: 14,
                    fontFamily: 'PoppinsRegular',
                    fontWeight: '400',
                    lineHeight: 20
                }
            }}
        >
            <Drawer.Screen
                name="Tabs"
                options={{
                    drawerLabel: 'Pets para adoção'
                }}
                component={Tabs} />
            <Drawer.Screen
                name='Perfil'
                component={Perfil} />
            <Drawer.Screen
                name='Sair'
                component={Home} />
        </Drawer.Navigator>
    )
}