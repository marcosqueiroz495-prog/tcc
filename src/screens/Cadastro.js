import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Cadastro(){
  return (
    <View style={styles.container}>

      <StatusBar style="light" />

      <View style={styles.header}>
        <View style={styles.containerHeader}>

          <Image
            style={styles.logo}
            source={require('../../assets/logo_safe.png')}
          />

        </View>
      </View>

      <Text>Tela Cadastro</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header:{
    backgroundColor: '#43598B',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo:{
    width: 160,
    height: 40,
  },

  containerHeader:{
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },
});
