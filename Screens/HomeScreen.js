import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class HomeScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text> Home Screen </Text>
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