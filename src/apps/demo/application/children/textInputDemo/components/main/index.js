import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default class extends React.Component {

  state = {
    text: 'default text'
  }

  render() {
    {
      return (
        <View>
          <Text>Text input</Text>
          <Text>different keyboards can be used</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{width: 150}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
          </View>
        </View>
      );
    }
  }
}
