
import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";

import {
  Feather,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function Home() {

  return (

    <ScrollView style={styles.container}>

      {/* Imagem da pulseira */}
      <View style={styles.header}>

        <Image
          source={require('../../assets/pulseira.png')}
          style={styles.pulseira}
        />

      </View>

      {/* Nome + switch */}
      <View style={styles.nomeArea}>

        <Text style={styles.nomeBracelete}>
          Nome do bracelete
        </Text>
      </View>

      {/* BPM */}
      <TouchableOpacity style={styles.card}
        onPress={() => navigation.navigate("Graf")}
      >

        <View style={styles.cardHeader}>

          <Text style={styles.cardTitulo}>
            BPM atual:
          </Text>

          <Feather
            name="chevron-right"
            size={20}
            color="#000"
          />

        </View>

        
        <View style={styles.cardConteudo}>

          <FontAwesome5
            name="heartbeat"
            size={60}
            color="#c9c9c9"
          />

          <Text style={styles.bpmTexto}>
            140
          </Text>

        </View>

      </TouchableOpacity>

      {/* Movimentação */}
      <View style={styles.card}>

        <Text style={styles.cardTitulo}>
          Movimentação:
        </Text>

        <View style={styles.movimentoArea}>

          <MaterialIcons
            name="directions-walk"
            size={60}
            color="#c9c9c9"
          />

          <View>

            <Text style={styles.movimentoTexto}>
              Nível de agitação:
            </Text>

            <Text style={styles.movimentoStatus}>
              Normal
            </Text>

          </View>

        </View>

      </View>

      {/* Bateria */}
      <View style={styles.card}>

        <Text style={styles.cardTitulo}>
          Status da bateria:
        </Text>

        <View style={styles.movimentoArea}>

          <Feather
            name="zap"
            size={60}
            color="#c9c9c9"
          />

          <View>

            <Text style={styles.movimentoTexto}>
              Carregando
            </Text>

            <Text style={styles.bateriaTexto}>
              90%
            </Text>

          </View>

        </View>

      </View>

      {/* Localização */}
      <View style={styles.mapaCard}>

        <Image
          source={require('../../assets/mapa.jpg')}
          style={styles.mapa}
        />

        <Text style={styles.localizacaoTexto}>
          Localização atual
        </Text>

      </View>

      {/* Botões */}
      <View style={styles.botoesArea}>

        <TouchableOpacity style={styles.botao}>

          <Text style={styles.botaoTexto}
          onPress={() => navigation.navigate("Perfil")}>
            Ver perfil
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}
        onPress={() => navigation.navigate("Historico")}
        >

          <Text style={styles.botaoTexto}>
            Ver histórico
          </Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 18,
  },

  header: {
    alignItems: 'center',
    marginTop: 20,
  },

  pulseira: {
    width: 220,
    height: 120,
    resizeMode: 'contain',
  },

  nomeArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    gap: 10,
  },

  nomeBracelete: {
    fontSize: 20,
    color: '#000',
  },

  card: {
    backgroundColor: '#efefef',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,

    borderWidth: 1,
    borderColor: '#999',

    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardTitulo: {
    fontSize: 16,
    color: '#222',
  },

  cardConteudo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },

  bpmTexto: {
    fontSize: 50,
    color: '#000',
  },

  movimentoArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },

  movimentoTexto: {
    fontSize: 16,
    color: '#444',
  },

  movimentoStatus: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  bateriaTexto: {
    fontSize: 45,
    color: '#000',
  },

  mapaCard: {
    borderWidth: 2,
    borderColor: '#1e90ff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 25,
    backgroundColor: '#fff',
  },

  mapa: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },

  localizacaoTexto: {
    padding: 10,
    fontSize: 14,
    color: '#222',
  },

  botoesArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  botao: {
    width: '47%',
    height: 45,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
  },

  botaoTexto: {
    fontSize: 16,
    color: '#000',
  },

});