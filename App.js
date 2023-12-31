import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import Registro from './components/registro';
import Login from './components/login';
import Splash from './components/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { useNavigation } from '@react-navigation/native';


const Stack = createNativeStackNavigator();


function HomeScreen(){
  return(
    <View>
      <Text>Pantalla Principal</Text>
    </View>
  );
}

export default function App() {
  return (
  <>
    <NavigationContainer initialRouteName="Splash">
      <Stack.Navigator>
        <Stack.Screen name={'Splash'} component={Splash}  options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} /*options={{headerShown: false}}*//>
        <Stack.Screen name="Registro" component={Registro} /*options={{headerShown: false}}*//>
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}
