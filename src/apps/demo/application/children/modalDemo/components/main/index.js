import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Button, StyleSheet } from 'react-native';

export default class extends Component {

  state = {
    modalVisible: false,
    animationType: 'slide'
  }

  setModalVisible(visible, type) {
    this.setState({animationType: type});
    setTimeout(() => this.setState({modalVisible: visible}), 100)
  }

  render() {
    return (
      <View>
        <Text>Modals</Text>
        <Modal
          animationType={this.state.animationType}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <View style={styles.modalContentOverlay}>
            <View style={styles.modalContent}>
              <Text>Close me</Text>

              <View style={styles.openButtonContainer}>

                <Button
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible)
                  }}
                  title="Close modal"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button" />

              </View>
            </View>
          </View>
          
        </Modal>

        <View style={styles.openButtons}>
          <View style={styles.openButtonContainer}>
            <Button
            onPress={() => {
              this.setModalVisible(true, 'slide')
            }}
            title="Open modal slide"
            color="#841584"
            accessibilityLabel="Learn more about this purple button" />
          </View>

          <View style={styles.openButtonContainer}>
            <Button
            onPress={() => {
              this.setModalVisible(true, 'fade')
            }}
            title="Open modal fade"
            color="#841584"
            accessibilityLabel="Learn more about this purple button" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  openButtonContainer: {
   width: 150,
   marginRight: 10
  },
  modalContentOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  modalContent: {
    marginTop: 22,
    padding: 10,
    width: 200,
    height: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  openButtons: {
    flexDirection: 'row'
  }
});

