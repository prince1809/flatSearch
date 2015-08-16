'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} = React;

var globalVariables = require('../globalVariables.js');

var TabBarButton = React.createClass({

  render: function(){

    var icon;
    var isSelected  = (this.props.tab == this.props.selected);


    return(
      <TouchableWithoutFeedback onPress={this.handlePress}>
        <View style={styles.button}>
          <Image style={styles.icon} source={icon} />
          <Text style={[styles.text, isSelected && styles.textActive]}>{this.props.label}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
});


var styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 49,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24
  },
  text: {
    fontSize: 10,
    color: globalVariables.textColor,
    textAlign: 'center'
  },
  textActive: {
    color: globalVariables.green,
  }

})
module.exports = TabBarButton;
