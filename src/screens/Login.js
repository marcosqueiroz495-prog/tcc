
import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";

import {
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function fazerLogin() {

    if (email === "" || senha === "") {

      Alert.alert(
        "Erro",
        "Preencha todos os campos!"
      );

      return;
    }

    Alert.alert(
      "Login realizado!",
      "Sistema funcionando corretamente."
    );
  }

  return (

    <SafeAreaView style={styles.container}>

      {/* Barra superior */}
      <View style={styles.topBar}>

        <Image
          source={require("../../assets/minilogo_safe.svg")}
          style={styles.logo}
        />

      </View>

      {/* Card principal */}
      <View style={styles.card}>

        <Text style={styles.title}>
          Login
        </Text>

        <Text style={styles.subtitle}>
          Entre com sua conta para continuar
        </Text>

        {/* Ícone */}
        <View style={styles.avatarContainer}>

          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/5087/5087579.png",
            }}
            style={styles.avatar}
          />

        </View>

        {/* Email */}
        <View style={styles.inputContainer}>

          <MaterialIcons
            name="email"
            size={20}
            color="#274C77"
          />

          <TextInput
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
          />

        </View>

        {/* Senha */}
        <View style={styles.inputContainer}>

          <Feather
            name="lock"
            size={20}
            color="#274C77"
          />

          <TextInput
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            style={styles.input}
            secureTextEntry
          />

        </View>

        {/* Botão login */}
        <TouchableOpacity
          style={styles.botao}
          onPress={fazerLogin}
        >

          <Text style={styles.botaoTexto}
          onPress={() => navigation.navigate("Home")}
          >
            Entrar
          </Text>

        </TouchableOpacity>

        {/* Botão cadastro */}
        <TouchableOpacity
          style={styles.botaoCadastro}
          onPress={() => navigation.navigate("Cadastro")}
        >

          <Text style={styles.botaoCadastroTexto}>
            Não possui conta? Cadastre-se
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  topBar: {
    height: 80,
    backgroundColor: "#274C77",
    justifyContent: "center",
    paddingLeft: 15,
  },

  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    alignSelf: "center"
  },

  card: {
    margin: 20,
    backgroundColor: "#e9e9e9",
    borderRadius: 12,
    padding: 20,

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#274C77",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#555",
    marginBottom: 30,
  },

  avatarContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  avatar: {
    width: 110,
    height: 110,
    tintColor: "#8f8989",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#fff",

    borderWidth: 1,
    borderColor: "#ccc",

    borderRadius: 8,

    paddingHorizontal: 12,

    marginBottom: 18,

    height: 50,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },

  botao: {
    height: 52,

    backgroundColor: "#274C77",

    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 10,
  },

  botaoTexto: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  botaoCadastro: {
    marginTop: 20,
    alignItems: "center",
  },

  botaoCadastroTexto: {
    color: "#274C77",
    fontSize: 15,
    fontWeight: "600",
  },

});