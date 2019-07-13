import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'



export default class SignUpScreen extends Component {
    render(){
        return(
            <View style={style.container}>
                <Text> Sign Up Screen</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})