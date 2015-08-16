'use strict';

var React = require('react-native');

var {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View
}  = React;


var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var PropertyTypePicker = require('./components/PropertyTypePicker.js');

var globalVariables = require('./globalVariables.js');


var SearchScreen = React.createClass({
  render: function(){
    return(
      <ScrollView style={styles.container}>
        <View style={styles.page}>
          
        </View>
      </ScrollView>
    )
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: globalVariables.background
  },
  page:{
    paddingBottom: 50
  },
  searchButton: {
    padding: 14,
    backgroundColor: globalVariables.green,
  },
  searchButtonText: {
    padding: 14,
    color: 'white',
    textAlign: 'center'
  }
});

module.exports = SearchScreen;
