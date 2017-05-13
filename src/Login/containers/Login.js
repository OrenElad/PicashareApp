/**
 * Created by oren on 18/04/2017.
 */
import React, { Component } from 'react';

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
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Image style={styles.image} source={{uri:"https://res.cloudinary.com/marvel-content/image/fetch/s--zoWuAqCa--/f_auto,fl_lossy,q_100,t_app_icon_120/https://marvelapp-live.storage.googleapis.com/serve/2017/4/f635c10b995b4d2a9ee7cf7514be79d0.jpg"}}></Image>
          <Text style={{fontSize:28,color: '#a3c034', fontWeight: '700'}}>Picashare</Text>
        </View>
        <Text style={{fontSize:16, color: '#63a9d3', textAlign: 'center', fontWeight:'500', marginLeft: 10, marginRight: 10}}>join over 500,000 picashares and Use free amazing & powerful platform to make money today</Text>
        <Text style={{fontSize:20,color: '#63a9d3'}}>Log-in By</Text>
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