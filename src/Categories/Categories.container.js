/**
 * Created by oren on 15/05/2017.
 */

import React, { Component } from 'react';
import {connect} from "react-redux";
import {Map} from "immutable";
import * as firebase from 'firebase';
import deviceStorage from 'react-native-simple-store';

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
      isImageExist: false,
      userImage: null
    };
    this.userImage = '';
    this.userData = ['FacebookUserData', 'TwitterUserData', 'GooglePlusUserData'];

  };

  componentWillMount(){
    
  };

  componentWillReceiveProps(nextProps){
        
  };

  render() {
    const { params } = this.props.navigation.state;
    const userImage = params.photoURL;
    return (
      <View style={styles.container}>
        {userImage && <Image style={styles.userImage} source={{uri: userImage.replace(/^http:\/\//i, 'https://')}}/>}
      </View>

    );
  }
}

var styles = StyleSheet.create({
 container: {
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    backgroundColor: 'white'
  },
  userImage: {
    left:5,
    width: 50, 
    height: 50,
    borderRadius: 50
  }
});


export default Categories;