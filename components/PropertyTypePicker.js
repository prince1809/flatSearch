'use strict';

var React = require('react-native');

var {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} = React;

var styles = require('./SearchGlobalStyles.js');

var PropertyTypePicker = React.createClass({
  getDefaultProps: function(){
    return{
      onChange:function(){},
      value: null
    };
  },
  render: function(){
    return(
      <View style={styles.container}>
        <Text style={styles.label}>Property Type</Text>
        <View style={styles.innerBox}>
          
        </View>
      </View>
    );
  },
});

module.exports = PropertyTypePicker;
