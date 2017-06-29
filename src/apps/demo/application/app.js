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
import TabsDemo from './children/tabsDemo/components/main';
import Drawer from './children/drawer/components/main';

import Demo from './children/demos/components/main';

export default props => {
  return (
    <Drawer style={styles.container}>
      <ToolbarDemo />
      <TabsDemo />
      <StatusBar backgroundColor="#5E6D48" barStyle="light-content" />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    alignSelf: 'stretch',
    padding: 10,
    backgroundColor: '#F5FCFF',
  }
});
