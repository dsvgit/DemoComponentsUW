/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import DemoApp from './src/apps/demo/application/app';

export default class DemoComponentsUW extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DemoApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('DemoComponentsUW', () => DemoComponentsUW);
