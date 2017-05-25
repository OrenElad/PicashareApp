/**
 * Created by oren on 13/05/2017.
 */
import React, { Component } from 'react';
import * as firebase from 'firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';

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
    this.state = {};
  };

  componentWillMount(){

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
      const currentUser = await  firebase.auth().signInWithCredential(credential);
      if (currentUser === 'cancelled') {
        console.log('Login cancelled');
      } else {
        // now signed in
        console.log(`the user: ${JSON.stringify(currentUser.toJSON())}`);
        this.props.navigate('Categories');
      }
    } catch (err) {
      console.log(`Login fail with error: ${error}`);
    }
  }
    // {/*LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends'])*/}
    //   {/*.then((result) => {*/}
    //     {/*if (result.isCancelled) {*/}
    //       {/*return Promise.resolve('cancelled');*/}
    //     {/*}*/}
    //     {/*console.log(`Login success with permissions: ${JSON.stringify(result, null, 2)}`);*/}
    //     {/*// get the access token*/}
    //     {/*return AccessToken.getCurrentAccessToken();*/}
    //   {/*})*/}
    //   .then(data => {
    //     // create a new firebase credential with the token
    //     const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
    //     console.log('credential' +JSON.stringify(credential, null, 2));
    //     // login with credential
    //     return firebase.auth().signInWithCredential(credential);
    //   })
    //   .then((currentUser) => {
    //     if (currentUser === 'cancelled') {
    //       console.log('Login cancelled');
    //     } else {
    //       // now signed in
    //       console.log(`the user: ${JSON.stringify(currentUser.toJSON())}`);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(`Login fail with error: ${error}`);
    //   });

  // }

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