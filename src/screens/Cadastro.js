import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
  Platform
} from 'react-native';

import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [contribuicao, setContribuicao] = useState(250);
  const [spfc, setspfc] = useState(false);

  const isWeb = Platform.OS === 'web';

  function formatPhoneNumber(value) {

    const cleaned = value.replace(/\D/g, '');

    if (cleaned.length <= 2) {
      return `(${cleaned}`;
    }

    if (cleaned.length <= 7) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    }

    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
  }

  function enviarDados() {

    Alert.alert(
      'Conta criada!',
      `Nome: ${nome}
CPF: ${cpf}
Telefone: ${telefone}
Sexo: ${sexo}
Contribuição: R$${contribuicao.toFixed(0)}
São Paulino: ${spfc ? 'Sim' : 'Não'}`
    );
  }

  return (
    <ScrollView style={styles.scroll}>

      <StatusBar style="light" />

      <View style={styles.container}>

        <View style={styles.header}>

          <View style={styles.containerHeader}>

            <Image
              style={styles.logo}
              source={require('../../assets/logo_safe.svg')}
            />

          </View>

        </View>

        <Text style={styles.titulo}>
          Tela Cadastro
        </Text>

        <View style={styles.areaformulario}>

          <Text style={styles.textoNome}>
            Torcedor:
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            underlineColorAndroid="transparent"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <Text style={styles.textoNome}>
            CPF:
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu CPF"
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            value={cpf}
            onChangeText={(text) => setCpf(text)}
          />

          <Text style={styles.textoNome}>
            Digite seu telefone:
          </Text>

          <TextInput
            style={styles.input}
            placeholder="(99) 99999-9999"
            keyboardType="numeric"
            value={telefone}
            onChangeText={(text) => setTelefone(formatPhoneNumber(text))}
            maxLength={15}
          />

          <View style={styles.areaSexo}>

            <Text style={styles.textoNome}>
              Sexo:
            </Text>

            <Picker
              style={styles.pickerSexo}
              selectedValue={sexo}
              onValueChange={(itemValue) => setSexo(itemValue)}
            >

              <Picker.Item
                label="Masculino"
                value="Masculino"
              />

              <Picker.Item
                label="Feminino"
                value="Feminino"
              />

              <Picker.Item
                label="Outro"
                value="Outro"
              />

            </Picker>

          </View>

          <View style={styles.contribuicaoArea}>

            <Text style={styles.textoNome}>
              Contribuição (vai São Paulo!):
            </Text>

            <Text style={styles.contribuicaoTexto}>
              R${contribuicao.toFixed(0)}
            </Text>

          </View>

          <View style={styles.areaSlider}>

            <Slider
              minimumTrackTintColor="#CF0000"
              thumbColor="rgb(255, 111, 183)"
              minimumValue={250}
              maximumValue={4000}
              value={contribuicao}
              onValueChange={(value) => setContribuicao(value)}
            />

          </View>

          <View style={styles.areaspfc}>

            <Text style={styles.textoNome}>
              Maior do Brasil:
            </Text>

            <Switch
              style={isWeb ? { transform: [{ translateY: -2 }] } : {}}
              trackColor={{ false: "#ffeeee", true: "#ffeaea" }}
              thumbColor="rgb(255, 111, 183)"
              value={spfc}
              onValueChange={(value) => setspfc(value)}
            />

          </View>

          <TouchableOpacity
            style={styles.botao}
            onPress={enviarDados}
          >

            <Text style={styles.botaoTexto}>
              Abrir Conta
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  scroll: {
    flex: 1,
    backgroundColor: '#000000'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 40
  },

  header: {
    width: '100%',
    height: 180,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },

  containerHeader: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain'
  },

  titulo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20
  },

  areaformulario: {
    width: '90%',
    marginTop: 20
  },

  textoNome: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 6,
    marginTop: 14
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    fontSize: 16
  },

  areaSexo: {
    marginTop: 10
  },

  pickerSexo: {
    backgroundColor: '#fff',
    borderRadius: 10
  },

  contribuicaoArea: {
    marginTop: 20
  },

  contribuicaoTexto: {
    color: '#2d3ea0',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 5
  },

  areaSlider: {
    marginTop: 10
  },

  areaspfc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  },

  botao: {
    backgroundColor: '#CF0000',
    marginTop: 30,
    borderRadius: 12,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }

});