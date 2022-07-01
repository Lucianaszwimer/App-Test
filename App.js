import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from "react";
import axios from 'axios';
import React from 'react';
import { Login } from "./View/loginScreen.js"
import { Signin } from "./View/signinScreen.js"
import { Presente } from "./View/presenteScreen.js"

const Stack = createNativeStackNavigator();

function LoginScreen() {
  return(
  Login()
  );
}

function SigninScreen() {
  return (
    Signin()
  );
}

function PresenteScreen() {
  return (
    Presente()
  );
}

export default function App() {
  const [alumnos, setAlumnos] = useState([])
  useEffect(() => {
    async function getAllAlumnos() {
      try {
        const alumnos = await axios.get('http://10.0.2.2:8000/api/related/')
        console.log(alumnos.data)
        setAlumnos(alumnos.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllAlumnos()
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Presente" component={PresenteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

