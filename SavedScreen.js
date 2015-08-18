'use strict';

var React = require('react-native');

var {
  AcitivityIndicatorIOS,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage
} = React;

var _ = require('lodash');

var Dimensions = require('Dimensions');
var { width, height} = Dimensions.get('window');

var SavedScreen = React.createClass({
  getInitialState: function(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return{
      dataSource: ds.cloneWithRows([]),
      loading: false,
      data: [],
      loadTime: 0
    };
  },

  getDefaultProps: function(){
    return{
      tabClickTime: 0,
    };
  },

  render: function(){
    return(
      <View style={styles.container}>
      
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    height: height
  }
});

module.exports = SavedScreen;
