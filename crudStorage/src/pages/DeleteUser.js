import React, { useState } from "react";
import { View, Alert, SafeAreaView } from "react-native";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DeleteUser = ({ navigation }) => {
  const [chave, setChave] = useState("");

  // Excluir usuário
  async function deleteUsuario() {
    try {
      if (!chave) {
        Alert.alert("Aviso", "Digite a chave do usuário para excluir");
        return;
      }

      const dados = await AsyncStorage.getItem(chave);
      if (!dados) {
        Alert.alert("Aviso", "Usuário não encontrado");
        return;
      }

      await AsyncStorage.removeItem(chave);
      Alert.alert("Sucesso", "Usuário excluído com sucesso!");
      navigation.navigate("HomeScreen");
    } catch (error) {
      Alert.alert("Erro", "Erro ao excluir o usuário");
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}>
        <Mytextinput
          placeholder="Entre com a chave do usuário"
          style={{ padding: 10 }}
          value={chave}
          onChangeText={(texto) => setChave(texto)}
        />
        <Mybutton title="Excluir Usuário" customClick={deleteUsuario} />
      </View>
    </SafeAreaView>
  );
};

export default DeleteUser;
