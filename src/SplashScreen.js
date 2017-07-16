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
        this.state = {
          isVisible: true,
          type: 'CircleFlip',
          size: 100,
          color: "#209AE7",
        }
    };

    componentWillMount() {
      const {navigate} = this.props.navigation;
      firebase.auth().onAuthStateChanged(function(userData) {
        if (userData) {
          console.log(`USER: ${JSON.stringify(userData, null, 2)}`)
          navigate('Categories', userData);
        } else {
          navigate('Login')
        }
      });
    }


  render() {
    return (<View>
            </View>);
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d35400',
  },
  btn: {
    marginTop: 20
  },

  text: {
    color: "white"
  }
});


export default SplashScreen;