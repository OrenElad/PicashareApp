/**
 * Created by oren on 25/05/2017.
 */

import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';

import Login from '../Login/Login.container';
import Categories from '../Categories/Categories.container';


export const Root = StackNavigator({
  Login: {
    screen: Login,
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
  initialRouteName: 'Login',
  headerMode: 'screen',
});


