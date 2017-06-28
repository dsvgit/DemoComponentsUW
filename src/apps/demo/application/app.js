import React from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar } from 'react-native';

import PickerDemo from './children/pickerDemo/components/main';
import ButtonsDemo from './children/buttonsDemo/components/main';
import ActivityIndicatorDemo from './children/activityIndicatorDemo/components/main';
import ImageDemo from './children/imageDemo/components/main';
import ListViewDemo from './children/listViewDemo/components/main';
import ModalDemo from './children/modalDemo/components/main';
import ProgressBarDemo from './children/progressBarDemo/components/main';
import SliderDemo from './children/sliderDemo/components/main';
import SwitchDemo from './children/switchDemo/components/main';
import TextInputDemo from './children/textInputDemo/components/main';
import ViewPagerDemo from './children/viewPagerDemo/components/main';
import ToolbarDemo from './children/toolbarDemo/components/main';

export default props => {
  return (
    <View style={styles.container}>
      <ToolbarDemo />
      <ScrollView>
        <View style={styles.scrollContainer}>
          <ViewPagerDemo />
          <TextInputDemo />
          <SwitchDemo />
          <SliderDemo />
          <ProgressBarDemo />
          <ButtonsDemo />
          <ActivityIndicatorDemo />
          <ImageDemo />
          <ListViewDemo />
          <ModalDemo />
          <PickerDemo />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#5E6D48" barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    alignSelf: 'stretch',
    padding: 10,
    paddingBottom: 70,
    backgroundColor: '#F5FCFF',
  }
});
