'use strict';

var React = require('react-native');

var {
  NavigatorIOS,
  StyleSheet
} = React;


var globalVariables = require('./globalVariables.js');

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var ScreenNavigator = React.createClass({
  render: function(){

  }
});


var styles = StyleSheet.create({

  render: function(){
    return(
      <NavigatorIOS
            style={styles.container}
            tintColor= {globalVariables.green}
            initialRoute={this.props}
            />
    );
  },

});

module.exports = ScreenNavigator;
