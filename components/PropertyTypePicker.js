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
  render: function(){
    return(
      <View style={styles.container}>
      </View>
    );
  },
});

module.exports = PropertyTypePicker;
