import React, { Component } from 'react'
import { View, Text, Button, TextInput } from 'react-native';
import * as firebase from 'firebase';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
           email : '',
           password: '',
           name: '',
        }

        this.onSignUp = this.onSignUp.bind(this);
    };
    
    onSignUp = () => {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email,password).then((result) => {
            console.log(result);
        }).catch((err)=>{
            console.error(err);
        });
    };

    render() {
        return (
            <View>
                <TextInput
                 placeholder = 'Name'
                 onChangeText = {(name) => this.setState({name:name})}
                />
                <TextInput
                 placeholder = 'Email'
                 onChangeText = {(email) => this.setState({email:email})}
                />
                <TextInput
                 placeholder = 'Password'
                 onChangeText = {(password) => this.setState({password:password})}
                />
                <Button 
                  title = 'SignUp'
                  onPress = {() => this.onSignUp() }
                />
            </View>
        )
    }
}
