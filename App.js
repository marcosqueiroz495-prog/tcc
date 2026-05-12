import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Escolha from './src/screens/Escolha';
import Cadastro from './src/screens/Cadastro';
import Login from './src/screens/Login';
import Home from './src/screens/Home'

const Stack = createNativeStackNavigator();

function StartScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => navigation.navigate("Escolha")}
      >

        <StatusBar style="light" />

        <Image
          style={styles.logo}
          source={require('./assets/logo_safe.svg')}
        />

        <View>
          <Text style={styles.subtitulo}>
            Clique em qualquer lugar para iniciar o app!
          </Text>
        </View>

      </TouchableOpacity>

    </View>
  );
}

export default function App() {
  return (

    <NavigationContainer
      linking={{
        prefixes: [],
      }}
    >

      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >

        <Stack.Screen
          name="Start"
          component={StartScreen}
        />

        <Stack.Screen
          name="Escolha"
          component={Escolha}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Home"
          component={Home}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  subtitulo: {
    marginTop: 20,
    alignSelf: "center",
  },

  logo: {
    width: 270,
    height: 260,
    alignSelf: "center",
    marginTop: 150,
    marginLeft: 20
  },

});