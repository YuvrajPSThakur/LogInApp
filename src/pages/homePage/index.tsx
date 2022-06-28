import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../../../context/auth-context';
import {styles} from './style';

const HomePage: React.FunctionComponent = () => {
  const {setUser} = useContext(AuthContext);
  const logOut = async () => {
    setUser(undefined);
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
