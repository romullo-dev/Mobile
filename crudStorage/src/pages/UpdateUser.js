import React, { useState } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from "react-native";

import Mytext from "./components/Mytext";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";
import AsyncStorage from '@react-native-async-storage/async-storage';


  // Variáveis useState
  
const UpdateUser = ({ navigation }) => {
  const [filtro, setFiltro] = useState(""); 

  const [codigo, setCodigo] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  // Registrar usuário
  async function viewUsuario() {
    try {
      const chave = filtro;
      const dados = await AsyncStorage.getItem(chave);
      const dados_usuario = JSON.parse(dados);
      setCodigo(filtro);
      setNome(dados_usuario.nome)
      setTelefone(dados_usuario.telefone);
      setEndereco(dados_usuario.endereco);
    } catch (error) {
      alert("Erro ao consultar");
    }
  }

  async function alterarUsuario() {
    try {
      const chave = filtro;
      const dados = JSON.stringify({ nome, telefone, endereco });
      await AsyncStorage.mergeItem(chave, dados);
      alert('Alterado com sucesso');
      navigation.navigate ('HomeScreen');
    } catch (error) {
      alert ('erro');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: "space-between" }}
            >
              <Mytext text="Filtro de Usuário" />
              <Mytextinput
            placeholder="Entre com o Código do Usuário"
            style={{ padding: 10 }}
            value={filtro}
            onChangeText={setFiltro}

          />
              <Mybutton title="Buscar Usuário"  customClick={viewUsuario}/>
              <Mytextinput
                placeholder="Entre com o Nome"
                style={{ padding: 10 }}
                value={nome}
                onChangeText={setNome}

              />
              <Mytextinput
                placeholder="Entre com o Telefone"
                maxLength={10}
                style={{ padding: 10 }}
                keyboardType="numeric"
                value={telefone}
                onChangeText={setTelefone}


              />
              <Mytextinput
                placeholder="Entre com o Endereço"
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: "top", padding: 10 }}
                value = {endereco}
                onChangeText={setEndereco}

              />
              <Mybutton title="Atualizar Usuário" customClick={alterarUsuario} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateUser;
