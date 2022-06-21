import React from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {styles} from '../style';

export default function PasswordInput({...otherProps}) {
  return (
    <RNTextInput
      underlineColorAndroid="transparent"
      placeholderTextColor="rgba(34, 62, 75, 0.7)"
      placeholder="Enter password"
      secureTextEntry={true}
      style={styles.input}
      {...otherProps}
    />
  );
}
