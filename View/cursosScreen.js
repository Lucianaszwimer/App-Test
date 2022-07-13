import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cursos = ({ item }) => {
    return (
      <>
        <Text>{item.nombre}</Text>
    </>
  )
}

export function Home() {
  const navigation = useNavigation();
const [curso, setCurso] = useState([]);
  useEffect(() => {
    axios.get('http://10.0.2.2:8000/api/related/')
      .then(res => setCurso(res.data))
      .catch(console.error)
  }, [])
  return (
    <View style={styles.container}>
      <FlatList data={curso} renderItem={({ item }) =><Cursos item={item} />} />

      <Button title="5IA" color="#525252" onPress={() => navigation.navigate('Presente')}/>

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
    }
});