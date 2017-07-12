/**
 * Created by oren on 18/04/2017.
 */
import React, { Component } from 'react';
import * as firebase from 'firebase';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppWithNavigationState from './navigators/AppNavigator';
import AppReducer from './redux/navigation/navigation.reducer';

class App extends Component {
  store = createStore(AppReducer);

  render() {
    return (
    <Provider store={this.store}>
      <AppWithNavigationState />
    </Provider>);
  }
}

AppRegistry.registerComponent('PicashareApp', () => App);

export default App;


