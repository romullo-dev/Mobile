import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import Mytext from "./components/Mytext";
import Mytextinput from "./components/Mytextinput";
import Mybutton from "./components/Mybutton";
import AsyncStorage from "@react-native-async-storage/async-storage";


const ViewUser = () => {
    // Variáveis useState
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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <Mytext text="Filtro de Usuário" />
          <Mytextinput
            placeholder="Entre com o Código do Usuário"
            style={{ padding: 10 }}
            value={filtro}
            onChangeText={setFiltro}

          />
          <Mybutton title="Buscar Usuário"  customClick={viewUsuario}/>
          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10,
            }}
          >
            <Text>Código :{codigo} </Text>
            <Text>Nome : {nome}</Text>
            <Text>Telefone : {telefone}</Text>
            <Text>Endereço : {endereco}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewUser;