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



class SplashScreen extends Component {
    constructor(props) {
        super(props);
    };

    componentWillMount() {
      const {navigate} = this.props.navigation;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(`USER: ${JSON.stringify(user, null, 2)}`)
          navigate('Categories');
        } else {
          navigate('Login')
        }
      });
    }


  render() {
    return (<View/>);
  }
}

export default SplashScreen;