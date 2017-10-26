import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
const Loading=(props)=>{
  return(
    <View>
    <ActivityIndicator
        animating
        size={props.size}
        {...props}
      />
    </View>
  )
}
Loading.PropTypes = {
  size: PropTypes.string,
};

Loading.defaultProps = {
  size: 'large',
};

export default Loading;
