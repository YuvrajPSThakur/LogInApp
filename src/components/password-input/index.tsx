import React from 'react';
import {TextInput as RNTextInput, View, Text} from 'react-native';
import {styles} from '../style';

interface PasswordInputProps {
  error: string | undefined;
  value: string;
  onChangeText: (e: any) => void;
}

const PasswordInput: React.FunctionComponent<PasswordInputProps> = ({
  error,
  ...otherProps
}) => {
  return (
    <View>
      <RNTextInput
        underlineColorAndroid="transparent"
        placeholderTextColor="rgba(34, 62, 75, 0.7)"
        placeholder="Enter your Password"
        style={styles.input}
        {...otherProps}
      />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};

export default PasswordInput;
