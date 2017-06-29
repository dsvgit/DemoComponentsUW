import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default props => {
  return (
    <View>
      <Text>Image</Text>
      <Image
          style={styles.image}
          source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 100
  }
});
