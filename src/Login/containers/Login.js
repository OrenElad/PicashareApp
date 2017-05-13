/**
 * Created by oren on 18/04/2017.
 */
import React, { Component } from 'react';


import LoginPreview from '../components/LoginPreview';
import GooglePlusLogin from '../components/GooglePlusLogin';
import FacebookLogin from '../components/FacebookLogin';
import TwitterLogin from '../components/TwitterLogin';

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


class Login extends Component {
  constructor(props) {
    super(props);

  };

  componentWillMount(){

  };

  componentWillReceiveProps(nextProps){

  };

  _login(socialNetwork){
    switch(socialNetwork) {
      case 'FACEBOOK':


        break;
      case 'GOOGLE_PLUS':


        break;
      case 'TWITTER':
        alert('TWITTER');
        break;
      default:
        alert('Default');
    }

  }

  render() {
    return (
      <View style={{flex:1,top: 30, flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
        <LoginPreview/>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <FacebookLogin/>
        <GooglePlusLogin/>
        <TwitterLogin/>
        </View>
      </View>
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


export default Login;