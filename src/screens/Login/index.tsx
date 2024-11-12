import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import ButtonComp from "../../components/ButtonComp";
import { styles } from "./style";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <FontAwesome name="spotify" size={60} color="white" />
        <Text style={styles.homeText}>
          Milhões de músicas à sua escolha. Grátis no Spotify.
        </Text>
      </View>
      <View style={styles.buttons}>
        <ButtonComp
          bgColor="#1cd464"
          titleColor="black"
          title="Increva-se grátis"
          borderColor="#1cd464"
        />
        <ButtonComp icon="mobile" title="Continuar com um número de telefone" />
        <ButtonComp icon="google" title="Continuar com o Google" />
        <ButtonComp icon="facebook" title="Continuar com o Facebook" />
        <ButtonComp icon="apple" title="Continuar com a Apple" />
        <Button color={"white"} title="Entrar"></Button>
      </View>
    </View>
  );
};

export default Login;
