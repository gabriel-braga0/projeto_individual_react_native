import React from "react";
import { ScrollView, View } from "react-native";
import HeaderSpot from "../../components/HeaderSpot";
import { styles } from "./style";
import CardRecentes from "../../components/CardRecentes";
import { CardsScroll } from "../../components/CardsScroll";
import { dataMixes, dataArtist } from "../../Mock/CardsScroll";
import { FooterSpot } from "../../components/FooterSpot";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <HeaderSpot />

        <ScrollView showsVerticalScrollIndicator={false}>
          <CardRecentes />
          <CardsScroll title="Seus mixes mais ouvidos" data={dataMixes} />
          <CardsScroll title="Artistas recentes" data={dataArtist} />
          <CardsScroll
            title="Suas músicas estão com saudade"
            data={dataMixes}
          />
          <View style={styles.space}></View>
        </ScrollView>

        <FooterSpot />
      </View>
    </View>
  );
};

export default Home;
