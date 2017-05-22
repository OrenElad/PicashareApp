/**
 * Created by oren on 13/05/2017.
 */
import React, { Component } from 'react';

import {
  NativeModules,
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

// var { NativeModules } = React;

const { TwitterSignin } = NativeModules;


class TwitterLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentWillMount(){

  };


  _login(){
    TwitterSignin.logIn('Xw6ctfP8ha7R6m0A36saR1PXm', '2ja2VySCMTKOP0sZ7W2b2LDwoSL5U0TqMEzDdvbGiZ4e52cw0t', (error, loginData) => {
      if (!error) {
        console.log('Twitter logedin: ' +loginData);
      } else {
        Alert.alert('Invalid login', 'Unable to login');
      }
    });

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