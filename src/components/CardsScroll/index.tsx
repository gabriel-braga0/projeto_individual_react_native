import {
  FlatList,
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import { SquareCard } from "../squareCard";

interface PropsApi {
  id: number;
  name: string;
  text?: string;
  img: ImageSourcePropType;
  playlist?: boolean;
}

interface ArrayPropsApi {
  data: PropsApi[];
  title: string;
}

export const CardsScroll = ({ data, title }: ArrayPropsApi) => {
  return (
    <View>
      <Text style={styles.titleCards}>{title}</Text>
      <View style={styles.cardContainer}>
        <FlatList
          nestedScrollEnabled={true}
          data={data}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <SquareCard
              playlist={item.playlist}
              img={item.img}
              name={item.name}
              text={item.text}
            />
          )}
        />
      </View>
    </View>
  );
};
