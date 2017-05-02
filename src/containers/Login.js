/**
 * Created by oren on 18/04/2017.
 */
import React, { Component } from 'react';
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
  //Icon,
  Alert
} from 'react-native';


class Login extends Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
    this.facebook = new firebase.auth.FacebookAuthProvider();

  };

  componentWillMount(){
    // firebase.auth().signInWithRedirect(this.props.facebook);
    // firebase.auth().getRedirectResult().then(function(result) {
    //   if (result.credential) {
    //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //     var token = result.credential.accessToken;
    //     alert(JSON.stringify(token, null, 2));
    //     // ...
    //   }
    //   // The signed-in user info.
    //   var user = result.user;
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });

    // alert(this.props.facebook.addScope('user_birthday'));

  };

  componentWillReceiveProps(nextProps){

  };

  _login(socialNetwork){
    switch(socialNetwork) {
      case 'FACEBOOK':
        // alert('FACEBOOK');
        firebase.auth().signInWithRedirect(this.facebook);
        firebase.auth().getRedirectResult()
          .then(function(result) {
            // alert(result.user);
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
        break;
      case 'GOOGLE_PLUS':
        alert('GOOGLE_PLUS');
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
        <TouchableOpacity onPress={this._login.bind(this,'FACEBOOK')}>
          <Image
            style={styles.button}
            source={require('../assets/facebook-login.png')}
          />
        </TouchableOpacity>
          <TouchableOpacity onPress={this._login.bind(this,'GOOGLE_PLUS')}>
          <Image
            style={styles.button}
            source={require('../assets/google-plus-login.png')}
          />
        </TouchableOpacity>
          <TouchableOpacity onPress={this._login.bind(this,'TWITTER')}>
          <Image
            style={styles.button}
            source={require('../assets/twitter-login.png')}
          />
        </TouchableOpacity>
        </View>
        {/*<View><LoginButton
          publishPermissions={["public_profile"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {

                alert(`Login ${JSON.stringify(result, null, 2)}`);
              }
            }
          }
          onLogoutFinished={(result) => {
            alert("User logged out");
            alert(`logout ${JSON.stringify(result, null, 2)}`);
          }}/>
        </View>*/}
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