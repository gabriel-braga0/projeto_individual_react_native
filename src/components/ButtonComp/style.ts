import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 50,
    borderWidth: 1,
  },
  iconContainer: {
    position: "absolute",
    left: 20,
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
});
