/**
 * Created by oren on 13/05/2017.
 */
import React, { Component } from 'react';
import * as firebase from 'firebase';

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



class TwitterLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentWillMount(){

  };


  _login(){
    alert('Twitter Login');

  }

  _logout(){}
  render() {
    return (
      <TouchableOpacity onPress={this._login.bind(this)}>
        <Image
          style={styles.button}
          source={require('../../assets/Login/twitter-login.png')}
        />
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    marginBottom:30,
    left: 10
  },
  button: {
    width: 50,
    height: 50,
    left: 5,
    bottom:50
  }
});


export default TwitterLogin;