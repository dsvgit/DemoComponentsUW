import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Button, StyleSheet, Picker } from 'react-native';

export default class extends Component {

  state = {
    language: 'java'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Picker</Text>
        <Picker
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 150
  }
});

