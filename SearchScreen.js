'use strict';

var React = require('react-native');

var {
  TouchableOpacity,
  ScrollView,
  Stylesheet,
  Text,
  View
}  = React;


var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


var SearchScreen = React.createClass({
  render: function(){
    return(
      <View>
      <Text>
      ScreenSearch
      </Text>
      </View>
    )
  }

});

module.exports = SearchScreen;
