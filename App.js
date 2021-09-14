import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Text } from './src/styles';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth';
import 'react-native-gesture-handler';
import Routes from './src/routes/index';
console.disableYellowBox=true;
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" style="light" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}