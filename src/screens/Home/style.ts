import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Ajuste flex para ocupar a tela inteira
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
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  card: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 5,
    width: "48%",
    marginRight: 5,
    marginTop: 5,
    backgroundColor: "#302e2e",
  },
  cardButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    width: "100%",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  cardText: {
    color: "white",
    fontWeight: "bold",
  },
});
