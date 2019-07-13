import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


export default class DashboardScreen extends Component {
    render(){
        return (
            <View style= {styles.container}>
                <Text> DashboardScreen </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
})