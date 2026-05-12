
import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

export default function Home() {

  return (

    <View style={styles.container}>

      <Image
        source={require("../../assets/minilogo_safe.svg")}
        style={styles.logo}
      />

      <Text style={styles.titulo}>
        Bem-vindo ao SAFE
      </Text>

      <Text style={styles.subtitulo}>
        Sua área principal do aplicativo
      </Text>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",

    justifyContent: "center",
    alignItems: "center",

    padding: 20,
  },

  logo: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    marginBottom: 30,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#274C77",
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },

});
