import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import settings from './config/settings'
import {AuthScreen,HomeStack} from './config/routes'
import Loading from './components/Loading';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';
Meteor.connect(settings.METEOR_URL);

const Main=(props)=>{
  const { status, user, loggingIn } = props;
  if(status.connected===false || loggingIn){
    return<Loading />;
}
else if(user!==null) {
return<HomeStack/>;
}
return<AuthScreen/>
}

Main.PropTypes = {
  status: PropTypes.object,
  user: PropTypes.object,
  loggingIn: PropTypes.bool,
};


export default createContainer(()=>{
  return{
    status:Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
  };
},Main)
