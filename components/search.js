import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const FlyingWellSearch = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput style={styles.TextImputStyle} placeholder="Selecciona tu destino"/>
    </View>
    
  )
};

const styles = StyleSheet.create({
  TextImputStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 15,
    marginTop:20,
    marginLeft: 2,
    color: 'black',
    backgroundColor: '#f3f3f3',
    padding: 10,
    borderRadius:18,
    width:350
      
  }});

export default FlyingWellSearch;
