/**
 * Created by oren on 18/04/2017.
 */
import React, { Component } from 'react';
import Login from './Login/Login.container';
import Categories from './Categories/Categories.container';

import {Provider} from 'react-redux';
import store from './redux/configureStore';

import * as firebase from 'firebase';
import {
  StackNavigator,
  DrawerNavigator
} from 'react-navigation';


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
      <Provider store={store}>
        <View style={{flex:1}}>
          <Login firebaseApp={this.firebaseApp} navigate={navigate}/>
        </View>
      </Provider>

        );
  }
}

const Picashare = StackNavigator({
  App: {
    screen: App,
    navigationOptions: {
      header: null
    }
  },
  Categories: {
    screen: Categories,
    navigationOptions: ({ navigation }) => ({
      title: 'Select one category ',
      headerStyle: {
        backgroundColor: '#2697DD'
      },
      headerTitleStyle: {
        color: '#F7FCFD'
      }
    })
  },
}, {
  initialRouteName: 'App',
  headerMode: 'screen',
});


AppRegistry.registerComponent("Picashare", () => Picashare);
