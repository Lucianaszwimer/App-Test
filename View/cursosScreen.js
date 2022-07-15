import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Cursos = ({ item }) => {
  const navigation = useNavigation();
    return (
      <>
      <View style={styles.roundButton}>
        <Button title={item.nombre} onPress={() => navigation.navigate('Presente')}/>
      </View>
    </>
  )
}

export function Home() {
const [curso, setCurso] = useState([]);
  useEffect(() => {
    axios.get('http://10.0.2.2:8000/api/curso/')
      .then(res => setCurso(res.data))
      .catch(console.error)
  }, [])
  return (
    <View>

      <FlatList data={curso} renderItem={({ item }) =><Cursos item={item} />} />

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

    roundButton: {
      borderRadius: 100,
      marginTop: 50,
      width: 150,
    }
});
