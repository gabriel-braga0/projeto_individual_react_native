import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import HeaderSpot from "../../components/HeaderSpot";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <HeaderSpot />
        <Text style={styles.contentText}>Conteúdo adicional aqui</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ajuste flex para ocupar a tela inteira
    backgroundColor: "#161616",
  },

  content: {
    paddingTop: 100, // Adiciona espaçamento para que o conteúdo comece abaixo do header
    paddingHorizontal: 20,
    flex: 1, // Garante que o conteúdo ocupe o espaço restante
  },
  contentText: {
    fontSize: 16,
    color: "white",
    marginTop: 20,
  },
});
