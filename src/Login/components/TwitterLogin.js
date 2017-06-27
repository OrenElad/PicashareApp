/**
 * Created by oren on 13/05/2017.
 */
import React, { Component } from 'react';
import * as firebase from 'firebase';
import AUTH_PROVIDERS from '../../constants/appConfig';
import TwitterAuth from 'tipsi-twitter'


import {
  AsyncStorage,
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


class TwitterLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  };

  componentWillMount(){
     TwitterAuth.init({
        twitter_key: AUTH_PROVIDERS.TWITTER.CONSUMER_KEY,
        twitter_secret: AUTH_PROVIDERS.TWITTER.CONSUMER_SECRET,
      })
    // AsyncStorage.getItem('tokens')
    //   .then((tokens) => {
    //     if (tokens) {
    //       this.handleTokens(JSON.parse(tokens));
    //       console.log(tokens);
    //     }
    //   });
  };


  _login = async () => {
    try {
      const result = await TwitterAuth.login()
      const credential = firebase.auth.TwitterAuthProvider.credential(result.authToken, result.authTokenSecret);
      const userData = await firebase.auth().signInWithCredential(credential);
      console.log('User data\n' + JSON.stringify(userData, null, 2));

      console.log('User id:', JSON.stringify(result, null, 2));
      this.props.navigate('Categories');
    } catch (error) {
      console.log('Login error:', error)
    }
  }


  async _addUserToFirebase(){
    // try {
    //   const credential = await firebase.auth.TwitterAuthProvider.credential(this.state.tokens.consumerKey, this.state.tokens.consumerSecret);
    //   const userData = await firebase.auth().signInWithCredential(credential);
    //   console.log('User data\n' + JSON.stringify(userData, null, 2));
    //   this.props.navigate('Categories');
    // } catch (err) {
    //   console.log('WRONG SIGNIN', err);
    // };
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