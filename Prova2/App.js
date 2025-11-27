import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioScreen from './screens/InicioScreen';
import MeusCompromissosScreen from './screens/MeusCompromissosScreen';
import CompromissosEquipeScreen from './screens/CompromissosEquipeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={InicioScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MeusCompromissos"
          component={MeusCompromissosScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CompromissosEquipe"
          component={CompromissosEquipeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
