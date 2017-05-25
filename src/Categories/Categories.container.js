/**
 * Created by oren on 15/05/2017.
 */

import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Map} from "immutable";

import { StackNavigator } from 'react-navigation';
// import * as authActions from "../redux/categories/categories.action";

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

  componentWillReceiveProps(nextProps){
    // nextProps !== this.props && console.log(`--->>>> ${nextProps}`);
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