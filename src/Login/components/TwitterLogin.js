/**
 * Created by oren on 13/05/2017.
 */
import React, { Component } from 'react';
import * as firebase from 'firebase';

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

const { TwitterSignin } = NativeModules;

import AUTH_PROVIDERS from '../../constants/appConfig';

class TwitterLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentWillMount(){

  };


  async _login(){
    let token = '',
        secret = '',
        credential = '';

    let twitterPromise = new Promise((resolve, reject) => {
      console.log('1111');
      TwitterSignin.logIn(AUTH_PROVIDERS.TWITTER.CONSUMER_KEY, AUTH_PROVIDERS.TWITTER.CONSUMER_SECRET, (error, loginData) => {
        console.log('2222');
        if (!error) {
          token = loginData.authToken;
          secret = loginData.authTokenSecret;
          console.log('login data' + token + ' - ' +secret);
          resolve(token, secret);
        } else {
          Alert.alert('Invalid login', 'Unable to login');
          reject(error +'\nUnable to login');
        }
      });
    });

    try {
      await twitterPromise;
      console.log('3333');
      if(token && secret) credential = firebase.auth.TwitterAuthProvider.credential(token, secret);
      console.log('credential' + JSON.stringify(credential, null, 2));
      const userData = await firebase.auth().signInWithCredential(credential);
      console.log('userData' + JSON.stringify(userData.toJSON()));
      if (userData === 'cancelled') {
        console.log('Login cancelled');
      } else {
        // now signed in
        console.log(`the user: ${JSON.stringify(userData.toJSON())}`);
        this.props.navigate('Categories');
      }
    } catch(err) {
      console.log(`Twitter Error: ${err}`);
    }

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