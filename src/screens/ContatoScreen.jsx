import { Button, StyleSheet, Text, View } from "react-native";

export default function ContatoScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Página de Contato</Text>
            <Text>{'\n'}</Text>
            <Text>Aqui está meu contato para informações</Text>
            <Text>Número: 47 xxxxxxxxx</Text>
            <Text>{'\n'}</Text>
            <Button
            title="Voltar Para o Home"
            onPress={() =>
              navigation.navigate('Home')
            }
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
        }
    });