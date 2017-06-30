import React from 'react';
import { View, Text, DrawerLayoutAndroid, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { toggleDrawer } from '../../../../drawer';

class MainComponent extends React.Component {
  drawerRef = null

  componentDidMount() {
    this.toggleDrawer(this.props.open, this.drawerRef);
  }

  componentDidUpdate() {
    this.toggleDrawer(this.props.open, this.drawerRef);
  }

  toggleDrawer(open, drawerRef) {
    if (open) {
      return drawerRef.openDrawer();
    }

    return drawerRef.closeDrawer();
  }

  initDrawer(ref) {
    this.drawerRef = ref;
  }

  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Sidebar menu</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        onDrawerOpen={() => toggleDrawer({ open: true })}
        onDrawerClose={() => toggleDrawer({ open: false })}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        ref={ref => this.initDrawer(ref)} >
        {this.props.children}
      </DrawerLayoutAndroid>
    );
  }
}

const MainContainer = connect(
  state => {
    let props = {
      open: state.drawer.open
    };

    return props;
  }
)(MainComponent);

export default MainContainer;
