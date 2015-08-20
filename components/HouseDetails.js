'use strict';

var React = require('react-native');

var {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  MapView,
} = React;

var _ = require('lodash');
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var globalVariables = require('../globalVariables.js');

var HouseDetails = React.createClass({
  getInitialState: function(){
    return{
      form: {},
      house: {},
      houseKV: null,
      images: null,
    };
  },
  render: function(){
    return(
      <ScrollView>
      
      </ScrollView>
    );
  }

});

module.exports = HouseDetails;
