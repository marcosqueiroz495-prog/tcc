import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Cadastro from '../screens/Cadastro';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle:{
          width: 250,
          backgroundColor: '#f2f2f2',
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
      />

      <Drawer.Screen
        name="Cadastro"
        component={Cadastro}
      />

    </Drawer.Navigator>
  );
}