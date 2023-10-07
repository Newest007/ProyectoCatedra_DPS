import React, { useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView, Modal,Button,TouchableHighlight, SafeAreaView } from "react-native";

const Inicio = () => {

    const[modalVisibleplaya, SetModalVisibleplaya]=useState(false);

  return (
    <>
<SafeAreaView style={styles.safeArea}>
    <ScrollView>

        <Modal transparent={true} animationType="slide" visible={modalVisibleplaya} onRequestClose={()=>{
            alert('modal has been closed');}}>

            <View style={styles.vistaModal}>
                <View style={styles.Modal}>
                    <Text style={styles.subtitulo}>Ir a la Playa</Text>
                    <Text>El Salvador Cuenta con hermosas playas a nivel Centroamericano</Text>
                    <Button title="Cerrar" onPress={()=>{SetModalVisibleplaya(!modalVisibleplaya)}}></Button>
                </View>
            </View>

        </Modal>

        



        <View style={{flexDirection:'row'}}>
            <Image
                style={styles.banner}
                source={require('../src/img2/bg.jpg')}
            />
        </View>
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>¿Que hacer en El Salvador?</Text>
            <ScrollView horizontal>
                <View>
                    <TouchableHighlight onPress={()=>{SetModalVisibleplaya(!modalVisibleplaya)}}>
                        <Image
                            style={styles.ciudad}
                            source={require('../src/img2/actividad1.jpg')}
                        />
                    </TouchableHighlight>
                </View>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('../src/img2/actividad2.jpg')}
                    />
                </View>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('../src/img2/actividad3.jpg')}
                    />
                </View>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('../src/img2/actividad4.jpg')}
                    />
                </View>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('../src/img2/actividad5.jpg')}
                    />
                </View>
            </ScrollView>

            <Text style={styles.titulo}>Platillos Salvadoreños</Text>
            <View>
                <View>
                    <Image
                        style={styles.mejores}
                        source={require('../src/img2/mejores1.jpg')}
                    />
                </View>
                <View>
                    <Image
                        style={styles.mejores}
                        source={require('../src/img2/mejores2.jpg')}
                    />
                </View>
                <View>
                    <Image
                        style={styles.mejores}
                        source={require('../src/img2/mejores3.jpg')}
                    />
                </View>

                <Text style={styles.titulo}>Rutas Turisticas</Text>
                <View style={styles.listado}>
                    <View style={styles.listaItem}>
                        <Image
                        style={styles.mejores}
                        source={require('../src/img2/ruta1.jpg')}
                        />
                    </View>
                    <View style={styles.listaItem}>
                        <Image
                        style={styles.mejores}
                        source={require('../src/img2/ruta2.jpg')}
                        />
                    </View>
                    <View style={styles.listaItem}>
                        <Image
                        style={styles.mejores}
                        source={require('../src/img2/ruta3.jpg')}
                        />
                    </View>
                    <View style={styles.listaItem}>
                        <Image
                        style={styles.mejores}
                        source={require('../src/img2/ruta4.jpg')}
                        />
                    </View>
                </View>

            </View>
            

        </View>    
    </ScrollView>
</SafeAreaView>
    </>
    
  );
};

const styles=StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    banner:{
        height:250,
        flex:1
    },
    contenedor:{
        marginHorizontal:10,
    },
    titulo:{
        fontWeight: 'bold',
        fontSize:24,
        marginVertical:10
    },
    ciudad:{
        width:250,
        height:250,
        marginRight:10
    },
    mejores:{
        width:'100%',
        height:200,
        marginVertical:5
    },
    listaItem:{
        flexBasis:'49%',
    },
    listado:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    vistaModal:{
        flex:1,
        backgroundColor:'#000000aa',
    },
    Modal:{
        flex:1,
        backgroundColor:'#fff',
        margin:50,
        padding:40,
        borderRadius:10,
    },
    subtitulo:{
        fontWeight:'bold',
        fontSize:14,
        justifyContent:'center'
    }
})

export default Inicio;
