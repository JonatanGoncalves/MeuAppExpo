import { Button, StyleSheet, Text, View } from "react-native";

export default function SobreScreen({ navigation }){
    return(
        <View style={styles.container}>
            <Text>Sou a Íncrivel Página Sobre!!! 😁😁🤩</Text>
            <Text>{'\n'}</Text>
            <Button
            title="Voltar Para o Home"
            onPress={() =>
              navigation.navigate('Home')
            }
            />
        </View>
    )
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