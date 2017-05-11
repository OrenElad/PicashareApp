/**
 * Created by oren on 18/04/2017.
 */
import React, { Component } from 'react';
import * as firebase from 'firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


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
    this._setupGoogleSignin();

    // ... somewhere in your login screen component


  };

  componentWillReceiveProps(nextProps){

  };

  _login(socialNetwork){
    switch(socialNetwork) {
      case 'FACEBOOK':
        LoginManager
          .logInWithReadPermissions(['public_profile', 'email', 'user_friends'])
          .then((result) => {
            if (result.isCancelled) {
              return Promise.resolve('cancelled');
            }
            console.log(`Login success with permissions: ${JSON.stringify(result, null, 2)}`);
            // get the access token
            return AccessToken.getCurrentAccessToken();
          })
          .then(data => {
            // create a new firebase credential with the token
            const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
            console.log('credential' +JSON.stringify(credential, null, 2));
            // login with credential
            return firebase.auth().signInWithCredential(credential);
          })
          .then((currentUser) => {
            if (currentUser === 'cancelled') {
              console.log('Login cancelled');
            } else {
              // now signed in
              console.log(`the user: ${JSON.stringify(currentUser.toJSON())}`);
            }
          })
          .catch((error) => {
            console.log(`Login fail with error: ${error}`);
          });


        break;
      case 'GOOGLE_PLUS':
        GoogleSignin.signIn()
          .then((user) => {
            console.log(user);
            this.setState({user: user});
          })
          .catch((err) => {
            console.log('WRONG SIGNIN', err);
          })
          .done();
        break;
      case 'TWITTER':
        alert('TWITTER');
        break;
      default:
        alert('Default');
    }

  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/games'],
        iosClientId: '536716819192-onh2q8tlpib1fb4dun0fse5vvkalo7ug.apps.googleusercontent.com'
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({user});
    }
    catch(err) {
      console.log("Google signin error", err.code, err.message);
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