import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class extends Component {
  render() {
    let { label, title, onPress } = this.props;

    let handlePress = () => {
      onPress && onPress();
    };

    return (
      <View style={{marginBottom: 6}}>
        <Text style={{fontSize: 13, fontWeight: 'bold'}}>{label}</Text>
        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={{paddingTop: 4, paddingBottom: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>{title}</Text>
            <Icon name="chevron-right" size={30} color="#ccc" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
