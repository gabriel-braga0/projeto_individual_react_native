import React from "react";
import { ScrollView, View } from "react-native";
import HeaderSpot from "../../components/HeaderSpot";
import { styles } from "./style";
import CardRecentes from "../../components/CardRecentes";
// import { data } from "../../Mock/CardsScroll";
import { CardsScroll } from "../../components/CardsScroll";
import { data, data2 } from "../../Mock/CardsScroll";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <HeaderSpot />
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardRecentes />
          <CardsScroll title="Suas músicas estão com saudade" data={data} />
          <CardsScroll title="Artistas recentes" data={data2} />
          <CardsScroll title="Playlists recentes" data={data} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
