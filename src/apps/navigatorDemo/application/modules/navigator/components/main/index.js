import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { addNavigationHelpers, DrawerView } from 'react-navigation';
import { connect } from 'react-redux';

const SimpleView = props => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => navigate({ routeName: 'SearchScreen' })}>
        <Text>{props.children}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

export const Navigator = StackNavigator({
  Home: {
    screen: DrawerNavigator({
      Calculator: {
        screen: () => <SimpleView>calculator 1</SimpleView>
      },
      Info: {
        screen: () => <SimpleView>info</SimpleView>
      }
    }),
    navigationOptions: { header: () => null }
  },
  SearchScreen: {
    screen: () => <SimpleView>search screen</SimpleView>
  }
});

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
