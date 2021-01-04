import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId } from './config/fbCred';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { processColor, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';

import Landing from './components/auth/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loaded:false,
      loggedIn:false,
    }
  };
  
  componentDidMount(props){
    firebase.auth().onAuthStateChanged((user) => {
      
      if(!user){
        this.setState({loggedIn:false});
        this.setState({loaded:true});
      }else{
        this.setState({loggedIn:true});
        this.setState({loaded:true});
      }
    });
  };

  render() {

    const { loaded, loggedIn } = this.state;

    if(!loaded)
    return (
      <View>
        <Text style = {{ textAlign:'center', marginTop:'500px' }}> Loading... </Text>
      </View>
    );
    if(!loggedIn)
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Landing'>
        <Stack.Screen name = 'Landing' component = {Landing} options = {{headerShown: false }} />
        <Stack.Screen name = 'Register' component = {Register} />
        <Stack.Screen name = 'Login' component = {Login} />
      </Stack.Navigator>
    </NavigationContainer>
    );
    else
     return (
       <View>
         <Text>User is logged in..</Text>
       </View>
     );
  }
};

