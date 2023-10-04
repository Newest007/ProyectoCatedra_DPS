import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from './components/background';
import Login from './components/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Splash
import Splash from './components/Splash';

const Stack = createNativeStackNavigator();

function HomeScreen(){
  return(
      <Text>Home Screen</Text>
  );
}

export default function App() {
  return (<>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Splash'} component={Splash}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
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
