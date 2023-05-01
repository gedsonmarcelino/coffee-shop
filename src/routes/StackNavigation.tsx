import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ViewScreen } from '../screens/View';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { BottomTabNavigation } from './BottomTabNavigation';
import colors from '../themes/colors';
const Stack = createNativeStackNavigator();


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.primary
  },
};

export function StackNavigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom'
        }}
      >
        <Stack.Screen name='Home' component={BottomTabNavigation} />
        <Stack.Screen name="View" component={ViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
