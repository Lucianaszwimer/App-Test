import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useContextState } from '../contextState.js';
import { ActionTypes } from '../contextState.js';
//import { Box } from 'native-base';

export function Home() {
  const navigation = useNavigation();
  const { contextState, setContextState } = useContextState();
  const [alumnos, setAlumnos] = useState();
  let aF = []
  let cursos = contextState.cursos

  useEffect(async () => {
    await axios.get('https://the-facial.herokuapp.com/api/related//')
      .then(res => {
        console.log('hola')
        setAlumnos(res.data)
      })
      .catch(console.error)
  }, [])

  const llenarVect = async (bloque, curso) => {
    await alumnos.map((a) => {
      if (a.idcmpa == bloque) {
        aF.push(a)
      }
    })
    if (aF.length != 0) {
      setContextState({
        type: ActionTypes.SetAlumnos,
        value: aF
      })
      navigation.navigate('Presente', curso)
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.profe}>{contextState.profesor.nombre} {contextState.profesor.apellido}</Text>
      {cursos.map((e, i) =>
        <>
          <Button style={styles.button} title={e.idcurso.nombre + " " + e.idmateria.nombre + " " + e.bloquedia} onPress={() => {
            llenarVect(e.idcmpa, e)
          }} />
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  list: {
    flex: 1,
    backgroundColor: "#d1d1d1",
    padding: 20,
    fontSize: 20,
  },

  profe: {
    fontSize: 20
  },

  button: {
    borderColor: 'white',
    borderBottomWidth: 2
  }
});
