import {
  Text,
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
  View,
} from "react-native";
import React from "react";
import { styles } from "./style";
import { FontAwesome } from "@expo/vector-icons";

interface cardData {
  img: ImageSourcePropType;
  name: string;
  text?: string;
  playlist?: boolean;
  color?: string;
}

export const SquareCard = ({ img, name, text, playlist, color }: cardData) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View
        style={
          playlist
            ? color
              ? [styles.imgContainerBorder, { borderColor: color }]
              : styles.imgContainer
            : styles.artistImgContainer
        }
      >
        <ImageBackground style={styles.img} source={img}>
          {playlist && <FontAwesome name={"spotify"} size={18} color="white" />}
          {playlist &&
            (color ? (
              <View style={[styles.textLeft, { borderLeftColor: color }]}>
                <Text style={styles.cardName}>{name}</Text>
              </View>
            ) : (
              <View style={styles.textLeft}>
                <Text style={styles.cardName}>{name}</Text>
              </View>
            ))}
        </ImageBackground>
      </View>
      <Text
        numberOfLines={2}
        style={playlist ? styles.cardText : styles.artistText}
      >
        {playlist ? text : name}
      </Text>
    </TouchableOpacity>
  );
};
