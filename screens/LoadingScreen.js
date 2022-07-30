import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import firebase from "firebase";

export default class LoadingScreen extends Component{

    signInWithGoogleAsync = async () =>{
        try {
          const result = await Google.logInAsync({
            behaviour: "web",
            androidClientId:
              "1092137861522-i28pe2j35pq56reqfbtpkecivjfr9pvf.apps.googleusercontent.com",
            iosClientId:
              "1092137861522-7gqr4p751h2facft81ppojplcqvvg818.apps.googleusercontent.com",
            scopes: ["profile", "email"],
          });
        


    
    componentDidMount(){
        this.checkIfLoggedIn()
    }
  
    checkIfLoggedIn = ()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate('DashboardScreen')
            } else {
                this.props.navigation.navigate('LoginScreen')
            }

        } )
    }

    render(){
        return(
            <View
             style={{
                flex:1,
                justifyContent: "center",
                alignItems: "center"
             }}>
                <Text> Loading</Text>
                </View>
        )
    }
}