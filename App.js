import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Login } from "./screens/loginScreen.js"
import { Signin } from "./screens/signinScreen.js"
import { Presente } from "./screens/presenteScreen.js"
import { Home } from "./screens/cursosScreen.js"
import { NativeBaseProvider } from 'native-base';
import { ContextProvider } from './contextState.js';


const Stack = createNativeStackNavigator();

function LoginScreen() {
  return (
    <Login />
  );
}

function SigninScreen() {
  return (
    <Signin />
  );
}

function PresenteScreen() {
  return (
    <Presente />
  );
}

function CursosScreen() {
  return (
    <Home />
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <ContextProvider>
          <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="Presente" component={PresenteScreen} />
            <Stack.Screen name="Home" component={CursosScreen} />
          </Stack.Navigator>
        </ContextProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}