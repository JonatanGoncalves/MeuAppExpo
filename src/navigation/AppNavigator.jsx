import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MesopotamiaScreen from "../screens/MesopotamiaScreen"
import SobreScreen from "../screens/SobreScreen";
import ContatoScreen from "../screens/ContatoScreen";
import ProdutoScreen from "../screens/ProdutoScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "Minha tela Inicial Íncrivel"
                    }} />
                <Stack.Screen
                    name="Mesopotamia"
                    component={MesopotamiaScreen}
                    options={{
                        title: "Tela Falando Sobre a Mesopotamia"
                    }} />
                <Stack.Screen
                    name="Produto"
                    component={ProdutoScreen}
                    options={{
                        title: "Produto",
                    }}
                />
                <Stack.Screen
                    name="Sobre"
                    component={SobreScreen}
                    options={{
                        title: "Tela Falando Sobre meu Projeto"
                    }} />
                <Stack.Screen
                    name="Contato"
                    component={ContatoScreen}
                    options={{
                        title: "Tela Onde Possuirá meu Contato"
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
