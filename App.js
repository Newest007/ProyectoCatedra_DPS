import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Inicio from './components/Inicio';

//Para react navigation bottom
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';


export default function App() {

  const Tab = createBottomTabNavigator();

  

  function HomeScreen() {
    return (
      <Inicio/>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  function Search() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search</Text>
      </View>
    );
  }

  function Account() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Account</Text>
      </View>
    );
  }

  
  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#2c278d', borderRadius: 5, },
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#9f9ea7',
        }}
      >

        
          <Tab.Screen 
            name="Inicio" 
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                                
                  <FontAwesomeIcons name="home" color={color} size={size} />
                
              ),
            }}
          />


       <Tab.Screen name="Buscar" component={Search} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcons name="search" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen name="Ajustes" component={SettingsScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcons name="cog" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen name="Cuenta" component={Account} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcons name="user-o" color={color} size={size} />
            ),
          }}
        />
       
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyTabs />
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
});
