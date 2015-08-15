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

var TabBarButton = require('./components/TabBarButton.js');
var flatSearch = React.createClass({

  getInitialState: function(){
    return{
      tab: 'search'
    };
  },

  render: function() {

    var screenElement;

  /*  if(this.state.tab == 'saved')
       screenElement = (<ScreenNavigator title='Saved' component={SavedScreen} key='saved' />);
   else
      screenElement = (<ScreenNavigator title='Search' component={SearchScreen} key='search' />);
      */

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('flatSearch', () => flatSearch);
