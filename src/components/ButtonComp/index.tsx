import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style";

interface PropsButton {
  title: string;
  bgColor?: string;
  titleColor?: string;
  borderColor?: string;
  icon?: keyof typeof FontAwesome.glyphMap;
}

const ButtonComp = ({
  title,
  bgColor,
  titleColor,
  borderColor,
  icon,
}: PropsButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        styles.button,
        {
          backgroundColor: bgColor ? bgColor : "#121212",
          borderColor: borderColor ? borderColor : "white",
        },
      ]}
      onPress={() => alert('Botão "' + title + '" pressionado')}
    >
      {icon && (
        <View style={styles.iconContainer}>
          <FontAwesome name={icon} size={18} color="white" />
        </View>
      )}
      <Text
        style={[
          styles.text,
          {
            color: titleColor ? titleColor : "white",
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;
