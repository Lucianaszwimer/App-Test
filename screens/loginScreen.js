import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { useContextState } from '../contextState.js';
import { ActionTypes } from '../contextState.js';
import axios from "axios"

export function Login() {
  const navigation = useNavigation();
  const { contextState, setContextState } = useContextState();
  const [cursosT, setCursosT] = useState();
  let cF = []

  useEffect(() => {
    axios.get('https://the-facial.herokuapp.com/api/pavanzado//')
      .then(res => {
        setCursosT(res.data)
      })
      .catch(console.error)
  }, [])

  const llenarVect = async () => {
    await cursosT.map((c) => {
      if (c.idprofesor.nombre == contextState.profesor.nombre && c.idprofesor.apellido == contextState.profesor.apellido) {
        cF.push(c)
      }
    })
    if (cF.length != 0) {
      setContextState({
        type: ActionTypes.SetCursos,
        value: cF
      })
      navigation.navigate('Home')
    } else {
      Alert.alert("Este profesor no tiene cursos asignados")
    }
  }


  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.ort.edu.ar/img/LogoOrtArgWeb2017.jpg' }} style={{ marginTop: 50, width: 200, height: 120, }} />
      <Text style={styles.text}>Iniciar Sesion</Text>

      <TextInput style={styles.input} onChangeText={(text) =>
        setContextState({
          type: ActionTypes.SetNombre,
          value: text
        })} placeholder="Ingrese su Nombre" keyboardType="numeric" />
      <TextInput style={styles.input} onChangeText={(text) =>
        setContextState({
          type: ActionTypes.SetApellido,
          value: text
        })} placeholder="Ingrese su Apellido" />

      <Button title="Log in" color="#525252" onPress={() => {
        const f = llenarVect()
      }} />

      <Text style={styles.minitext}>¿No tenes una cuenta ya registrada?
        <Button title="Presiona aquí para registrarte" onPress={() =>
          navigation.navigate('Signin')} />
      </Text>

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
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  minitext: {
    marginTop: 40,
    color: 'white',
    padding: 50,
    backgroundColor: '#202e99'
  }
});
