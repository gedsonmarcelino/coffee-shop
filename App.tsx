import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import './test/miragejs';
import { DefaultTheme, ThemeProvider } from "styled-components/native";
import colors from './src/themes/colors';
import fonts from './src/themes/fonts';

import { useFonts } from 'expo-font';
import { StackNavigation } from './src/routes/StackNavigation';
import { StatusBar } from 'react-native';


const myTheme: DefaultTheme = {
  colors,
  fonts
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'RosarivoRegular': require('./src/assets/fonts/Rosarivo-Regular.ttf'),
    'RosarivoItalic': require('./src/assets/fonts/Rosarivo-Italic.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={myTheme}>
      <StackNavigation />
      <StatusBar />
    </ThemeProvider >

  );
}
