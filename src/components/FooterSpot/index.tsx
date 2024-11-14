import { Text, TouchableOpacity, View } from "react-native";
import {
  Foundation,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { styles } from "./style";

export const FooterSpot = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.button}>
          <Foundation name="home" size={24} color="#fff" />
          <Text style={styles.buttonTextActive}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <AntDesign name="search1" size={24} color="gray" />
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="bookshelf" size={24} color="gray" />
          <Text numberOfLines={1} style={[styles.buttonText, { width: 40 }]}>
            Biblioteca
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
