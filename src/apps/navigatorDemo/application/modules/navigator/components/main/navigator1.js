import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Button, TouchableWithoutFeedback } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { toggleDrawer } from '../../../../drawer';
import { navigate } from '../../../../navigation';
import Info from '../../../info/components/main';
import Calculator from '../../../calculator/components/main';
import SearchScreen from '../../../searchScreen/components/main';

const BurgerMenuIcon = props => {
  return (
    <View style={{flexDirection: 'row', marginLeft: 15, marginTop: 3}}>
    <TouchableWithoutFeedback underlayColor="white" onPress={() => {toggleDrawer()}}>
      <Icon name="dehaze" size={30} color="#ccc" />
      </TouchableWithoutFeedback>
    </View>
      
  );
};

const SimpleView = props => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => navigate({ routeName: 'SearchScreen' })}>
        <Text>{props.children}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const Navigator1 = StackNavigator({
  Home: {
    screen: DrawerNavigator({
      Calculator: {
        screen: () => <SimpleView>calculator</SimpleView>
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

const Navigator = StackNavigator(
  {
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: {
        headerStyle: {
          color: '#ccc',
          backgroundColor: '#232a35'
        },
        headerTitleStyle: {
          color: '#ccc',
        },
        headerTintColor: '#ccc',
      }
    },
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
        },
        headerLeft: <BurgerMenuIcon />
      }
    },
    Info: {
      screen: Info,
      navigationOptions: {
        title: 'Информация'
      }
    }
  }
);

export default Navigator1;
