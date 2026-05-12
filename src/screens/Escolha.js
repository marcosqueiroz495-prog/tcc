// escolher entre logar ou Cadastrar

import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Escolha({ navigation }) {

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Bem-vindo!
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Cadastro")}
      >

        <Text style={styles.botaoTexto}>
          Cadastre-se
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Login")}
      >

        <Text style={styles.botaoTexto}>
          Login
        </Text>

      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  botao: {
    width: '100%',
    height: 55,
    backgroundColor: '#274C77',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

});