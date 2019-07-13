import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FoodCard from '../components/FoodCard'


export default class MenuScreen extends Component {
    render(){
        return (
            <View>
                <View>
                    <FoodCard />
                </View>
                <Text> MenuScreen </Text>
                <Button 
                title="Food"
                onPress={() => this.props.navigation.navigate('Food')}
                />
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