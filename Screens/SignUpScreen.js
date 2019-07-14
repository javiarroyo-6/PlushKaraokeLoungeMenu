import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    AsyncStorage,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    SafeAreaView,
    StatusBar,
    Keyboard,
    Alert,
    Animated
} from 'react-native'
import { TextInput , Headline, Button, TouchableRipple } from 'react-native-paper'



export default class SignUpScreen extends Component {
    state = {
        firstName:'',
        lastName:'',
        email:''
    };


    render(){
        return(
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView  style={ styles.container } behavior='padding' enabled>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={ styles.container }>
                            <Headline style={{textAlign:'center', bottom:100}}> Sign Up </Headline>
                            <TextInput 
                                style={{ marginBottom: 10, marginLeft:20,marginRight:20}}
                                label="First Name"
                                value={this.state.firstName}
                                onChange={ firstName => this.setState({ firstName })}
                                type='flat'
                            />
                            <TextInput 
                                style={{ marginBottom:10, marginLeft:20, marginRight:20 }}
                                label="Last Name"
                                value={this.state.lastName}
                                onChange={ lastName => this.setState({ lastName })}
                                type="flat"
                            />
                            <TextInput 
                                style={{marginBottom:10, marginRight:20, marginLeft:20 }}
                                label="Email"
                                value={this.state.email}
                                onChange={ email => this.setState({ email })}
                                type="outlined"
                            />
                            <Button 
                            style={{ marginLeft:20, marginRight:20, borderRadius:24, backgroundColor:'#00BFFF', }} 
                            mode="outlined" 
                            icon="mood" 
                            color="white"
                            dark= {true}
                            onPress={() => this.props.navigation.navigate('Dashboard')}>
                                Sign Up
                            </Button>
                            
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        flexDirection:'column'
    },
    button:{

    }
   
})

 
    //  /* <View style={styles.container}>
    //                  <View style={styles.container}>
    //                      <TextInput 
    //                          label= "First Name"
    //                          type='flat'
    //                          value={ this.state.firstName }
    //                          onChangeText= {firstName => this.setState({ firstName })}
    //                      />
    //                  </View>
                 
    //                  <View style={ styles.container }>
    //                      <TextInput 
    //                          label="Last Name"
    //                          type="flat"
    //                          value={ this.state.lastName }
    //                          onChangeText= { lastName => this.setState({ lastName })}
    //                      />
    //                  </View>

    //                  <View style={ styles.container }> 
    //                      <TextInput 
    //                          label="Email"
    //                          type="outlined"
    //                          value={ this.state.email }
    //                          onChangeText= { email => this.setState({ email })}

    //                      />
    //                  </View>
    //              </View>

    //               // container:{
    //               //     flex:1,
    //               //     justifyContent:'center',
    //               //     flexDirection:'column',
    //               //     width:300
    //               // },
    //               // firstInput:{
    //               //     flex:1,
    //               //     top:300,
    //               //     width:300,
    //               //     marginLeft:30
    //               // },
    //               // lastInput:{
    //               //     flex:1,
    //               //     top:1,
    //               //     width:300,
    //               //     marginLeft:30
    //               // },
    //               // emailInput:{
    //               //     flex:1,
    //               //     top: 300,
    //               //     width:300,
    //               //     marginLeft:30
    //               // }