import React from 'react';
import { View, Text, ViewPagerAndroid, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Demos from '../../../demos/components/main';

class Info extends React.Component {
  render() {
    return <Text>Information</Text>
  }
}

const MainScreenNavigator = TabNavigator(
  {
    Demos: {
      screen: Demos
    },
    Info: {
      screen: Info
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#5E8D48'
      }
    }
  }
);

export default MainScreenNavigator;
