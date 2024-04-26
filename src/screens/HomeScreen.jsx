import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }){
    return (
      <View>
        <Button
          title='Ir Para as História da Mesopotamia'
          onPress={() =>
            navigation.navigate('Mesopotamia', { name: 'Mesopotamia' })}
        />
        <Text>{'\n'}</Text>
        <Button
          title='Ir Para os Produtos'
          onPress={() =>
            navigation.navigate('Produto', { name: 'Produto' })}
        />
        <Text>{'\n'}</Text>
        <Button
          title='Ir Para a Tela de Sobre'
          onPress={() =>
            navigation.navigate('Sobre', { name: 'Sobre' })}
        />
        <Text>{'\n'}</Text>
        <Button
          title='Ir Para os Contato'
          onPress={() =>
            navigation.navigate('Contato', { name: 'Contato' })}
        />
      </View>
    )
};