import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

export default function Splash({navigation,children}) {
    setTimeout(()=>{
        navigation.navigate('login')
      },5000)      
  return ( <>
    <ImageBackground source={require('../src/img/splash.png')}
    resizeMode='cover'
    style={{flex:1, padding: 20}}>
    </ImageBackground>
    {children}
    </>
  )
}