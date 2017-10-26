import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Registration from '../screens/Registration'
import SignIn from '../screens/SignIn'
import Home from '../screens/Home'
export const AuthScreen=StackNavigator({
  Signin:{
    screen: SignIn,
  },
  Register:{
    screen:Registration,
  },
},
{
headerMode:'none'
})

export const HomeStack=StackNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      headerTitle: 'Details',
    },
},
})
