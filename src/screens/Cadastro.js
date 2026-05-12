import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

import { FontAwesome, Feather, MaterialIcons } from "@expo/vector-icons";

export default function CadastroPerfil({ navigation }) {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");

  return (
    <SafeAreaView style={styles.container}>

      {/* Barra superior */}
      <View style={styles.topBar}>
        <Image
          source={require("../../assets/minilogo_safe.svg")}
          style={styles.img}
        />
      </View>

      {/* Card */}
      <View style={styles.card}>

        <Text style={styles.title}>
          Cadastro de Perfil
        </Text>

        <Text style={styles.subtitle}>
          Preencha as caixas de texto com as suas informações
        </Text>

        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            }}
            style={styles.avatar}
          />

          {/* olha isso dps https://www.youtube.com/watch?v=uX5E_QFJubU */}
        </View>

        {/* Nome */}
        <View style={styles.inputContainer}>
          <FontAwesome
            name="user-circle-o"
            size={18}
            color="#000"
          />

          <TextInput
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <MaterialIcons
            name="email"
            size={18}
            color="#000"
          />

          <TextInput
            placeholder="Email"
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
            size={18}
            color="#000"
          />

          <TextInput
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            style={styles.input}
            secureTextEntry
          />
        </View>

        {/* Telefone */}
        <View style={styles.inputContainer}>
          <Feather
            name="phone"
            size={18}
            color="#000"
          />

          <TextInput
            placeholder="(99) 99999-9999"
            value={telefone}
            onChangeText={(text) => {

              let cleaned = text.replace(/\D/g, "");

              cleaned = cleaned.slice(0, 11);

              if (cleaned.length <= 2) {
                cleaned = `(${cleaned}`;
              }

              else if (cleaned.length <= 7) {
                cleaned = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
              }

              else {
                cleaned =
                  `(${cleaned.slice(0, 2)}) ` +
                  `${cleaned.slice(2, 7)}-` +
                  `${cleaned.slice(7, 11)}`;
              }

              setTelefone(cleaned);
            }}
            style={styles.input}
            keyboardType="numeric"
            maxLength={15}
          />
        </View>

        {/* Botões */}
        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Escolha")}
          >
            <Text style={styles.buttonText}>
              Cancelar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>
              Cadastrar
            </Text>
          </TouchableOpacity>

        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  img: {
    height: 70,
    width: 70,
    marginLeft: 10,
    resizeMode: "contain",
    alignSelf: "center"
  },

  topBar: {
    height: 70,
    backgroundColor: "#274C77",
    justifyContent: "center",
  },

  card: {
    margin: 15,
    backgroundColor: "#e9e9e9",
    borderRadius: 4,
    padding: 15,
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "500",
  },

  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: "#222",
    textAlign: "center",
  },

  avatarContainer: {
    alignItems: "center",
    marginBottom: 25,
  },

  avatar: {
    width: 120,
    height: 120,
    tintColor: "#8f8989",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8d8d8d",
    backgroundColor: "#efefef",
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 45,
    borderRadius: 6,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
  },

  button: {
    width: 100,
    height: 40,
    backgroundColor: "#d9d9d9",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 16,
    color: "#000",
  },

});