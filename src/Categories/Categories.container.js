/**
 * Created by oren on 15/05/2017.
 */

import React, { Component } from 'react';
import {connect} from "react-redux";
import {Map} from "immutable";
import * as firebase from 'firebase';

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
    this.state = {
      userImage: null
    };
    this.userImage = '';
  };

  componentWillMount(){

  };

  componentWillReceiveProps(nextProps){
    // nextProps !== this.props && console.log(`--->>>> ${nextProps}`);
  };

  getUserImage() {
  }

  render() {
    return (
      <View>
        <Text>Categories</Text>
        <Image style={{width: 50, height: 50}} />
      </View>

    );
  }
}

var styles = StyleSheet.create({

});


export default Categories;