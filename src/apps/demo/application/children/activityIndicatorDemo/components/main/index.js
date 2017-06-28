import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default props => {
  return (
    <View>
      <Text>Activity indicator</Text>
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   alignItems: 'flex-start'
  }
});
