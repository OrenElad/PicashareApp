/**
 * Created by oren on 18/04/2017.
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';


import LoginPreview from './components/LoginPreview';
import GooglePlusLogin from './components/GooglePlusLogin';
import FacebookLogin from './components/FacebookLogin';
import TwitterLogin from './components/TwitterLogin';

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

  render() {
    return (
      <View style={{flex:1,top: 30, flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
        <LoginPreview/>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <FacebookLogin navigate={this.props.navigate}/>
          <GooglePlusLogin navigate={this.props.navigate}/>
          <TwitterLogin navigate={this.props.navigate}/>
        </View>
      </View>
    );
  }
}


var styles = StyleSheet.create({

});


export default Login;