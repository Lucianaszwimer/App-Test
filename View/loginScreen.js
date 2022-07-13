import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function Login() {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState(undefined);
    const [number, onChangeNumber] = React.useState(null);
    return (
      <View style={styles.container}>
        <Image source={{ uri: 'https://www.ort.edu.ar/img/LogoOrtArgWeb2017.jpg' }} style={{ marginTop: 50, width: 200, height: 120,}}/>
        <Text style={styles.text}>Iniciar Sesion</Text>
  
          <TextInput style={styles.input} onChangeText={onChangeNumber} value={number} placeholder="Ingrese su CUIL" keyboardType="numeric"/>
          <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder="Ingrese su contraseña"/>
          
        <Button title="Log in" color="#525252" onPress={() => navigation.navigate('Home')}/>
  
        <Text style={styles.minitext}>¿No tenes una cuenta ya registrada?
          <Button title="Presiona aquí para registrarte" onPress={() => navigation.navigate('Signin')}/>
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
  