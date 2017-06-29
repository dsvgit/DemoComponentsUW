import React from 'react';
import { View, Text, ViewPagerAndroid, StyleSheet } from 'react-native';

export default class extends React.Component {

  render() {
    {
      return (
        <View>
          <Text>View pager</Text>
          <ViewPagerAndroid
            style={styles.viewPager}
            initialPage={0}>
            <View style={styles.pageStyle}>
              <Text>First page</Text>
            </View>
            <View style={styles.pageStyle}>
              <Text>Second page</Text>
            </View>
          </ViewPagerAndroid>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    height: 100,
    backgroundColor: '#fff'
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
    height: 100,
  }
});
