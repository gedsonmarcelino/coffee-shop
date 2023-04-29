import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TabBarButton, TabBarContainer, TabBarIcon } from './styles';

const Icons = {
  list: {
    imgName: 'Home',
    uri: require('../../assets/icons/icon-home.png')
  },
  cart: {
    imgName: 'Cart',
    uri: require('../../assets/icons/icon-cart.png')
  }
}

const IconsActive = {
  list: {
    imgName: 'Home',
    uri: require('../../assets/icons/icon-home-active.png')
  },
  cart: {
    imgName: 'Cart',
    uri: require('../../assets/icons/icon-cart-active.png')
  }
}

export function TabBar(props: BottomTabBarProps) {
  const { state, navigation } = props;

  function handlePress(name, key, isFocused) {
    const event = navigation.emit({
      type: 'tabPress',
      target: key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(name);
    }
  };

  return (
    <TabBarContainer>
      {state.routes.map((item, index) => {
        const isFocused = state.index === index;
        const icon = isFocused ? IconsActive[item.name.toLowerCase()] : Icons[item.name.toLowerCase()];
        return (
          <TabBarButton key={item.name} onPress={() => handlePress(item.name, item.key, isFocused)}>
            <TabBarIcon source={icon.uri} />
          </TabBarButton>)
      })}
    </TabBarContainer>
  );
}
