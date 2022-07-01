import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function Signin() {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState(undefined);
    const [number, onChangeNumber] = React.useState(null);
    return (
      <View style={styles.container}>
        <Image source={{ uri: 'https://www.ort.edu.ar/img/LogoOrtArgWeb2017.jpg' }}style={{ marginTop: 50, width: 200, height: 120}}/>
        <Text style={styles.text}>Registrate</Text>
  
          <TextInput style={styles.input} onChangeText={onChangeNumber} value={number} placeholder="Ingrese su CUIL" keyboardType="numeric"/>
          <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder="Ingrese su contraseña"/>
  
        <Button title="Sign In" color="#525252" onPress={() => Alert.alert('Simple Button pressed')}/>
  
        <Text style={styles.minitext}>¿Ya tenes una cuenta?
          <Button title="Presiona aquí para iniciar sesion" onPress={() => navigation.navigate('Login')}/>
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
    
  