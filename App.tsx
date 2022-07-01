import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthContextProvider} from './context';
import {AppNavigator} from './src/navigators/AppNavigator';

const App = () => {
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
    }, 1000);
  }, []);

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

  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <>
          {isLoading ? (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size={'large'} />
            </View>
          ) : (
            <AppNavigator />
          )}
        </>
      </AuthContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
