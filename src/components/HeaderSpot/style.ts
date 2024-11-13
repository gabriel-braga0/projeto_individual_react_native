import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  headerContainer: {
    flex: 0.15,
    // paddingVertical: 10,
    backgroundColor: "#161616",
    // backgroundColor: "white",
    // marginTop: "10%",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 10,
    paddingBottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    backgroundColor: "#1cd464",
    height: 40,
    borderRadius: 50,
    padding: 8,
  },

  headerText: {
    color: "black",
    fontSize: 12,
    textAlign: "center",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
