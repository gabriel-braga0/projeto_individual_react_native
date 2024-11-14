import {
  Text,
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { styles } from "./style";
import { FontAwesome } from "@expo/vector-icons";

interface cardData {
  img: ImageSourcePropType;
  name: string;
  text?: string;
  playlist?: boolean;
}

export const SquareCard = ({ img, name, text, playlist }: cardData) => {
  return (
    <TouchableOpacity style={styles.card}>
      <ImageBackground
        style={playlist ? styles.img : styles.artistImg}
        source={img}
      >
        {playlist ? (
          <FontAwesome name={"spotify"} size={18} color="white" />
        ) : (
          ""
        )}
        {playlist ? <Text style={styles.cardName}>{name}</Text> : ""}
      </ImageBackground>
      <Text
        numberOfLines={2}
        style={playlist ? styles.cardText : styles.artistText}
      >
        {playlist ? text : name}
      </Text>
    </TouchableOpacity>
  );
};
