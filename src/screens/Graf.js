<<<<<<< HEAD

=======
>>>>>>> d2b3976549c4f3f7fc86df50149c1aedc3b680e2
import React from "react";

import {
  View,
  Text,
  StyleSheet,
<<<<<<< HEAD
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import {
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Graf({ navigation }) {

  return (

    <ScrollView style={styles.container}>

      {/* Topo */}
      <View style={styles.topBar}>

      <Image
        source={require('../../assets/minilogo_safe.svg')}
        style={styles.logo}
      />

      
        <Text style={styles.topoTexto}>
          Dados
        </Text>

    </View>


      {/* Área título */}
      <View style={styles.headerArea}>

        <View>

          <Text style={styles.titulo}>
            Registro de BPM
          </Text>

          <Text style={styles.subInfo}>
            Últimas medições do bracelete
          </Text>

        </View>

        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
        >

          <Feather
            name="arrow-left"
            size={18}
            color="#fff"
          />

          <Text style={styles.botaoTexto}>
            Voltar
          </Text>

        </TouchableOpacity>

      </View>

      {/* Card BPM */}
      <View style={styles.card}>

        <View style={styles.cardHeader}>

          <View style={styles.cardTituloArea}>

            <MaterialCommunityIcons
              name="heart-pulse"
              size={24}
              color="#4b629b"
            />

            <Text style={styles.cardTitulo}>
              BPM atual
            </Text>

          </View>

          <Text style={styles.valorAtual}>
            140 BPM
          </Text>

        </View>

        {/* Área gráfico */}
        <View style={styles.graficoArea}>

          {/* Linha eixo X */}
          <View style={styles.eixoX} />

          {/* Linha eixo Y */}
          <View style={styles.eixoY} />

          {/* Linhas fake gráfico */}
          <View style={styles.linha1} />
          <View style={styles.linha2} />
          <View style={styles.linha3} />
          <View style={styles.linha4} />

          {/* Valores */}
          <View style={styles.numerosY}>

            <Text style={styles.numeroTexto}>200</Text>
            <Text style={styles.numeroTexto}>150</Text>
            <Text style={styles.numeroTexto}>100</Text>
            <Text style={styles.numeroTexto}>50</Text>
            <Text style={styles.numeroTexto}>0</Text>

          </View>

          {/* Horas */}
          <View style={styles.horasArea}>

            <Text style={styles.horaTexto}>13h</Text>
            <Text style={styles.horaTexto}>14h</Text>
            <Text style={styles.horaTexto}>15h</Text>
            <Text style={styles.horaTexto}>16h</Text>
            <Text style={styles.horaTexto}>17h</Text>
            <Text style={styles.horaTexto}>18h</Text>

          </View>

        </View>

      </View>

      {/* Segundo gráfico */}
      <Text style={styles.subtitulo}>
        Registro do acelerômetro
      </Text>

      <View style={styles.card}>

        <View style={styles.cardHeader}>

          <View style={styles.cardTituloArea}>

            <MaterialCommunityIcons
              name="run-fast"
              size={24}
              color="#4b629b"
            />

            <Text style={styles.cardTitulo}>
              Movimentação
            </Text>

          </View>

          <Text style={styles.valorAtual}>
            Normal
          </Text>

        </View>

        <View style={styles.graficoArea}>

          <View style={styles.eixoX} />
          <View style={styles.eixoY} />

          <View style={styles.linha5} />
          <View style={styles.linha6} />
          <View style={styles.linha7} />

          <View style={styles.numerosY}>

            <Text style={styles.numeroTexto}>15</Text>
            <Text style={styles.numeroTexto}>10</Text>
            <Text style={styles.numeroTexto}>5</Text>
            <Text style={styles.numeroTexto}>0</Text>

          </View>

          <View style={styles.horasArea}>

            <Text style={styles.horaTexto}>13h</Text>
            <Text style={styles.horaTexto}>14h</Text>
            <Text style={styles.horaTexto}>15h</Text>
            <Text style={styles.horaTexto}>16h</Text>
            <Text style={styles.horaTexto}>17h</Text>
            <Text style={styles.horaTexto}>18h</Text>

          </View>

        </View>

      </View>

    </ScrollView>
=======
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
>>>>>>> d2b3976549c4f3f7fc86df50149c1aedc3b680e2

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#f3f3f3",
  },

  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },

  topBar: {
    width: "100%",
    height: 70,
    backgroundColor: '#274C77',
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  topoTexto: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 80,
  },

  headerArea: {
    marginTop: 25,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222",
  },

  subInfo: {
    marginTop: 4,
    color: "#666",
    fontSize: 14,
  },

  subtitulo: {
    marginTop: 35,
    marginBottom: 15,

    paddingHorizontal: 20,

    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
  },

  botaoVoltar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,

    backgroundColor: "#4b629b",

    paddingHorizontal: 18,
    height: 45,

    borderRadius: 10,
  },

  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },

  card: {
    marginTop: 20,
    marginHorizontal: 20,

    backgroundColor: "#fff",

    borderRadius: 18,

    padding: 18,

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTituloArea: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  cardTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },

  valorAtual: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4b629b",
  },

  graficoArea: {
    height: 260,
    marginTop: 20,
    position: "relative",
  },

  eixoX: {
    position: "absolute",
    left: 40,
    bottom: 30,

    width: "88%",
    height: 1,

    backgroundColor: "#444",
  },

  eixoY: {
    position: "absolute",
    left: 40,
    top: 0,

    width: 1,
    height: 220,

    backgroundColor: "#444",
  },

  numerosY: {
    height: 210,
    justifyContent: "space-between",
  },

  numeroTexto: {
    color: "#444",
    fontSize: 14,
  },

  horasArea: {
    marginTop: 15,
    marginLeft: 50,

    flexDirection: "row",
    justifyContent: "space-between",
  },

  horaTexto: {
    color: "#444",
    fontSize: 14,
  },

  linha1: {
    position: "absolute",
    top: 70,
    left: 45,

    width: 55,
    height: 3,

    backgroundColor: "#ff6b81",
    transform: [{ rotate: "-15deg" }],
  },

  linha2: {
    position: "absolute",
    top: 95,
    left: 98,

    width: 60,
    height: 3,

    backgroundColor: "#ff6b81",
    transform: [{ rotate: "25deg" }],
  },

  linha3: {
    position: "absolute",
    top: 60,
    left: 156,

    width: 65,
    height: 3,

    backgroundColor: "#ff6b81",
    transform: [{ rotate: "-20deg" }],
  },

  linha4: {
    position: "absolute",
    top: 100,
    left: 220,

    width: 70,
    height: 3,

    backgroundColor: "#ff6b81",
    transform: [{ rotate: "15deg" }],
  },

  linha5: {
    position: "absolute",
    top: 120,
    left: 45,

    width: 75,
    height: 3,

    backgroundColor: "#4b629b",
    transform: [{ rotate: "-8deg" }],
  },

  linha6: {
    position: "absolute",
    top: 110,
    left: 118,

    width: 75,
    height: 3,

    backgroundColor: "#4b629b",
    transform: [{ rotate: "12deg" }],
  },

  linha7: {
    position: "absolute",
    top: 95,
    left: 190,

    width: 85,
    height: 3,

    backgroundColor: "#4b629b",
    transform: [{ rotate: "-6deg" }],
  },

});
=======
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
>>>>>>> d2b3976549c4f3f7fc86df50149c1aedc3b680e2
