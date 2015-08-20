'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Image,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity
} = React;

var _ = require('lodash');

var SaveButton = React.createClass({

  getInitialState: function(){
    return{
      saved: false
    };
  },
  getDefaultProps: function(){
    return{
      data: {}
    };
  },

  render: function(){
    var image = <Image source={require('image!Heart')} style={styles.image} />;

    if(this.state.saved){
      image = <Image source={require('image!Heart-Selected')} style={styles.image} />;
    }
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          {image}
        </TouchableOpacity>
      </View>
    );
  }

});

var styles = StyleSheet.create({

  container: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  image:{
    width: 29,
    height: 26
  }

});

module.exports = SaveButton;
