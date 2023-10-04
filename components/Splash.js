import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Splash({children}) {

  const navigation = useNavigation();

    setTimeout(()=>{
        navigation.navigate('Login')
      },5000)      
  return ( <>
    <ImageBackground source={require('../src/img/splash.png')}
    resizeMode='contain'
    style={{flex: 1}}/>
    {children}
    </>
  )
}