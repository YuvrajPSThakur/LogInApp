import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './style';
import {AuthContext} from '../../../context/auth-context';

const HomePage: React.FunctionComponent = () => {
  const {logOut} = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.sectionContainer}>Hello User</Text>
      <Button onPress={logOut} title="Log out" />
    </View>
  );
};

export default HomePage;
