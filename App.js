import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Inicio from './components/Inicio';

//Para react navigation bottom
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import ModalExample from './components/Modal';
import Prueba_api from './components/Prueba_api';

export default function App() {

 
  return (

    <Prueba_api />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//*

//