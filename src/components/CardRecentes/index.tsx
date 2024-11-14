import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { dataPlaylists } from "../../Mock/CardsRecentes";

const CardRecentes = () => {
  return (
    <View style={styles.cardContainer}>
      <FlatList
        data={dataPlaylists}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity activeOpacity={0.5} style={styles.cardButton}>
              <Image style={styles.image} source={item.img} />
              <Text numberOfLines={2} style={styles.cardText}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CardRecentes;
