import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import AvatarImage from "./../../../assets/Ashes_6_post.jpg";

import React from "react";

const HeaderSpot = () => {
  const storiesData = [
    { id: "1", name: "Tudo" },
    { id: "2", name: "Música" },
    { id: "3", name: "Podcasts" },
  ];
  return (
    <View style={styles.storiesContainer}>
      <Image
        style={styles.avatarImage}
        source={AvatarImage}
        alt="Avatar de perfil"
      />
      <FlatList
        data={storiesData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // <View style={styles.button}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.storyText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HeaderSpot;

const styles = StyleSheet.create({
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  storiesContainer: {
    // paddingVertical: 10,
    backgroundColor: "#161616",
    // backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#1cd464",
    height: "100%",
    borderRadius: 50,
    padding: 8,
  },

  storyText: {
    color: "black",
    // marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
