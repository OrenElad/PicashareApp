/**
 * Created by oren on 18/04/2017.
 */
import React, { Component } from 'react';
import Login from './Login/Login.container';
import Categories from './Categories/Categories.container';

import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';

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



class App extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props) {
    super(props);
    this.firebaseConfig = {
      apiKey: "AIzaSyDOc48VJls4dUJ26DepEtmQw9JUssWSTw0",
      authDomain: "picashare-7bc92.firebaseapp.com",
      databaseURL: "https://picashare-7bc92.firebaseio.com",
      projectId: "picashare-7bc92",
      storageBucket: "picashare-7bc92.appspot.com",
      messagingSenderId: "536716819192"
    };

    this.firebaseApp = firebase.initializeApp(this.firebaseConfig);
    this.state = {};
  };

  componentWillMount(){
    //alert(JSON.stringify(this.facebook.addScope('public_profile'), null, 2));
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{flex:1}}>
        <Login firebaseApp={this.firebaseApp} navigate={navigate}/>
      </View>
    );
  }
}

const Picashare = StackNavigator({
  App: { screen: App },
  Categories: { screen: Categories },
});

AppRegistry.registerComponent("Picashare", () => Picashare);
