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

      </View>
      </View>
    );
  }
});


module.exports = BuiltRangePicker;
