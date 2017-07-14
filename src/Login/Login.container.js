/**
 * Created by oren on 18/04/2017.
 */
import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Map} from "immutable";

import LoginPreview from './components/LoginPreview';
import GooglePlusLogin from './components/GooglePlusLogin';
import FacebookLogin from './components/FacebookLogin';
import TwitterLogin from './components/TwitterLogin';
import Spinner from 'react-native-spinkit';

// import * as authActions from "../redux/auth/auth.action";
import * as firebase from 'firebase';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
  View,
  Image,
  BackAndroid,
  StatusBar,
  Alert
} from 'react-native';

this.firebaseConfig = {
    apiKey: "AIzaSyDOc48VJls4dUJ26DepEtmQw9JUssWSTw0",
    authDomain: "picashare-7bc92.firebaseapp.com",
    databaseURL: "https://picashare-7bc92.firebaseio.com",
    projectId: "picashare-7bc92",
    storageBucket: "picashare-7bc92.appspot.com",
    messagingSenderId: "536716819192"
};

this.firebaseApp = firebase.initializeApp(this.firebaseConfig);

const {AUTH_PROVIDERS} = require("../constants/appConfig").default;

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  };

  componentWillReceiveProps(nextProps){
          // this.isUserLoggedIn.bind(this) && this.props.navigation('Categories');
      // nextProps !== this.props && console.log(`--->>>> ${nextProps}`);
  };

  render() {
    const {navigate} = this.props.navigation;
    return (<View style={styles.container}>
      <MyStatusBar backgroundColor="#209AE7" barStyle="light-content"  />
      <View style={{alignSelf: 'flex-start'}}>
        <LoginPreview/>
        <View style={styles.logins}>
          <FacebookLogin navigate={navigate} />
          <GooglePlusLogin navigate={navigate} />
          <TwitterLogin navigate={navigate} />
        </View>
        </View>
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 10 : 0;

const styles = StyleSheet.create({
  container: {
    flex:1,
    //top: 30,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor: 'white'
  },
  logins: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },

});


export default Login;