import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../paginas/Home";
import Login from '../paginas/Login';
import Cadastro from '../paginas/Cadastro'

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}