import React from 'react';
import { View, Text, ToolbarAndroid, StyleSheet } from 'react-native';

export default class extends React.Component {
  onActionSelected(position) {
    
  }

  render() {
    {
      return (
        <ToolbarAndroid
            style={{height: 55, backgroundColor: "#5E8D48"}}
            title="TestApp"
            actions={[{title: 'Settings', show: 'always'}]}
        />
      );
    }
  }
}
