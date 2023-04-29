import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ViewScreen } from '../screens/View';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigation } from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={BottomTabNavigation} />
        <Stack.Screen name="View" component={ViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
