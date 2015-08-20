'use strict';

var React = require('react-native');

var {
  ActivityIndicatorIOS,
  ListView,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View
} = React;

var HouseCell = require('./HouseCell.js');
var HouseDetails = require('./HouseDetails.js');

var parse = require('../parsing/index.js');

var globalVariables = require('../globalVariables.js');


var SearchResults = React.createClass({
  getInitialState: function(){
    return{
      dataSource: new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2}),
      houses: [],
      filter: '',
      searchPending: true
    };
  },

  getDefaultProps: function(){
    return{
      search: {
        priceRange: [],
        builtRange: [],
        bedrooms  : [],
        bathrooms : [],
        zipCodes  : []
      }

    };
  },
  componentDidMount: function(){
    this.queryRMLS();
  },
  renderFooter: function(){
    if(!this.state.next && !this.state.searchPending){
      return(
        <View style={styles.doneView}>
          <Image source={require('image!foxy')} style={styles.doneImage} />
        </View>
      )
    }
    return <ActivityIndicatorIOS style={styles.scrollSpinner} />;
  },
  renderRow: function(house){
    return(
      <HouseCell
        onSelect={() => this.selectHouse(house)}
        key={house.id}
        house={house}
        />
    );

  },

  selectHouse: function(house){
    console.log(house);

    this.props.navigator.push({
      component: HouseDetails,
      title: 'Details',
      passProps: {
        house: house,
        form: this.state.form
      },
    });

  },

  queryRMLS: function(){

    var search = this.props.search;

    var options = [
			'ReportID=RC_RESULT',
			'SearchType=RC',
			'FormID=RC_SEARCH_RESIDENTIAL',
			'FormURL=%2Frc2%2FUI%2Fsearch_residential.asp',
			'PropType=1',
			'STATE_ID=..%2F..%2FRC2%2FUI%2Fsearch_residential.asp',
			'PROPERTY_TYPE='+encodeURIComponent(search.propertyType || ''),
			'PRICE='+encodeURIComponent(search.priceRange[0] || ''),
			'PRICE='+encodeURIComponent(search.priceRange[1] || ''),
			'INCLUDE_AUCTION=3',
			'STATUS=ACT',
			'STATUS=BMP',
			'YEAR_BUILT='+encodeURIComponent(search.builtRange[0] || ''),
			'YEAR_BUILT='+encodeURIComponent(search.builtRange[1] || ''),
			'BEDROOMS='+encodeURIComponent(search.bedrooms[0] || ''),
			'BEDROOMS='+encodeURIComponent(search.bedrooms[1] || ''),
			'BATHROOMS='+encodeURIComponent(search.bathrooms[0] || ''),
			'BATHROOMS='+encodeURIComponent(search.bathrooms[1] || ''),
			'ZIP='+encodeURIComponent(search.zipCodes[0] || ''),
			'ZIP='+encodeURIComponent(search.zipCodes[1] || ''),
			'ZIP='+encodeURIComponent(search.zipCodes[2] || ''),
			'ZIP='+encodeURIComponent(search.zipCodes[3] || ''),
			'SQFT=',
			'SQFT=',
			'ACRES=',
			'ACRES=',
			'SCHOOL_TYPE=Elementary',
			'SCHOOL_NAME=',
			'ACCESSIBILITY_YN=',
			'OHBT_DATE=',
			'COUNTY=',
			'CITY=172',
			'BANK_OWNED_YN=',
			'SHORT_SALE_YN=',
		];

    this.setState({
      searchPending: true
    });

    var serialized = options.join('&');

		fetch('http://www.rmls.com/rc2/engine/sqlGenerator_RmlsCom.asp', {
			method: 'post',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.104 Safari/537.36",
				"Referer": "http://www.rmls.com/rc2/UI/search_residential.asp"
			},
			body: serialized
		})
		.then((response) => response.text())
		.then((responseText) => {
      //console.log(responseText);
			this.processsResults(responseText);

		})
		.catch(function (error) {
			console.error('An error occured');
			console.error(error.message);
		});
  },

  processsResults: function(html){
    var data = parse.SearchResults(html);

    //cancel out if no data was found
    if(!data.houses.length)
          return;

   var newHouses = this.state.houses.concat(data.houses);

   this.setState({
     houses: newHouses,
     searchPending: false,
     dataSource: this.getDataSource(newHouses),
     form: data.form,
     next: data.next
   });

  },
  getDataSource: function(houses){
    return this.state.dataSource.cloneWithRows(houses);
  },
  render: function(){
    if(!this.state.searchPending && !this.state.houses.length){
      return(
        <View style={styles.container}>
          <SearchNoResults />
        </View>
      );
    }
    return(
      <View style={styles.container}>
        <ListView
          ref="listview"
          dataSource={this.state.dataSource}
          renderFooter={this.renderFooter}
          renderRow={this.renderRow}
          onEndReached= {this.onEndReached}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps={false}
          showsVerticalScrollIndicator={true}
          />
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: globalVariables.background,
  },
  centerText : {
    alignItems: 'center'
  },
  spinner: {
    width: 30
  },
  scrollSpinner: {
    marginVertical: 20
  },
  doneView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  doneImage: {
    width: 302 / 5,
    height: 252 / 5
  },
});

module.exports = SearchResults;
