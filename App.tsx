import React, {useContext, useState} from 'react';
import {ActivityIndicator, useColorScheme, View} from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginForm, HomePage} from './src/pages';
import {AuthContext, AuthContextProvider} from './context';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();
  const [isLoading, setIsLoading] = useState(true);

  // const initialLoginState = {
  //   isLoading: true,
  //   userName: null,
  //   userToken: null,
  // };

  // interface User {
  //   name: string;
  //   token: string;
  // }

  // interface AuthContextInterface {
  //   setUser(user: User | null): void;
  //   user: User | null;
  // }

  // interface loginStateType {
  //   isLoading: boolean;
  //   userName: string | null;
  //   userToken: string | null;
  // }

  // interface logInAction {
  //   type: string;
  //   token: string | null;
  //   id: string | null;
  // }

  // function loginReducer(prevState: loginStateType, action: logInAction) {
  //   switch (action.type) {
  //     case 'RESTART':
  //       return {
  //         ...prevState,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGIN':
  //       return {
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGOUT':
  //       return {
  //         ...prevState,
  //         userName: null,
  //         userToken: null,
  //         isLoading: false,
  //       };
  //     default:
  //       return prevState;
  //   }
  // }
  // const [loginState, dispatch] = React.useReducer(
  //   loginReducer,
  //   initialLoginState,
  // );

  const authContext = useContext(AuthContext);

  React.useEffect(() => {
    setTimeout(async () => {
      // let userToken;
      // userToken = null;
      // try {
      //   userToken = await AsyncStorage.getItem('userToken');
      // } catch (e) {
      //   console.log(e);
      // }
      // dispatch({type: 'RESTART', token: userToken, id: 'Test'});
      setIsLoading(false);
      console.log('From Main App', authContext.user);
    }, 1000);
  }, [authContext]);

  // const authContext = React.useMemo(
  //   () => ({
  //     logIn: async (userName: string | null, password: string) => {
  //       let userToken;
  //       userToken = '';
  //       if (userName === 'Test123@gmail.com' && password === '1234567890') {
  //         try {
  //           await AsyncStorage.setItem('userToken', userToken);
  //         } catch (e) {
  //           console.log(e);
  //         }
  //       }
  //       // dispatch({type: 'LOGIN', token: userToken, id: userName});
  //     },
  //     logOut: async () => {
  //       try {
  //         await AsyncStorage.removeItem('userToken');
  //       } catch (e) {
  //         console.log(e);
  //       }
  //       // dispatch({type: 'LOGOUT', token: null, id: null});
  //     },
  //   }),
  //   [],
  // );

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {authContext.user ? (
            <Stack.Screen name="Home" component={HomePage} />
          ) : (
            <Stack.Screen name="LogIn" component={LoginForm} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;
