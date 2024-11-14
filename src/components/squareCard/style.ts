import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardText: {
    fontSize: 12,
    fontWeight: "light",
    color: "#a4a4a4",
    marginTop: 1,
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
  img: {
    width: 150,
    height: 150,
    padding: 5,
    justifyContent: "space-between",
  },
  artistImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
    padding: 5,
  },
  cardName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
  },
});
