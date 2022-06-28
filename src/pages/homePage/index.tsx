import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './style';
import {AuthContext} from '../../../context/auth-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage: React.FunctionComponent = () => {
  const authContext = useContext(AuthContext);
  const logOut = async () => {
    authContext.setUser(null);
    await AsyncStorage.setItem('userName', '');
    await AsyncStorage.setItem('userToken', '');
  };

  return (
    <View>
      <Text style={styles.sectionContainer}>Hello User</Text>
      <Button onPress={logOut} title="Log out" />
    </View>
  );
};

export default HomePage;
