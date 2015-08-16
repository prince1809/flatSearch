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
        <View>
          <Text>
             React  #######
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
});

module.exports = TabBarButton;
