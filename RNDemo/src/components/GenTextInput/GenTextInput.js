import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const GenTextInput=(props)=>{
return(
  <View>
      {props.borderTop ? <View style={styles.divider} /> : null}
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
      />
    </View>
)
}
GenTextInput.PropTypes={
borderTop:PropTypes.bool,
};
export default GenTextInput;
