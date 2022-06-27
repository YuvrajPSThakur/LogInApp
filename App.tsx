import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {LoginForm, HomePage} from './src/pages';
import {AuthContext} from './context/auth-context';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  interface loginStateType {
    isLoading: boolean;
    userName: string | null;
    userToken: string | null;
  }

  interface logInAction {
    type: string;
    token: string | null;
    id: string | null;
  }

  function loginReducer(prevState: loginStateType, action: logInAction) {
    switch (action.type) {
      case 'RESTART':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      default:
        return prevState;
    }
  }
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  React.useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RESTART', token: userToken, id: 'Test'});
    }, 1000);
  }, []);

  const authContext = React.useMemo(
    () => ({
      logIn: async (userName: string | null, password: string) => {
        let userToken;
        userToken = '';
        if (userName === 'Test123@gmail.com' && password === '1234567890') {
          try {
            await AsyncStorage.setItem('userToken', userToken);
          } catch (e) {
            console.log(e);
          }
        }
        dispatch({type: 'LOGIN', token: userToken, id: userName});
      },
      logOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT', token: null, id: null});
      },
    }),
    [],
  );

  if (loginState.isLoading) {
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
          {loginState.userToken ? <HomePage /> : <LoginForm />}
        </ScrollView>
      </SafeAreaView>
    </AuthContext.Provider>
  );
};

export default App;
