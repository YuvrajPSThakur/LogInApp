import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {LoginForm, HomePage} from './src/pages';
import {AuthContext} from './context/auth-context';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState<string | null>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const authContext = React.useMemo(
    () => ({
      logIn: () => {
        setUserToken('Random');
        setIsLoading(false);
      },
      logOut: () => {
        setUserToken(null);
        setIsLoading(false);
      },
    }),
    [],
  );

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          {userToken ? (
            <HomePage handleLogOut={() => setLoggedIn(false)} />
          ) : (
            <LoginForm handleLogIn={() => setLoggedIn(true)} />
          )}
        </ScrollView>
      </SafeAreaView>
    </AuthContext.Provider>
  );
};

export default App;
