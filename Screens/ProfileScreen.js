import React,{ Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class ProfileScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text> ProfileScreen </Text>
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