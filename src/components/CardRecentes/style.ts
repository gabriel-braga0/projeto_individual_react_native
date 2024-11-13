import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
