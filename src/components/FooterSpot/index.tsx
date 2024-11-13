import { TouchableOpacity, View } from "react-native";
import {
  FontAwesome,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { styles } from "./style";

export const FooterSpot = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerContainer}>
        <TouchableOpacity>
          <Foundation name="home" size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="search" size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="bookshelf" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
