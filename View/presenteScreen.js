import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import { dbAxios } from "../src/axios.js"
import { colorP } from "../src/colorPresencia.js"

export function Presente() {
  dbAxios(),
  colorP() //igualar a variable
    return (
        <View style={styles.container}>
      <Text>Alumnos</Text>
      <FlatList style={styles.colores} data={alumnos} renderItem={({item})=><Text>{item.legajoalumno.nombre} : {item.estado}</Text>}/> 
      <StatusBar style="auto" />
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 70,
      alignItems: 'center',
    },

    colores: {
      p: {
      backgroundColor: '#2bad30'
    },

    t: {
      backgroundColor: '#d68c38'
    },

    a: {
      backgroundColor: '#d64038'
    }
  }
  });
    
  