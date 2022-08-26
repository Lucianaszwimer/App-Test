import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button, Text} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
//import { Box } from 'native-base';


const Cursos = ({ item }) => {
  const navigation = useNavigation();
    return (
      <>
        <View style={styles.button}>
        <Button title={"5IA"}/*item.nombre*/ onPress={() => navigation.navigate('Presente')}/>
      </View>
    </>
  )
}

export function Home() {
const [curso, setCurso] = useState([]);
  useEffect(() => {
    axios.get('https://the-facial.herokuapp.com/api/curso/')
      .then(res => setCurso(res.data))
      .catch(console.error)
  }, [])
  return (
    <View>
      <Text style={styles.profe}>Peter Zilberstein</Text>
      <FlatList data={"curso"} renderItem={({ item }) =><Cursos item={item} />} />
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
