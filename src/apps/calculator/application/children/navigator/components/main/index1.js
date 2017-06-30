import React from 'react';
import { View } from 'react-native';
import { addNavigationHelpers, DrawerView } from 'react-navigation';
import { connect } from 'react-redux';

import Navigator from './navigator';

const MainComponent = props => {
  let { dispatch, nav } = props;

  return (
    <View style={{flex: 1}}>
      <Navigator navigation={addNavigationHelpers({
        dispatch: dispatch,
        state: nav,
      })} />
    </View>
  );
}

const MainContainer = connect(
  state => {
    let props = {
      nav: state.nav
    };

    return props;
  }
)(MainComponent);

export default MainContainer;
