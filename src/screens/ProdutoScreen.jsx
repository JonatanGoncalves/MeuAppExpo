import { StyleSheet, Text, View } from "react-native";

export default function ProdutoScreen({ navigation, route }) {
  const nome = route.params.nome ? route.params.nome : "";

  return (
    <View style={styles.container}>
      <Text>{nome ? nome : ""}</Text>
      <Text>Produto revolucionário</Text>
      <Text>Este é um produto incrível</Text>
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