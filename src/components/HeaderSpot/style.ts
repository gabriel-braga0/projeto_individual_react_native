import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  headerContainer: {
    flex: 0.3,
    position: "absolute", // Fixa o header no topo
    top: 0,
    left: 0,
    right: 0,
    height: "15%", // Defina uma altura adequada
    backgroundColor: "#121212",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 10,
    paddingBottom: 20,
    zIndex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    backgroundColor: "#333333",
    height: 40,
    borderRadius: 50,
    padding: 8,
  },
  headerText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  activeButton: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    backgroundColor: "#1cd464",
    height: 40,
    borderRadius: 50,
    padding: 8,
  },

  headerTextActive: {
    color: "black",
    fontSize: 12,
    textAlign: "center",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
