import { Button, Image, StyleSheet, Text, View } from "react-native";
import Mesopotamia from '../../assets/Mesopotamia.png'

export default function MesopotamiaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>História da Mesopotâmia</Text>
      <Text>{'\n'}</Text>
      <Image
        source={Mesopotamia}
      />
      <Text>{'\n'}</Text>
      <Text>A civilização mesopotâmica se desenvolveu no vale dos rios Tigre e Eufrates e é considerada o berço da cultura ocidental.</Text>
      <Text>Daqueles povos vêm os cálculos astronômicos, a escrita, o primeiro código, as cidades-estados e muito mais.</Text>
      <Text>A Mesopotâmia era uma região fértil que facilitava a fixação de populações.</Text>
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