import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
  },

  content: {
    // paddingTop: 100, // Adiciona espaçamento para que o conteúdo comece abaixo do header
    // paddingHorizontal: 20,
    // width: "100%",
    // backgroundColor: "green",
    flex: 1, // Garante que o conteúdo ocupe o espaço restante
  },
  contentText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
});
