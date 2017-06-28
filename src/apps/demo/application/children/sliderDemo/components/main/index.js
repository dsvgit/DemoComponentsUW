var React = require('react');
var ReactNative = require('react-native');
var {
  Slider,
  Text,
  StyleSheet,
  View,
} = ReactNative;

export default React.createClass({
  getDefaultProps() {
    return {
      value: 0,
    }
  },

  getInitialState() {
    return {
      value: this.props.value,
    };
  },

  render() {
    return (
      <View>
        <Text>Slider</Text>
        <Text style={styles.text} >
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
    );
  }
});

var SlidingCompleteExample = React.createClass({
  getInitialState() {
    return {
      slideCompletionValue: 0,
      slideCompletionCount: 0,
    };
  },

  render() {
    return (
      <View>
        <SliderExample
          {...this.props}
          onSlidingComplete={(value) => this.setState({
              slideCompletionValue: value,
              slideCompletionCount: this.state.slideCompletionCount + 1})} />
        <Text>
          Completions: {this.state.slideCompletionCount} Value: {this.state.slideCompletionValue}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});

exports.title = '<Slider>';
exports.displayName = 'SliderExample';
exports.description = 'Slider input for numeric values';
exports.examples = [
  {
    title: 'Default settings',
    render(): ReactElement<any> {
      return <SliderExample />;
    }
  },
  {
    title: 'Initial value: 0.5',
    render(): ReactElement<any> {
      return <SliderExample value={0.5} />;
    }
  },
  {
    title: 'minimumValue: -1, maximumValue: 2',
    render(): ReactElement<any> {
      return (
        <SliderExample
          minimumValue={-1}
          maximumValue={2}
        />
      );
    }
  },
  {
    title: 'step: 0.25',
    render(): ReactElement<any> {
      return <SliderExample step={0.25} />;
    }
  },
  {
    title: 'onSlidingComplete',
    render(): ReactElement<any> {
      return (
        <SlidingCompleteExample />
      );
    }
  },
  {
    title: 'Custom min/max track tint color',
    platform: 'ios',
    render(): ReactElement<any> {
      return (
        <SliderExample
          minimumTrackTintColor={'red'}
          maximumTrackTintColor={'green'}
        />
      );
    }
  }
];