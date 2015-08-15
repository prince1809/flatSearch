'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS,
  PixelRatio,
} = React;

var globalVariables = require('../globalVariables.js');

var TabBarButton = React.createClass({

  render: function(){
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
