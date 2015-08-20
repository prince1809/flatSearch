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

var parse = require('../parsing/index.js');
var globalVariables = require('../globalVariables.js');

var HouseDetails = React.createClass({
  getInitialState: function(){
    return{
      form: {},
      house: {},
      houseKV: null,
      images: null,
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    };
  },
  getDefaultProps: function(){
    return{
      form: {},
      house: {},
      houseKV: null,
      images: null,
    };
  },
  componentDidMount: function(){
    this.getRMLSDetail();
  },

  getRMLSDetail: function () {
		console.log('get detail', this.props.house.id);
		this.setState({ searchPending: true });

		fetch('http://www.rmls.com/rc2/engine/reportGenerator.asp', {
			method: 'post',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.104 Safari/537.36",
				"Referer": "http://www.rmls.com/rc2/UI/search_residential.asp",
			},
			body: 'NO=0&OBK=&OBD=DESC&RID=RC_DETAIL_001&FID=RC_SEARCH_RESIDENTIAL&PRPT=1&ID='+this.props.house.id+'&RPP=5&PMD=&P=1&T='+this.props.form.T
		})
		.then((response) => response.text())
		.then((responseText) => {
			//console.log('GOT RMLS DETAIL');
			 console.log(responseText);

			//this.processResults(responseText);
		})
		.catch(function (error) {
			console.error('An error occured');
			console.error(error.message);
		});
	},

  render: function(){
    return(
      <ScrollView>

      </ScrollView>
    );
  }

});

module.exports = HouseDetails;
