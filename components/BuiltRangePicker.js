'use strict';

var React = require('react-native');

var {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} = React;

var globalStyles = require('./SearchGlobalStyles.js');
var YearPicker = require('./YearPicker.js');


var BuiltRangePicker = React.createClass({
  getDefaultProps: function(){
    return{
      onChange: function(){},
      value: []
    };
  },
  render:function(){
    return(
      <View style={globalStyles.container}>
      <Text style={globalStyles.label}>Built Between </Text>
      <View style={globalStyles.innerBox}>
          <YearPicker label='Earliest Date' onChange={this.handleStartChange} value={this.props.value[0]} />
          <YearPicker label='Latest Date' onChange={this.handleEndChange} value={this.props.value[1]} />
      </View>
      </View>
    );
  }
});


module.exports = BuiltRangePicker;
