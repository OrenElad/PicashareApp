/**
 * Created by oren on 15/05/2017.
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

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



class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentWillMount(){

  };

  render() {
    return (
      <View>
        <Text>Categories</Text>
      </View>

    );
  }
}

var styles = StyleSheet.create({

});


export default Categories;