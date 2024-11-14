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
    width: "47%",
    marginHorizontal: 6,
    marginTop: 8,
    backgroundColor: "#333333",
  },
  cardButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  cardContainer: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 15,
  },
  cardText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    width: "60%",
  },
});
