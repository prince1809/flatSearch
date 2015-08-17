'use strict';

var React = require('react-native');

var{
  StyleSheet,
  Text,
  View,
  SliderIOS
} = React;

var globalStyles = require('./SearchGlobalStyles.js');

var NumberPicker = React.createClass({
  getDefaultProps: function(){
    return{
      onChange: function(){},
      label: 'Bedrooms (at least)',
      value: 1,
      varName: 'bedrooms'
    };
  },

  render: function(){
    return(
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}>{this.props.label}</Text>
        <View style={globalStyles.innerBox}>

        </View>
      </View>
    );
  }

});

module.exports = NumberPicker;
