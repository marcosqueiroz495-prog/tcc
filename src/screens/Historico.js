import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
 ScrollView,
  Modal,
  Image,
} from "react-native";

export default function Historico({ navigation }) {

  const [popupVisible, setPopupVisible] = useState(false);

  const [popupRedefinir, setPopupRedefinir] = useState(false);

  const [criseSelecionada, setCriseSelecionada] = useState(null);

  const [crises, setCrises] = useState([

    {
      id: 1,
      data: "12/05/26",
      inicio: "18:30",
      fim: "18:50",
      status: "Pendente",
    },

    {
      id: 2,
      data: "11/05/26",
      inicio: "13:10",
      fim: "13:22",
      status: "Legítimo",
    },

    {
      id: 3,
      data: "09/05/26",
      inicio: "21:40",
      fim: "21:48",
      status: "Falso",
    },

  ]);

  function abrirPopup(crise) {

    setCriseSelecionada(crise);

    if (crise.status === "Pendente") {

      setPopupVisible(true);

    } else {

      setPopupRedefinir(true);

    }

  }

  function definirStatus(status) {

    const novaLista = crises.map((item) => {

      if (item.id === criseSelecionada.id) {

        return {
          ...item,
          status: status,
        };

      }

      return item;

    });

    setCrises(novaLista);

    setPopupVisible(false);

  }

  function redefinirCrise() {

    const novaLista = crises.map((item) => {

      if (item.id === criseSelecionada.id) {

        return {
          ...item,
          status: "Pendente",
        };

      }

      return item;

    });

    setCrises(novaLista);

    setPopupRedefinir(false);

  }

  return (

    <View style={styles.container}>

      {/* Barra azul */}

      <View style={styles.topBar}>

      <Image
        source={require('../../assets/minilogo_safe.svg')}
        style={styles.logo}
      />

      <Text style={styles.topoTexto}>
        Histórico de crises
      </Text>

    </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
      >

        {/* Header */}
        <View style={styles.headerArea}>


          <Text style={styles.titulo}> Definir </Text>

          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => navigation.goBack()}
          >

            <Text style={styles.textoVoltar}>
              Voltar
            </Text>

          </TouchableOpacity>

        </View>

        {/* Cards */}
        {

          crises.map((crise) => (

            <TouchableOpacity
              key={crise.id}
              style={styles.card}
              onPress={() => abrirPopup(crise)}
              activeOpacity={0.9}
            >

              <View style={styles.cardTop}>

                <Text style={styles.criseTitulo}>
                  Crise {crise.id}
                </Text>

                <Text style={styles.data}>
                  {crise.data}
                </Text>

              </View>

              <View style={styles.infoArea}>

                <Text style={styles.info}>
                  hora que foi detectada {crise.inicio}
                </Text>

                <Text style={styles.info}>
                  hora que parou {crise.fim}
                </Text>

              </View>

              {

                crise.status === "Legítimo" && (

                  <View style={styles.statusLegitimo}>

                    <Text style={styles.statusTexto}>
                      Legítimo
                    </Text>

                  </View>

                )

              }

              {

                crise.status === "Falso" && (

                  <View style={styles.statusFalso}>

                    <Text style={styles.statusTexto}>
                      Falso alerta
                    </Text>

                  </View>

                )

              }

              {

                crise.status === "Pendente" && (

                  <View style={styles.botaoVerificar}>

                    <Text style={styles.statusTexto}>
                      Verificar...
                    </Text>

                  </View>

                )

              }

            </TouchableOpacity>

          ))

        }

      </ScrollView>

      {/* Popup principal */}
      <Modal
        visible={popupVisible}
        transparent={true}
        animationType="fade"
      >

        <View style={styles.overlay}>

          <View style={styles.popup}>

            <Text style={styles.popupTitulo}>
              Dados da crise:
            </Text>

            {

              criseSelecionada && (

                <>

                  <Text style={styles.popupTexto}>
                    {criseSelecionada.data}
                  </Text>

                  <Text style={styles.popupTexto}>
                    Horário de início - {criseSelecionada.inicio}
                  </Text>

                  <Text style={styles.popupTexto}>
                    Horário de final - {criseSelecionada.fim}
                  </Text>

                </>

              )

            }

            <Text style={styles.validacaoTitulo}>
              Validação:
            </Text>

            <Text style={styles.descricao}>
              Detectamos uma movimentação intensa junto de uma alteração
              cardíaca acima do normal. Verifique se o evento foi uma
              crise real ou apenas um falso alerta causado por esforço
              físico ou outro fator externo.
            </Text>

            <View style={styles.popupButtons}>

              <TouchableOpacity
                style={styles.botaoFalso}
                onPress={() => definirStatus("Falso")}
              >

                <Text style={styles.popupButtonText}>
                  Falso alerta
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoLegitimo}
                onPress={() => definirStatus("Legítimo")}
              >

                <Text style={styles.popupButtonText}>
                  Legítimo
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </View>

      </Modal>

      {/* Popup redefinir */}
      <Modal
        visible={popupRedefinir}
        transparent={true}
        animationType="fade"
      >

        <View style={styles.overlay}>

          <View style={styles.popupRedefinir}>

            <Text style={styles.popupTitulo}>
              Redefinir status?
            </Text>

            <Text style={styles.descricao}>
              Você tem certeza que deseja redefinir essa validação?
            </Text>

            <View style={styles.popupButtons}>

              <TouchableOpacity
                style={styles.botaoCancelar}
                onPress={() => setPopupRedefinir(false)}
              >

                <Text style={styles.popupButtonText}>
                  Cancelar
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoLegitimo}
                onPress={redefinirCrise}
              >

                <Text style={styles.popupButtonText}>
                  Redefinir
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </View>

      </Modal>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginLeft: 12,
  },

  topBar: {
    height: 70,
    backgroundColor: "#274C77",

    flexDirection: "row",
    alignItems: "center",
  },

  topoTexto: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 40,
  },

  titulo: { fontSize: 28, color: "#111", },

  scroll: {
    padding: 18,
  },

  headerArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  botaoVoltar: {
    width: 120,
    height: 45,
    marginLeft: 100 ,
    backgroundColor: "#d4d4d4",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
  },

  textoVoltar: {
    fontSize: 20,
    color: "#111",
  },

  card: {
    backgroundColor: "#efefef",
    borderRadius: 10,
    padding: 15,
    marginBottom: 22,

    borderWidth: 1,
    borderColor: "#888",

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  criseTitulo: {
    fontSize: 24,
    color: "#111",
  },

  data: {
    fontSize: 16,
    color: "#333",
  },

  infoArea: {
    marginTop: 15,
    alignItems: "flex-end",
  },

  info: {
    fontSize: 16,
    color: "#222",
    marginBottom: 6,
  },

  botaoVerificar: {
    width: 140,
    height: 38,
    backgroundColor: "#bdbdbd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 12,
  },

  statusLegitimo: {
    width: 140,
    height: 38,
    backgroundColor: "#8BC034",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 12,
  },

  statusFalso: {
    width: 140,
    height: 38,
    backgroundColor: "#E24A4A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 12,
  },

  statusTexto: {
    color: "#fff",
    fontSize: 16,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  popup: {
    width: "88%",
    backgroundColor: "#6d6565",
    borderRadius: 8,
    padding: 20,
  },

  popupRedefinir: {
    width: "80%",
    backgroundColor: "#6d6565",
    borderRadius: 8,
    padding: 20,
  },

  popupTitulo: {
    color: "#fff",
    fontSize: 28,
    marginBottom: 18,
  },

  popupTexto: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 8,
  },

  validacaoTitulo: {
    color: "#fff",
    fontSize: 26,
    marginTop: 25,
    marginBottom: 12,
  },

  descricao: {
    color: "#f0f0f0",
    fontSize: 16,
    lineHeight: 24,
  },

  popupButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
  },

  botaoFalso: {
    width: 130,
    height: 42,
    backgroundColor: "#E24A4A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  botaoLegitimo: {
    width: 130,
    height: 42,
    backgroundColor: "#8BC034",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  botaoCancelar: {
    width: 130,
    height: 42,
    backgroundColor: "#888",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  popupButtonText: {
    color: "#fff",
    fontSize: 16,
  },

});