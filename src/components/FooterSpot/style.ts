import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  footerContainer: {
    position: "absolute",
    bottom: 15,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(40, 40, 40, 0.9)",
    height: "10%",
  },
  buttonTextActive: { color: "white" },
  button: { alignItems: "center" },
  buttonText: { color: "gray" },
});
