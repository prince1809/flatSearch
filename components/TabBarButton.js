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
      <View>
      <Text>
          Welcome to React Native!
      </Text>
      </View>
    );
  }
});

module.exports = TabBarButton;
