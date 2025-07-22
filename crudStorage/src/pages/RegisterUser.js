import React, { useState } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  Alert,
} from "react-native";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const RegisterUser = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  async function registrarUsuario() {
    try {
      const chave = ('1');//uuid.v4(); // Gera um ID único
      const dados = JSON.stringify({ nome, telefone, endereco });
      await AsyncStorage.setItem(chave, dados);
      Alert.alert("Sucesso", "Salvo com sucesso!");
      navigation.navigate("HomeScreen");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar.");
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: "space-between" }}
          >
            <Mytextinput
              placeholder="Entre com o Nome"
              style={{ padding: 10 }}
              value={nome}
              onChangeText={setNome}
            />
            <Mytextinput
              placeholder="Entre com o Telefone"
              maxLength={10}
              keyboardType="numeric"
              style={{ padding: 10 }}
              value={telefone}
              onChangeText={setTelefone}
            />
            <Mytextinput
              placeholder="Entre com o Endereço"
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{ textAlignVertical: "top", padding: 10 }}
              value={endereco}
              onChangeText={setEndereco}
            />
            <Mybutton title="Salvar" customClick={registrarUsuario} />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RegisterUser;
