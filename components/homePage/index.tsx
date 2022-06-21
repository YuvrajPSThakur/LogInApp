import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface HomePageProps {
  handleLogOut: (isOpen: boolean) => void;
}

const HomePage: React.FunctionComponent<HomePageProps> = ({handleLogOut}) => {
  const handleClick = () => {
    handleLogOut;
  };
  return (
    <View>
      <Text style={styles.sectionContainer}>Hello User</Text>
      <Button onPress={handleClick} title="Log out" />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    fontSize: 26,
    textAlign: 'center',
  },
});

export default HomePage;
