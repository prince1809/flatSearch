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
              value='DETACHD'
              current={this.props.value}
              onPress={this.handleChange}/>

            <PropertyTypePickerButton
                text='Condo'
                icon='condo'
                value='CONDO'
                current={this.props.value}
                onPress={this.handleChange}/>

            <PropertyTypePickerButton
                text='Multi Family'
                icon='multi'
                value='ATTACHD'
                current={this.props.value}
                onPress={this.handleChange}/>

        </View>
      </View>
    );
  },
});

module.exports = PropertyTypePicker;
