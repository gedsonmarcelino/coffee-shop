import { HomeScreen } from "./src/screens/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ViewScreen } from "./src/screens/View";
import './test/miragejs';
import { DefaultTheme, ThemeProvider } from "styled-components/native";
import colors from './src/themes/colors';
import fonts from './src/themes/fonts';

import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { TabBar } from "./src/components/TabBar";


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
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
          tabBar={props => <TabBar {...props} />}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Cart" component={ViewScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider >

  );
}
