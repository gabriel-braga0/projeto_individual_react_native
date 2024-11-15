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
  imgContainerBorder: {
    width: 150,
    height: 150,
    borderBottomWidth: 5,
    backgroundColor: "#333333",
  },
  imgContainer: {
    width: 150,
    height: 150,
    backgroundColor: "#333333",
  },
  img: {
    flex: 1,
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
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
  },
  textLeft: {
    borderLeftColor: "transparent",
    borderLeftWidth: 5,
    paddingLeft: 5,
  },
});
