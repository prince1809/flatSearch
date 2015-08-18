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
          keyboardDismissMode="onDrag"
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
  }
});

module.exports = SearchResults;
