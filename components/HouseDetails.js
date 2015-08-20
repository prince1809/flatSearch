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

var HouseDetailsCaroselImage = require('./HouseDetailsCaroselImage.js');

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
			console.log('GOT RMLS DETAIL');
			 //console.log(responseText);

			this.processResults(responseText);
		})
		.catch(function (error) {
			console.error('An error occured');
			console.error(error.message);
		});
	},

  processResults: function(html){
    var data = parse.HouseDetail(html);
    if(this.props.house.specs && this.props.house.specs.Address)
      this.geocodeAddress(this.props.house.specs.Address);
  },

  geocodeAddress: function(address){
    fetch(globalVariables.geocodeServer + '?address='+encodeURIComponent(address))
    .then((response) => response.json())
    .then((response) => {
      if(!_.isArray(response.results)) return;

      var location = response.results[0].geometry.location;

      this.setState({
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

    })
    .catch(function(error){
      console.log('An error occured');
      console.log(error.message);
    });
  },

  render: function(){

    var images = this.props.images || this.state.images || [this.props.house.image] || [];
    
    var caroselImages = [];
    _.each(images,function(item){
      caroselImages.push(
        <HouseDetailsCaroselImage image={item} key={item} />
      );
    });

    return(
      <ScrollView
       scrollsToTop={true}
       style={styles.container}>
       <ScrollView
       alwaysBounceHorizontal={true}
       alwaysBounceVertical={false}
       automaticallyAdjustContentInsets={false}
       showsVerticalScrollIndicator={false}
       horizontal={true}
       pagingEnabled={true}
       scrollsToTop={false}
       bounces={false}
       contentOffSet={{x:0, y:0}}
       contentContainerStyle={[styles.carosel,{width: caroselImages.length*width}]}>
       {caroselImages}
       </ScrollView>

      </ScrollView>
    );
  }

});

var styles = StyleSheet.create({
  container:{
    backgroundColor: globalVariables.background,
  }
});

module.exports = HouseDetails;
