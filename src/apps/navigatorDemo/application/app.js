import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text, StatusBar } from 'react-native';

import store from './store';
import Navigator from './modules/navigator/components/main';
import Drawer from './modules/drawer/components/main';

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
