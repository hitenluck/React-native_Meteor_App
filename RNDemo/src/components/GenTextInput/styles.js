import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');
import { colors } from '../../config/styles';
export default StyleSheet.create({
input:{
  height: 40,
      borderRadius: 5,
     backgroundColor: colors.inputBackground,
      marginLeft: 10,
      marginVertical: 5,
      paddingVertical: 5,
      paddingHorizontal: 15,
      fontWeight:'bold'
},
inputWrapper: {
   backgroundColor: colors.inputBackground,
   width: '100%',

 },
})
