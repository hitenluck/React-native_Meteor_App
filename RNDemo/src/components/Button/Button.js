import React, { Component} from 'react';
import styles from './styles';
import PropTypes from 'prop-types';

import {
  Text,
  TouchableOpacity
} from 'react-native';
const Button=(props)=>{
const {text,onPress}=props;
return(
  <TouchableOpacity style={styles.buttonColor} onPress={onPress}>
    <Text style={styles.btnText}>
    {text}
    </Text>
  </TouchableOpacity>
);
};
Button.propTypes={
text:PropTypes.string,
onPress:PropTypes.func,
};
Button.defaultProps = {
  text: 'Button Text',
  // eslint-disable-next-line no-console
  onPress: () =>alert('hello'),
};
export default Button;
