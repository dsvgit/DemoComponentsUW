import React, { Component } from 'react';
import { Text, View, StyleSheet, ProgressBarAndroid as ProgressBar } from 'react-native';

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Progress bar</Text>
        <ProgressBar styleAttr="Horizontal" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  }
});

