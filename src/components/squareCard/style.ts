import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardText: {
    fontSize: 12,
    fontWeight: "light",
    color: "#a4a4a4",
    marginTop: 10,
    width: 150,
  },
  artistText: {
    fontSize: 12,
    fontWeight: "light",
    color: "white",
    marginTop: 1,
    width: 150,
    textAlign: "center",
  },
  card: {
    marginRight: 10,
    alignItems: "center",
  },
  imgContainer: {
    width: 150,
    height: 145,
    borderBottomWidth: 5, // Borda apenas na parte inferior
    borderColor: "red", // Cor da borda inferior
    backgroundColor: "blue", // Cor de fundo do container
  },
  img: {
    flex: 1, // Ocupa o tamanho total do container
    padding: 5,
    justifyContent: "space-between",
  },
  artistImgContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
  },
  artistImg: {
    width: 150,
    height: 150,
    padding: 5,
  },
  cardName: {
    borderLeftColor: "red",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
  },
});
