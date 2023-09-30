import React from 'react';
import { View, StyleSheet, Text, TextInput, Button, Image } from 'react-native';
import Svg, { Defs, Rect, LinearGradient, Stop } from 'react-native-svg';
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
  }from 'react-native-safe-area-context';



const FROM_COLOR = 'rgba(247, 247, 247, 1)';
const TO_COLOR = 'rgba(45, 40, 122, 1)';

const Login = ({ children }) => {
    return (
        
        <SafeAreaView style={styles.container}>
            
            <View style={styles.gradientContainer}>
                <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
                    <Defs>
                        <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <Stop offset="0" stopColor={FROM_COLOR} />
                            <Stop offset="1" stopColor={TO_COLOR} />
                        </LinearGradient>
                    </Defs>
                    <Rect width="100%" height="100%" fill="url(#grad)" />
                </Svg>
            </View>
            
            <View style={styles.contentContainer}>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../src/img/Logo1-sfondo.png')}
                    
                />
            </View>
          

                <Text style={styles.text}>Login</Text>
                <Text style={styles.text}>Welcome Back</Text>

                <TextInput style={styles.textInput} placeholder="Enter Your Username/Email" />            
                <TextInput style={styles.textInput} placeholder="Enter Your Password" />

                <View style={styles.buttonContainer}>
                    <Button
                        title="Login"
                        color="#0e64d1"
                        onPress={() => {
                            // manejo boton
                        }}
                    />
                </View>

                <Text style={styles.text2}>Already Have An Account? Login</Text>
                
            </View>

            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: TO_COLOR,
    },
    gradientContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 400,
        height: 80,
        marginTop:-150,
        marginBottom:30
    },
    textInput: {
        borderWidth: 2,
        borderColor: '#949292',
        marginVertical: 10,
        width: 350,
        height: 45,
        borderRadius: 15,
        paddingHorizontal: 15,
        backgroundColor: 'white',
    },
    buttonContainer: {
        width: 350,
        height: 45,
        marginVertical: 10,
        borderRadius: 20,
        
    },
    text: {
        color: '#000',
        fontSize:20,
        lineHeight:35,        

    },
    text2:{
        color: 'white',
        marginTop: 10,        
    }
});

export default Login;
