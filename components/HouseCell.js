'use strict';

var React = require('react-native');

var {
  ActivityIndicatorIOS,
  View,
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableHighlight
} = React;

var globalVariables = require('../globalVariables.js');

var Dimensions = require('Dimensions');
var { width, height} = Dimensions.get('window');

var HouseCell = React.createClass({
  getDefaultProps: function(){
    return{
      house: {},
      type: 'search'
    };
  },
  render: function(){
    var ribbonBox = (
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>
          {this.props.house.specs.Price}
        </Text>
      </View>
    );
    return(
      <View style={styles.item}>
        <ActivityIndicatorIOS style={styles.spinner} />
        <TouchableHighlight underlayColor={'#fafafa'} activeOpacity={0.9} onPress={this.props.onSelect}>
          <Image
            style={styles.image}
            source={{uri: this.props.house.image}}>
              {ribbonBox}
              <View style={styles.detailContainer}>
                <Text style={styles.addressText} numberOfLines={1}>{this.props.house.specs.Address}</Text>

              </View>
          </Image>
        </TouchableHighlight>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  item:{
    backgroundColor: 'white',
    margin: 28,
    marginTop: 20,
    marginBottom: 20,
    padding: 0,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    height: 240
  },
  spinner:{
    position: 'absolute',
    left: (width/2)-20,
    top: 90
  },
  image: {
    height: 240,
    resizeMode: Image.resizeMode.cover,
  },
  priceContainer:{
    position: 'absolute',
    backgroundColor: globalVariables.green,
    padding: 5,
    top: 6,
    left: 0,
    height: 30,
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  priceText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  detailContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    height: 70,
    padding: 10,
  },
  addressText: {
    color: globalVariables.textColor,
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center'
  }
});

module.exports = HouseCell;
