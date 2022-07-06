import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Presente() {

  const [alumnos, setAlumnos] = useState([]);
  useEffect(() => {
    axios.get('http://10.0.2.2:8000/api/related/')
      .then(res => setAlumnos(res.data))
      .catch(console.error)
  }, [])

    return (
        <View style={styles.container}>
      <Text>Alumnos</Text>
      <FlatList  data={alumnos} style={styles.list} renderItem={({item})=><Text>{item.legajoalumno.nombre} : {item.estado}</Text>}/> 
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

    list: {
      backgroundColor: "#d1d1d1",
      padding: 100,
      marginHorizontal: 0.5,
      marginVertical: 0.5 ,
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
    
  