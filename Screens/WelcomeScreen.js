import React, { Component } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import { Button , Surface} from 'react-native-paper';



export default class WelcomeScreen extends Component {
    render(){
        return (
            <View style= { styles.container }>
                <Text> WelcomeScreen </Text>
                    <View>
                        <Surface>
                            <Button 
                                style={styles.loginButton}
                                icon="person"
                                mode='outlined'
                                onPress = {() => this.props.navigation.navigate('Dashboard')}
                                color= "#4169E1"
                            >
                                Login 
                            </Button>
                        </Surface>
                    </View>
                    <View>
                        <Button 
                            style={styles.signUpButton}
                            mode="contained"
                            color="#00CED1"
                            onPress= {() => this.props.navigation.navigate('SignUp')} 
                            icon='mic'
                        >
                            Sign Up
                        </Button>  
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        color:'#00304E' 
    },
    loginButton:{
        justifyContent:'flex-end',
        top:300,
        right:80
        
    },
    signUpButton:{
        
        top:264,
        left: 80
    }
    }
)