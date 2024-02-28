import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../paginas/Home";
import Login from '../paginas/Login';
import Cadastro from '../paginas/Cadastro'
import Sobre from '../paginas/Sobre'
import Tabs from '../Tabs'
import { HamburguerNav } from "./Drawer";

const Stack = createNativeStackNavigator()

export default function AppRouter(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Cadastro" component={Cadastro}/>
                <Stack.Screen name="Drawer" component={HamburguerNav} />
                {/* <Stack.Screen name="Tabs" component={Tabs} /> */}
                <Stack.Screen name="Sobre" component={Sobre}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}