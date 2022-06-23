import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {LoginForm, HomePage} from './src/pages';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [loggedIn, setLoggedIn] = React.useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {loggedIn ? (
          <HomePage handleLogOut={() => setLoggedIn(false)} />
        ) : (
          <LoginForm handleLogIn={() => setLoggedIn(true)} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
