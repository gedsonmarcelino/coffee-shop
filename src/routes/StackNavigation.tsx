import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ViewScreen } from '../screens/View';
import { HomeScreen } from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name="View" component={ViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
