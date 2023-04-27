import { StatusBar } from "expo-status-bar";
import { HomeScreen } from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ViewScreen } from "./src/screens/View";
import './test/miragejs';
import { DefaultTheme, ThemeProvider } from "styled-components/native";
import colors from './src/themes/colors';
import fonts from './src/themes/fonts';

import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

const myTheme: DefaultTheme = {
  colors,
  fonts
};

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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="View" component={ViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>

  );
}
