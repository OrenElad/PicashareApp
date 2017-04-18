/**
 * Created by oren on 18/04/2017.
 */
import React, { Component } from 'react';
import Login from './containers/Login';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
  View,
  Image,
  BackAndroid,
  //Icon,
  Alert
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Login/>
      </View>
    );
  }
}

AppRegistry.registerComponent("Picashare", () => App);
