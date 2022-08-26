import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, Alert} from 'react-native';
import { RadioButton } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Alumno = ({ item, habilitado }) => {
  const [Presencia, setPresencia] = React.useState(item.estado);
  return (
    <>
      <Text style={styles.list}>{item.legajoalumno.apellido} {item.legajoalumno.nombre}
        <RadioButton 
          value="Presente"
          status={Presencia === 'Presente' ? 'checked' : 'unchecked'}
          onPress={() => {
            if(habilitado) {
              setPresencia('Presente')
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
            if(habilitado) {
              setPresencia('Tarde')
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
            if(habilitado) {
              setPresencia('Ausente')
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
  

export function Presente() {
  const [editarHabilitado, setEditarHabilitado] = useState(false);
  const [alumnos, setAlumnos] = useState([]);
  useEffect(() => {
    axios.get('https://the-facial.herokuapp.com/api/related/')
      .then(res => setAlumnos(res.data))
      .catch(console.error)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alumnos</Text>
      <Button title={editarHabilitado?"GUARDAR":"EDITAR"} onPress={() => {
        setEditarHabilitado(!editarHabilitado);
      }}/>
      <FlatList style={styles.list} data={alumnos} renderItem={({ item }) =><Alumno item={item} habilitado={editarHabilitado} />} />
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

