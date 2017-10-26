import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';
export default StyleSheet.create({
buttonColor:{
  backgroundColor:colors.buttonBackground,
  height:48,
  justifyContent:'center',
  alignItems:'center',
  width:'30%',
  borderRadius:8,
  marginTop:16,
  marginRight:8
},
btnText:{
  fontWeight:'bold'
}
})
