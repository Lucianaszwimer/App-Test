import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Login } from "./View/loginScreen.js"
import { Signin } from "./View/signinScreen.js"
import { Presente } from "./View/presenteScreen.js"
import { dbAxios } from "./src/axios.js"
import { Home } from "./View/cursosScreen.js"
import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();

function LoginScreen() {
  return(
  <Login/>
  );
}

function SigninScreen() {
  return (
    <Signin/>
  );
}

function PresenteScreen() {
  return (
      <Presente/>
  );
}

function CursosScreen() {
  return(
    <Home/>
  );
}

export default function App() {
  dbAxios();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="Presente" component={PresenteScreen} />
          <Stack.Screen name="Home" component={CursosScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}