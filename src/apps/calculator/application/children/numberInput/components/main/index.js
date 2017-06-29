import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class extends Component {
  render() {
    let { label } = this.props;

    return (
      <View style={{marginBottom: 6}}>
        <Text style={{fontSize: 13, fontWeight: 'bold'}}>{label}</Text>
        <View style={{}}>
          <TextInput style={{width: 150, fontSize: 30}}
                     keyboardType="numeric"
                     {...this.props} />
        </View>
      </View>
    );
  }
}
