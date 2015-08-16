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
var PropertyTypePickerButton = require('./PropertyTypePickerButton.js');

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
            <PropertyTypePickerButton
              text='Single Family'
              icon='home'
              current={this.props.value}
              onPress={this.handleChange}/>

        </View>
      </View>
    );
  },
});

module.exports = PropertyTypePicker;
