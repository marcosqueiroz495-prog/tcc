import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  TextInput,
  Image,
} from "react-native";

export default function Alerta({ navigation }) {

  const [modoAtivo, setModoAtivo] = useState(false);

  return (

    <ScrollView style={styles.container}>

      {/* TopBar */}
      <View style={styles.topBar}>

        <Image
          source={require('../../assets/minilogo_safe.svg')}
          style={styles.logo}
        />

        <Text style={styles.topoTexto}>
          Alertas
        </Text>

      </View>

      {/* Configuração */}
      <View style={styles.card}>

        <Text style={styles.cardTitulo}>
          Configuração do alerta
        </Text>

        <View style={styles.switchArea}>

          <Text style={styles.texto}>
            Modo atividade física
          </Text>

          <Switch
            value={modoAtivo}
            onValueChange={setModoAtivo}
          />

        </View>

        <Text style={styles.subtitulo}>
          Desligar após
        </Text>

        <TouchableOpacity style={styles.selectFake}>

          <Text>
            1 hora
          </Text>

        </TouchableOpacity>

      </View>

      {/* Contato */}
      <View style={styles.card}>

        <Text style={styles.cardTitulo}>
          Contato de Emergência
        </Text>

        <TextInput
          placeholder="Nome"
          style={styles.input}
        />

        <TextInput
          placeholder="Telefone"
          style={styles.input}
        />

        <TextInput
          placeholder="Relação"
          style={styles.input}
        />

        <TouchableOpacity style={styles.botaoSalvar}>

          <Text style={styles.botaoTexto}>
            Salvar
          </Text>

        </TouchableOpacity>

      </View>

      {/* Mensagem */}
      <View style={styles.card}>

        <Text style={styles.cardTitulo}>
          Mensagem de emergência
        </Text>

        <TextInput
          multiline
          numberOfLines={6}
          placeholder="Digite a mensagem automática..."
          style={styles.textArea}
        />

        <TouchableOpacity style={styles.botaoSalvarGrande}>

          <Text style={styles.botaoTexto}>
            Salvar mensagem
          </Text>

        </TouchableOpacity>

      </View>

      {/* Voltar */}
      <TouchableOpacity
        style={styles.botaoHome}
        onPress={() => navigation.navigate("Home")}
      >

        <Text style={styles.botaoHomeTexto}>
          Pág principal
        </Text>

      </TouchableOpacity>

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
    marginLeft: 10,
  },

  card: {
    marginTop: 20,
    marginHorizontal: 20,

    backgroundColor: "#efefef",

    borderRadius: 10,

    padding: 18,

    elevation: 4,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },

  cardTitulo: {
    fontSize: 24,
    color: "#111",
    marginBottom: 18,
  },

  switchArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  texto: {
    fontSize: 18,
    color: "#222",
  },

  subtitulo: {
    marginTop: 25,
    marginBottom: 8,
    fontSize: 16,
    color: "#222",
  },

  selectFake: {
    width: 120,
    height: 40,

    backgroundColor: "#d9d9d9",

    justifyContent: "center",
    paddingLeft: 12,

    borderWidth: 1,
    borderColor: "#999",
  },

  input: {
    height: 48,

    backgroundColor: "#f5f5f5",

    borderWidth: 1,
    borderColor: "#999",

    paddingHorizontal: 12,

    marginBottom: 14,
  },

  textArea: {
    height: 140,

    backgroundColor: "#f5f5f5",

    borderWidth: 1,
    borderColor: "#999",

    padding: 12,

    textAlignVertical: "top",
  },

  botaoSalvar: {
    marginTop: 10,

    height: 45,

    backgroundColor: "#d9d9d9",

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 6,

    borderWidth: 1,
    borderColor: "#999",
  },

  botaoSalvarGrande: {
    marginTop: 20,

    height: 48,

    backgroundColor: "#274C77",

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 6,
  },

  botaoTexto: {
    color: "#fff",
    fontSize: 16,
  },

  botaoHome: {
    margin: 20,

    height: 50,

    backgroundColor: "#d9d9d9",

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 6,

    borderWidth: 1,
    borderColor: "#999",
  },

  botaoHomeTexto: {
    fontSize: 18,
    color: "#111",
  },

});