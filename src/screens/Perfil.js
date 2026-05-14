import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

import {
  Feather,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";

export default function Perfil({ navigation }) {

  return (

    <ScrollView style={styles.container}>

      {/* TopBar */}
      <View style={styles.topBar}>

        <Image
          source={require('../../assets/minilogo_safe.svg')}
          style={styles.logo}
        />

        <Text style={styles.topoTexto}>
          Usuário
        </Text>

      </View>

      {/* Card */}
      <View style={styles.card}>

        <Text style={styles.titulo}>
          Suas informações
        </Text>

        {/* Avatar */}
        <View style={styles.avatarArea}>

          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            }}
            style={styles.avatar}
          />

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
            editable={false}
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
            editable={false}
            style={styles.input}
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
            secureTextEntry
            editable={false}
            style={styles.input}
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
            placeholder="Telefone"
            editable={false}
            style={styles.input}
          />

        </View>

        {/* Botões */}
        <View style={styles.botoesArea}>

          <TouchableOpacity style={styles.botao}
            onPress={() => navigation.navigate("Cadastro")}>

            <Text style={styles.botaoTexto}>
              Editar Perfil
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate("Alerta")}
          >

            <Text style={styles.botaoTexto}
            >
              Editar Alerta
            </Text>

          </TouchableOpacity>

        </View>

        <TouchableOpacity
          style={styles.botaoHome}
          onPress={() => navigation.navigate("Home")}
        >

          <Text style={styles.botaoHomeTexto}>
            Pág principal
          </Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },

  topBar: {
    height: 70,
    backgroundColor: "#274C77",

    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginLeft: 12,
  },

  topoTexto: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 80,
  },

  card: {
    margin: 20,
    backgroundColor: "#efefef",
    borderRadius: 12,
    padding: 18,

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },

  titulo: {
    fontSize: 30,
    color: "#111",
    marginBottom: 25,
  },

  avatarArea: {
    alignItems: "center",
    marginBottom: 30,
  },

  avatar: {
    width: 140,
    height: 140,
    tintColor: "#b5b5b5",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#999",

    backgroundColor: "#f5f5f5",

    paddingHorizontal: 12,

    height: 50,
    marginBottom: 18,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },

  botoesArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  botao: {
    width: "47%",
    height: 48,

    backgroundColor: "#d9d9d9",

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#999",

    borderRadius: 6,
  },

  botaoTexto: {
    fontSize: 16,
    color: "#111",
  },

  botaoHome: {
    marginTop: 25,

    height: 50,

    backgroundColor: "#d9d9d9",

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#999",

    borderRadius: 6,
  },

  botaoHomeTexto: {
    fontSize: 18,
    color: "#111",
  },

});