import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import xic from "../../../assets/xic.jpeg";
import { styles } from "./style";

const CardRecentes = () => {
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
  return (
    <View style={styles.cardContainer}>
      <FlatList
        data={dataPlaylists}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity activeOpacity={0.5} style={styles.cardButton}>
              <Image style={styles.image} source={item.img} />
              <Text style={styles.cardText}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CardRecentes;
