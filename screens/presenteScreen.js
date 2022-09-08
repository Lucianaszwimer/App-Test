import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContextState } from '../contextState.js';
import { useNavigation, useRoute } from '@react-navigation/native';

const Alumno = ({ item, habilitado }) => {
  const [Presencia, setPresencia] = React.useState(item.estado);
  let date = new Date();
  let time = date.getHours() + ":" + date.getMinutes() + ":" +  date.getSeconds();
  return (
    <>
      <Text style={styles.list}>{item.legajoalumno.apellido} {item.legajoalumno.nombre}
        <RadioButton
          value="Presente"
          status={Presencia === 'Presente' ? 'checked' : 'unchecked'}
          onPress={() => {
            if (habilitado) {
              setPresencia('Presente')
              axios.patch(`https://the-facial.herokuapp.com/api/related//${item.idpresencia}/`, { "estado": "Presente", "tiempo":time })
                .then(res => {
                  console.log("exito")
                })
                .catch(console.error)
            } else {
              Alert.alert('Clickea editar para cambiar las asistencias')
            }
          }}
          color='#00A402'
        />
        <RadioButton
          value="Tarde"
          status={Presencia === 'Tarde' ? 'checked' : 'unchecked'}
          onPress={() => {
            if (habilitado) {
              setPresencia('Tarde')
              axios.patch(`https://the-facial.herokuapp.com/api/related//${item.idpresencia}/`, { "estado": "Tarde", "tiempo":time })
                .then(res => {
                  console.log("exito")
                })
                .catch(console.error)
            } else {
              Alert.alert('Clickea editar para cambiar las asistencias')
            }
          }}
          color='#ECDE00'
        />
        <RadioButton
          value="Ausente"
          status={Presencia === 'Ausente' ? 'checked' : 'unchecked'}
          onPress={() => {
            if (habilitado) {
              setPresencia('Ausente')
              axios.patch(`https://the-facial.herokuapp.com/api/related//${item.idpresencia}/`, { "estado": "Ausente", "tiempo":time })
                .then(res => {
                  console.log("exito")
                })
                .catch(console.error)
            } else {
              Alert.alert('Clickea editar para cambiar las asistencias')
            }
          }}
          color='#DB0000'
        />
      </Text>
    </>
  )
}

export function Presente () {
  const [editarHabilitado, setEditarHabilitado] = useState(false);
  const { contextState, setContextState } = useContextState();
  const navigation = useNavigation();
  const route = useRoute();
  const curso = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{curso.idcurso.nombre + " " + curso.idmateria.nombre + " " + curso.bloquedia}</Text>
      <Button title={editarHabilitado ? "GUARDAR" : "EDITAR"} onPress={() => {
        setEditarHabilitado(!editarHabilitado);
      }} />
      <FlatList style={styles.list} data={contextState.alumnos} renderItem={({ item }) => <Alumno item={item} habilitado={editarHabilitado} />} />
      <Button title="Confirmar" onPress={() => {
        navigation.navigate('Home')
      }} />
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

  title: {
    marginVertical: 40,
    marginHorizontal: 10,
    fontSize: 32,
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

