import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import  Icon  from '@expo/vector-icons/Ionicons'
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from 'react-navigation'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'

import HomeScreen from './Screens/HomeScreen';
import MenuScreen from './Screens/MenuScreen';
import ProfileScreen from './Screens/ProfileScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import FoodScreen from './Screens/FoodScreen';
import DashboardScreen from './Screens/DashboardScreen';
import SignUpScreen from './Screens/SignUpScreen';
import LoginScreen from './Screens/LoginScreen';


class App extends Component {
  render(){
    return (
    <PaperProvider>
        <AppContainer />
    </PaperProvider>
    )
  }
}

const Menu = createStackNavigator({ // MenuStack Navigator, allows for more screens within an exisitng screen
  Menu: {
    screen: MenuScreen,
    navigationOptions:({ navigation }) =>{
      return {
        headerTitle: "Menu",
        headerLeft: (
          <Icon style={{ paddingLeft:10 }} name="md-menu" size={30} onPress={() => navigation.openDrawer()}/>
        )
      }
    }
  },
  Food: { screen: FoodScreen }
},{
  defaultNavigationOptions: {
    gesturesEnabled:false
  }
})

const MyDashboardTabNavigator = createBottomTabNavigator({ // creates bottom tab navigator
  Home: { screen: HomeScreen },
  Menu,
  Profile: { screen: ProfileScreen }
},{
  navigationOptions:({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index]; // gives the index of the active tab 
    return {
      header:null,
      headerTitle: routeName
    }
  }
}
)

const DashboardStackNavigator = createStackNavigator({ // wrapping Tabnavigator with stack to allow automatic headers for each tab
  DashboardTabNavigator: MyDashboardTabNavigator
},{
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft: 
      <Icon 
      style={{ paddingLeft: 10 }} 
      name="md-menu" size={30} 
      onPress= {() => navigation.openDrawer()} // opens the drawer feature
      />
    }
  }
})

const MyDrawerNavigator = createDrawerNavigator({ // create drawer navigator 
  Dashboard: { screen: DashboardStackNavigator },
  Home:{ screen: HomeScreen},
  Menu:{ screen: MenuScreen },
  Profile: { screen: ProfileScreen }
})

const MySwitchNavigator = createSwitchNavigator({ // create switch navigator // switching between one or two screens perfect for logins & sign ups
  Welcome:{ screen: WelcomeScreen },
  Login: { screen: LoginScreen},
  SignUp: { screen: SignUpScreen},
  Dashboard: {screen: MyDrawerNavigator }
})


const AppContainer = createAppContainer(MySwitchNavigator);

export default App;



const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignContent:'center',
    flex:1
  }
})