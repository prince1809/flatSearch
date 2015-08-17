'use strict';

var React = require('react-native');
var _ = require('lodash');

var {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} = React;

var globalStyles = require('./SearchGlobalStyles.js');

var globalVariables = require('../globalVariables.js');

var ZipCodeEntry = React.createClass({
  getDefaultProps: function(){
    return{
        onChange: function(){},
        value: null,
    };
  },

  render: function(){
    return(
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}>Zip Codes </Text>
        <View style={[globalStyles.innerBox,styles.innerBox]}>
            <View style={styles.zipCodeBoxes}>
              {this.props.value.map((zip,index) =>
                    <ZipCodeBox value={zip} key={index} index={index} onRemove={this.handleZipRemove} />
              )}
            </View>
        </View>
      </View>
    );
  },
  handleZipAddition: function(value){
    var zips = (_.clone(this.props.value) || []);
    zips.push(value);
    this.props.onChange('zipCodes',zips);
  },
});

var ZipCodeBox = React.createClass({
  getDefaultProps: function(){
    return{
      value: null,
      index: 0,
      onRemove: function(){}
    };
  },

  render: function(){
    return(
      <View style={styles.zipView}>
      </View>
    );
  }
});


var styles = StyleSheet.create({
    innerBox: {
      flexDirection: 'column'
    },
    zipCodeBoxes: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    zipView: {
      backgroundColor: '#F9F9F9',
      borderRadius: 2,
      padding: 10,
      paddingLeft: 15,
      paddingRight: 30,
      margin: 5,
    },
    ZipText: {
      color: globalVariables.green,
      fontSize: 18
    }
});


module.exports = ZipCodeEntry;
