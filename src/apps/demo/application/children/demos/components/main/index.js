import React from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar } from 'react-native';

import PickerDemo from '../../../pickerDemo/components/main';
import ButtonsDemo from '../../../buttonsDemo/components/main';
import ActivityIndicatorDemo from '../../../activityIndicatorDemo/components/main';
import ImageDemo from '../../../imageDemo/components/main';
import ListViewDemo from '../../../listViewDemo/components/main';
import ModalDemo from '../../../modalDemo/components/main';
import ProgressBarDemo from '../../../progressBarDemo/components/main';
import SliderDemo from '../../../sliderDemo/components/main';
import SwitchDemo from '../../../switchDemo/components/main';
import TextInputDemo from '../../../textInputDemo/components/main';
import ViewPagerDemo from '../../../viewPagerDemo/components/main';
import ToolbarDemo from '../../../toolbarDemo/components/main';
import TabsDemo from '../../../tabsDemo/components/main';

export default props => {
  return (
    <ScrollView>
      <View style={styles.scrollContainer}>
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
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    alignSelf: 'stretch',
    padding: 10,
    backgroundColor: '#F5FCFF',
  }
});
