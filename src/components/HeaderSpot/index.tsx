import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import AvatarImage from "./../../../assets/Ashes_6_post.jpg";

import React, { useState } from "react";
import { styles } from "./style";

const HeaderSpot = () => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const headerData = [
    {
      id: "1",
      name: "Tudo",
      active: active1,
      function() {
        setActive1(true);
        setActive2(false);
        setActive3(false);
      },
    },
    {
      id: "2",
      name: "Música",
      active: active2,
      function() {
        setActive1(false);
        setActive2(true);
        setActive3(false);
      },
    },
    {
      id: "3",
      name: "Podcasts",
      active: active3,
      function() {
        setActive1(false);
        setActive2(false);
        setActive3(true);
      },
    },
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
          <TouchableOpacity
            onPress={() => item.function()}
            style={!item.active ? styles.button : styles.activeButton}
          >
            <Text
              style={!item.active ? styles.headerText : styles.headerTextActive}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HeaderSpot;
