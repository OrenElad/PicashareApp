/**
 * Created by oren on 13/05/2017.
 */
import React, { Component } from 'react';
import * as firebase from 'firebase';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

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



class GooglePlusLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentWillMount(){
    this._setupGoogleSignin();
  };

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/games'],
        iosClientId: '536716819192-onh2q8tlpib1fb4dun0fse5vvkalo7ug.apps.googleusercontent.com',
        webClientId: '536716819192-onh2q8tlpib1fb4dun0fse5vvkalo7ug.apps.googleusercontent.com',
        offlineAccess: false

      });

      const user = await GoogleSignin.currentUserAsync();
      this.setState({user});
    }
    catch(err) {
      console.log("Google signin error", err.code, err.message);
    }
  }

  async _login() {
    try {
      const user = await GoogleSignin.signIn();
      const credential = firebase.auth.GoogleAuthProvider.credential(user.idToken, user.accessToken);
      const userData = await firebase.auth().signInWithCredential(credential);
      console.log('User data\n' + JSON.stringify(userData, null, 2));
      this.props.navigate('Categories');
      this.props.actions.login({authProvider: userData.providerId, authData: userData});
    } catch (err) {
      console.log('WRONG SIGNIN', err);
    }
    ;
  }

  //   GoogleSignin.signIn()
  //     .then((user) => {
  //       console.log(user);
  //       this.setState({user: user});
  //       const credential = firebase.auth.GoogleAuthProvider.credential(user.idToken, user.accessToken);
  //       console.log('Credential\n' +JSON.stringify(credential, null, 2));
  //
  //       // login with credential
  //       return firebase.auth().signInWithCredential(credential);
  //
  //     })
  //     .then((res) => {
  //       this.props.actions.login({authProvider:res.providerId, authData: res});
  //
  //       this.props.navigate('Categories');
  //     })
  //     .catch((err) => {
  //       console.log('WRONG SIGNIN', err);
  //     })
  //     .done();
  // }

  _logout(){
    GoogleSignin.signOut()
      .then(() => {
        console.log('out');
        this.props.actions.logout({authProvider:'Google', authData: 'logout'});

      })
      .catch((err) => {

      });

  }
  render() {
    return (
      <TouchableOpacity onPress={this._login.bind(this)}>
        <Image
          style={styles.button}
          source={require('../../assets/Login/google-plus-login.png')}
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


export default GooglePlusLogin;