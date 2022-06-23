import React from 'react';
import {TextInput, Text} from 'react-native';
import {styles} from '../style';

interface PasswordInputProps {
  error?: string;
  value: string;
  onChangeText: (text: string) => void;
}

const PasswordInput: React.FunctionComponent<PasswordInputProps> = ({
  error,
  ...otherProps
}) => {
  return (
    <React.Fragment>
      <TextInput
        underlineColorAndroid="transparent"
        placeholderTextColor="rgba(34, 62, 75, 0.7)"
        placeholder="Enter your Password"
        style={styles.input}
        {...otherProps}
      />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </React.Fragment>
  );
};

export default PasswordInput;
