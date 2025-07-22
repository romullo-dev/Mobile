import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { FlatList, Text, View, SafeAreaView, StyleSheet, Alert } from "react-native";

const ViewAllUser = () => {
  const [todosUsuarios, setTodosUsuarios] = useState([]);

  async function allUser() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const resultado = await AsyncStorage.multiGet(keys);

      const usuariosFormatados = resultado.map(([key, value]) => {
        const usuario = JSON.parse(value);
        return {
          id: key,
          nome: usuario.nome,
          telefone: usuario.telefone,
          endereco: usuario.endereco,
        };
      });

      setTodosUsuarios(usuariosFormatados);
    } catch (error) {
      Alert.alert("Erro", "Erro ao carregar os usuários cadastrados!");
    }
  }

  useEffect(() => {
    allUser();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
          style={{ marginTop: 30 }}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          data={todosUsuarios}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 15 }}>
              <Text>id: {item.id}</Text>
              <Text>nome: {item.nome}</Text>
              <Text>telefone: {item.telefone}</Text>
              <Text>endereço: {item.endereco}</Text>
              <Text>---------------------------------</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textheader: {
    color: "#111",
    fontSize: 12,
    fontWeight: "700",
  },
  textbottom: {
    color: "#111",
    fontSize: 18,
  },
});

export default ViewAllUser;
