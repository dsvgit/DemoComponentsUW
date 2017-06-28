import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default props => {
  return (
    <View>
      <Text>Buttons</Text>
      <View style={styles.container}>
        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   width: 150
  }
});
