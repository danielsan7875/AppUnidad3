import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AgregarScreen from '../screens/AgregarScreen';
import OptionsScreen from '../screens/OptionsScreen';


const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Agregar" component={AgregarScreen} />
    <Stack.Screen name="Opciones" component={OptionsScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
