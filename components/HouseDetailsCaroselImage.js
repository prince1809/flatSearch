'use strict';

var React = require('react-native');

var{
  StyleSheet,
  Image,
  View,
} = React;


var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');


var HouseDetailsCaroselImage = React.createClass({

  getDefaultProps: function(){
    return{
      image: ''
    };
  },
  render: function(){
    return(
      <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: this.props.image}} />
      </View>
    );
  },

});


var styles = StyleSheet.create({
  container:{
    height: 240,
    width: width,
  },
  image: {
    height: 240,
    resizeMode: Image.resizeMode.cover,
  }
});

module.exports = HouseDetailsCaroselImage;
