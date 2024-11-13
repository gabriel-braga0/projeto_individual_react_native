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
import { styles } from "./style";

const HeaderSpot = () => {
  const headerData = [
    { id: "1", name: "Tudo" },
    { id: "2", name: "Música" },
    { id: "3", name: "Podcasts" },
  ];
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.avatarImage}
        source={AvatarImage}
        alt="Avatar de perfil"
      />
      <FlatList
        data={headerData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // <View style={styles.button}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.headerText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HeaderSpot;
