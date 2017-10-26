import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import Button from '../components/Button';
import Meteor, { Accounts } from 'react-native-meteor';
import { colors } from '../config/styles';
import Loading from '../components/Loading';
class Home extends Component{
  handleSignOut = () => {

    Meteor.logout();
      return<Loading/>;
  }

  render(){
    return(
    <View style={styles.container}>
    <Button text="Sign Out" onPress={this.handleSignOut} />
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    width: window.width,
    height: window.height * 0.4,
  },
  body: {
    marginTop: -50,
    alignItems: 'center',
  },
});

export default Home;
