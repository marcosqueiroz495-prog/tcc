import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <View style={styles.containerHeader}>

          <Image
            style={styles.logo}
            source={require('../../assets/logo_safe.svg')}
          />

        </View>
      </View>

      <View style={styles.container}>
        <Text>Tela Home</Text>
      </View>
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
    backgroundColor: '#ff0000',
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