/**
 * Created by oren on 25/05/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import SplashScreen from '../SplashScreen';
import Login from '../Login/Login.container';
import Categories from '../Categories/Categories.container';

export const AppNavigator = StackNavigator({
  SplashScreen: { screen: SplashScreen },
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
  initialRouteName: 'SplashScreen',
  headerMode: 'screen',
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
