import React from "react";
import { ScrollView, View } from "react-native";
import HeaderSpot from "../../components/HeaderSpot";
import { styles } from "./style";
import CardRecentes from "../../components/CardRecentes";
import xic from "../../../assets/xic.jpeg";

const data = [
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
        <ScrollView>
          <CardRecentes />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
