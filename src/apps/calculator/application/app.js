import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

import Navigator from './children/navigator/components/main';

export default class extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Navigator />
        <StatusBar backgroundColor="#232a35" barStyle="light-content" />
      </View>
    );
  }
}
