import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { CartScreen } from '../screens/Cart';
import { TabBar } from '../components/TabBar';
import { ListScreen } from '../screens/List';

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen name='List' component={ListScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  )
}
