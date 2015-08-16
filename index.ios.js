/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS,
  PixelRatio,
} = React;

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var TabBarButton = require('./components/TabBarButton.js');
var ScreenNavigator = require('./ScreenNavigator.js');

var SearchScreen  = require('./SearchScreen.js');
var SavedScreen = require('./SavedScreen.js');
var flatSearch = React.createClass({

  getInitialState: function(){
    return{
      tab: 'search'
    };
  },

  render: function() {

    var screenElement;

    if(this.state.tab == 'saved')
       screenElement = (<ScreenNavigator title='Saved' component={SavedScreen} key='saved' />);
   else
      screenElement = (<ScreenNavigator title='Search' component={SearchScreen} key='search' />);


    return (
      <View style={styles.app}>
        <View style={styles.tabbar}>
          <TabBarButton tab='search' label='Homes' selected={this.state.tab} onChange={this.handleSelect}/>
          <TabBarButton tab='saved' label='Homes' selected={this.state.tab} onChange={this.handleSelect}/>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  app :{
    width, height
  },

  tabbar: {
    width: width,
    height: 49,
    shadowColor: 'black',
    shadowOffset: { height: -2, width: 0},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('flatSearch', () => flatSearch);
