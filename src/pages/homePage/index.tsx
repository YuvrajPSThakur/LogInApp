import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './style';
import {AuthContext} from '../../../context/auth-context';

interface HomePageProps {
  handleLogOut: (isOpen: boolean) => void;
}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const {logOut} = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.sectionContainer}>Hello User</Text>
      <Button onPress={logOut} title="Log out" />
    </View>
  );
};

export default HomePage;
