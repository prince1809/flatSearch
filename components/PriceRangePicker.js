'use strict'

var React = require('react-native');

var {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} = React;

var globalStyles = require('./SearchGlobalStyles.js');
//var PricePicker = require('./PricePicker.js');

var PriceRangePicker = React.createClass({
  getDefaultProps: function(){
    return{
      onChange: function(){},
      value:[]
    };
  },
  render: function(){
    return(
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}> Price Between </Text>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  divider: {
    height: 20,
    width: 1,
    backgroundColor: '#ccc'
  },
})

module.exports = PriceRangePicker;
