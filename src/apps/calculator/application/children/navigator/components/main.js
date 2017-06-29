import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Calculator from '../../calculator/components/main';
import SearchScreen from '../../searchScreen/components/main';

const Navigator = StackNavigator(
  {
    Calculator: {
      screen: Calculator,
      navigationOptions: {
        title: 'Рассчитать комиссию',
        headerStyle: {
          color: '#ccc',
          backgroundColor: '#232a35'
        },
        headerTitleStyle: {
          color: '#ccc',
        }
      }
    },
    SearchScreen: {
      screen: SearchScreen
    }
  }
);

export default class extends Component {
  render() {
    return (
      <Navigator />
    );
  }
}
