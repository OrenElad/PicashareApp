/**
 * Created by oren on 13/05/2017.
 */
import React, { Component } from 'react';
import * as firebase from 'firebase';
import deviceStorage from 'react-native-simple-store';

import AUTH_PROVIDERS from '../../constants/appConfig';
import TwitterAuth from 'tipsi-twitter'
import Spinner from 'react-native-spinkit';


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
    this.state = {
      isVisible: false,
      type: 'Wave',
      size: 100,
      color: "#FFFFFF",
    };
  }

  componentWillMount(){
     TwitterAuth.init({
        twitter_key: AUTH_PROVIDERS.TWITTER.CONSUMER_KEY,
        twitter_secret: AUTH_PROVIDERS.TWITTER.CONSUMER_SECRET,
      })
  };

componentWillUnmount() {
  this.setState({isVisible: false})
}
  _login = async () => {
    try {
      this.props.toggleSpinner // TODO
      this.setState({isVisible: true})
      const result = await TwitterAuth.login()
      const credential = firebase.auth.TwitterAuthProvider.credential(result.authToken, result.authTokenSecret);
      const userData = await firebase.auth().signInWithCredential(credential);
      console.log('User data\n' + JSON.stringify(userData, null, 2));
      // deviceStorage.set('TwitterUserData', userData);
      console.log('User id:', JSON.stringify(result, null, 2));
      userDate && this.props.navigate('Categories', userDate);
    } catch (error) {
      console.log('Login error:', error)
    }
  }

  _logout(){}

  render() {
    return (
      <TouchableOpacity onPress={this._login.bind(this)}>
        <Spinner 
          style={styles.spinner} 
          isVisible={this.state.isVisible} 
          size={this.state.size} 
          type={this.state.type} 
          color={this.state.color}/>
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
  },
  spinner: {
    marginBottom: 50
  },

});


export default TwitterLogin;