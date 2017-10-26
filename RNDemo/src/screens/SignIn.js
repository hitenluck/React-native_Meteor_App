import React, { Component } from 'react';
import { LayoutAnimation, StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import Button from '../components/Button';
import Meteor, { Accounts } from 'react-native-meteor';
import GenTextInput, { InputWrapper } from '../components/GenTextInput';
import {RegisterScreen} from '../config/routes'
import { colors } from '../config/styles';
import logo from '../images/rn-logo.png'
class SignIn extends Component{
  constructor(props){
    super(props);
    this.mounted = false;
    this.state={
      email:'',
      password:'',
      error:null,
    }
  }
  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  _validateInput=()=>{
    const{email,password}=this.state;
    let valid = true;
    if(email.length===0 || password.length===0){
      alert('please enter data');
      valid=false;
    }
  return valid;
  }

  _handleSignIn=()=>{
    if(this._validateInput()){
      const { email, password } = this.state;
      Meteor.loginWithPassword(email,password,(err)=>{
        if(err){
          alert(err.reason)
        }
      })
    }
  }

  render(){
    return(
      <View style={styles.container}>
      <View>
      <Image
      style={styles.logo}
      source={logo}/>
      </View>
      <InputWrapper>
      <GenTextInput
      placeholder="email address"
      onChangeText={(email) => this.setState({ email })}
      />
      <GenTextInput
      placeholder="password"
      onChangeText={(password) => this.setState({ password })}
      secureTextEntry
      borderTop
      />
      </InputWrapper>
      <View style={styles.buttons}>
      <Button text="Login" onPress={this._handleSignIn}/>
      <Button text="Sign Up" onPress={()=>this.props.navigation.navigate('Register')}/>
      </View>
      </View>

    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.background
  },
  buttons:{
    flexDirection:'row'
  },
  header: {
    marginBottom: 25,
    alignItems: 'center',
  },
  logo: {
    width: 125,
    height: 125,
  },
})

export default SignIn;
