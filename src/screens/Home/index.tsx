import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import HeaderSpot from "../../components/HeaderSpot";
import { styles } from "./style";
import xic from "../../../assets/xic.jpeg";

const dataPlaylists = [
  { id: "1", name: "play1", img: xic },
  { id: "2", name: "play2", img: xic },
  { id: "3", name: "play3", img: xic },
  { id: "4", name: "play4", img: xic },
  { id: "5", name: "play4", img: xic },
  { id: "6", name: "play4", img: xic },
  { id: "7", name: "play4", img: xic },
  { id: "8", name: "play4", img: xic },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <HeaderSpot />
        <View style={styles.cardContainer}>
          <FlatList
            data={dataPlaylists}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <TouchableOpacity style={styles.cardButton}>
                  <Image style={styles.image} source={item.img} />
                  <Text style={styles.cardText}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
            numColumns={2}
          />
          {/* <Text style={styles.contentText}>Suas músicas estão com saudade</Text> */}
        </View>
      </View>
    </View>
  );
};

export default Home;
