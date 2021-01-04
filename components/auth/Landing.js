import React from 'react';
import {Text, View, Button } from 'react-native';
import * as firebase from 'firebase';

export default function Landing(props) {
    console.log(props.navigation);
    console.log(firebase.auth());
    return (
        <View style = {{ flex:1, justifyContent:'center' }}>
          <Button 
              title = 'Register'
              onPress = {() => props.navigation.navigate('Register') }
          />
          <Button 
              title = 'Login'
              onPress = {() => props.navigation.navigate('Login') }
          />
        </View>
    );
};
