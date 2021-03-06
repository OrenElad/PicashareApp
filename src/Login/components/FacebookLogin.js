/**
 * Created by oren on 13/05/2017.
 */
import React, { Component } from 'react';
import * as firebase from 'firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import deviceStorage from 'react-native-simple-store';

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



class FacebookLogin extends Component {
  constructor(props) {
    super(props);
  };

  async _login() {
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends'])
      if (result.isCancelled) {
        return Promise.resolve('cancelled');
      }
      console.log(`Login success with permissions: ${JSON.stringify(result, null, 2)}`);
      // get the access token
      const data = await AccessToken.getCurrentAccessToken();
      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
      console.log('credential' + JSON.stringify(credential, null, 2));
      // login with credential
      const userData = await  firebase.auth().signInWithCredential(credential);
      if (userData === 'cancelled') {
        console.log('Login cancelled');
      } else {
        // now signed in
        console.log(`the user: ${JSON.stringify(userData.toJSON())}`);
        deviceStorage.set('FacebookUserData', userData);
        this.props.navigate('Categories', userDate);
      }
    } catch (err) {
      console.log(`Login fail with error: ${error}`);
    }
  }

  _logout(){}

  render() {
    return (
      <TouchableOpacity onPress={this._login.bind(this)}>
        <Image
          style={styles.button}
          source={require('../../assets/Login/facebook-login.png')}
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


export default FacebookLogin;