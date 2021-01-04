import React, { Component } from 'react'
import { View, Text, Button, TextInput } from 'react-native';
import * as firebase from 'firebase';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
           email : '',
           password: '',
        }

        this.onLogin = this.onLogin.bind(this);
    };
    
    onLogin = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
           console.log(user);
        }).catch((error) => {
           console.error(error);
        });

    };

    render() {
        return (
            <View>
                <TextInput
                 placeholder = 'Email'
                 onChangeText = {(email) => this.setState({email:email})}
                />
                <TextInput
                 placeholder = 'Password'
                 onChangeText = {(password) => this.setState({password:password})}
                />
                <Button 
                  title = 'Login'
                  onPress = {() => this.onLogin() }
                />
            </View>
        )
    }
}
