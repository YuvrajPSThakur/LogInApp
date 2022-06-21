import React from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {styles} from '../style';

export default function EmailInput({...otherProps}) {
  return (
    <RNTextInput
      underlineColorAndroid="transparent"
      placeholderTextColor="rgba(34, 62, 75, 0.7)"
      placeholder="Enter your email"
      style={styles.input}
      {...otherProps}
    />
  );
}
