import React, { Component } from 'react';
import { LayoutAnimation, StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import Button from '../components/Button';
import { colors } from '../config/styles';
import Meteor, { Accounts } from 'react-native-meteor';
import Loading from '../components/Loading';
import GenTextInput, { InputWrapper } from '../components/GenTextInput';

class Registration extends Component{
  constructor(props){
    super(props);
    this.mounted = false;
    this.state={
      email:'',
      password:'',
      confirmPass:'',
      error:null,
      name:'',
    }
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  _validation=()=>{
    const{email,password,confirmPass,name}=this.state;
    let valid=true;
    if(email.length===0 || password.length===0 || name.length===0 ){
      alert('field cannot blank')
      valid=false;
    }
    if(confirmPass!=password){
      alert('password not match')
      valid=false;
    }
    return valid;
  }

  _registration=()=>{
      const{email,password,confirmPass,name}=this.state;
      if(this._validation()){
        Accounts.createUser({email,password},(err)=>{
        if(err){
          alert(err.reason);
        }
        else {
          alert("Registered Sucessfully")
          this.props.navigation.navigate('Signin')
        }
      });
      }

  }
  render(){
    return(
      <View style={styles.container}>
      <InputWrapper>

      <GenTextInput
        placeholder="User Name"
        onChangeText={(name) => this.setState({ name })}
      />
                <GenTextInput
                  placeholder="Email address"
                  onChangeText={(email) => this.setState({ email })}
                />
                <GenTextInput
                  placeholder="Password"
                  onChangeText={(password) => this.setState({ password })}
                  secureTextEntry
                  borderTop
                />
                <GenTextInput
                  placeholder="Confirm password"
                  onChangeText={(confirmPass) => this.setState({ confirmPass })}
                  secureTextEntry
                  borderTop
                />
        </InputWrapper>
      <View style={styles.buttons}>

        <Button text="Register" onPress={this._registration}/>
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
}
})

export default Registration
