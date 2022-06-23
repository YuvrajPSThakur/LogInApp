import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './style';

interface HomePageProps {
  handleLogOut: (isOpen: boolean) => void;
}

const HomePage: React.FunctionComponent<HomePageProps> = ({handleLogOut}) => {
  const handleClick = () => {
    handleLogOut(false);
  };
  return (
    <View>
      <Text style={styles.sectionContainer}>Hello User</Text>
      <Button onPress={handleClick} title="Log out" />
    </View>
  );
};

export default HomePage;
