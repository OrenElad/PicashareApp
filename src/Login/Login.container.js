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

import * as authActions from "../redux/auth/auth.action";

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

const {AUTH_PROVIDERS} = require("../constants/appConfig").default;
const actions = [authActions];
function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}


class Login extends Component {

  constructor(props) {
    super(props);

  };

  componentWillMount(){

  };

  componentWillReceiveProps(nextProps){
      // nextProps !== this.props && console.log(`--->>>> ${nextProps}`);
  };

  render() {
    return (
      <View style={{flex:1,top: 30, flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
        <LoginPreview/>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <FacebookLogin navigate={this.props.navigate} actions={this.props.actions}/>
          <GooglePlusLogin navigate={this.props.navigate} actions={this.props.actions}/>
          <TwitterLogin navigate={this.props.navigate} actions={this.props.actions}/>
        </View>
      </View>
    );
  }
}


var styles = StyleSheet.create({

});


export default connect(mapStateToProps, mapDispatchToProps)(Login);