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
var globalVariables = require('../globalVariables.js');


var SearchResults = React.createClass({
  getInitialState: function(){
    return{
      dataSource: new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2}),
      house: [],
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

  queryRMLS: function(){
    var search = this.props.search;

    console.log(search);
  },
  render: function(){
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
