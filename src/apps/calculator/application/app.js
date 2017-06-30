import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text, StatusBar } from 'react-native';

import store from './store';
import Navigator from './children/navigator/components/main';
import Drawer from './children/drawer/components/main';

// <Drawer>
//           <View style={{flex: 1}}>
//             <Navigator />
//             <StatusBar backgroundColor="#232a35" barStyle="light-content" />
//           </View>
//         </Drawer>

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
