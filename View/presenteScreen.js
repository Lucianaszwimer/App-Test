import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import { App } from "../App.js"

export function Presente() {
    App()
    return (
        <View style={styles.container}>
      <Text>Alumnos</Text>
      <FlatList data={alumnos} renderItem={({item})=><Text>{item.estado}, {item.legajoalumno.nombre}</Text>}/> 
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
  
    text: {
      color: '#202e99',
      marginTop: 30,
      fontSize: 30,
      fontWeight: 'bold'
    }
  });
    
  