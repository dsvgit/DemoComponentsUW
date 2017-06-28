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

export default props => {
  return (
    <ScrollView style={styles.container}>
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
      <StatusBar backgroundColor="#5E8D48" barStyle="light-content" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch'
  }
});
