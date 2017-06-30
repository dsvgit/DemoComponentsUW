import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import DemoApp from './src/apps/demo/application/app';
// import CalculatorApp from './src/apps/calculator/application/app';
import NavigatorDemo from './src/apps/navigatorDemo/application/app';

export default class DemoComponentsUW extends Component {
  render() {
    return (
      <NavigatorDemo />
    );
  }
}

AppRegistry.registerComponent('DemoComponentsUW', () => DemoComponentsUW);
