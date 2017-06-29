import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class extends Component {
  render() {
    let { label, title } = this.props;

    return (
      <View style={{marginBottom: 6}}>
        <Text style={{fontSize: 13, fontWeight: 'bold'}}>{label}</Text>
        <View style={{paddingTop: 4, paddingBottom: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{fontSize: 20}}>{title}</Text>
          <Icon name="chevron-right" size={30} color="#ccc" />
        </View>
      </View>
    );
  }
}
