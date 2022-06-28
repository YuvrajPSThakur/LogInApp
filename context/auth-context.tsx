import React, {createContext, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  name: string | null;
  token: string | null;
}

interface AuthContextInterface {
  setUser: (user: User | null) => void;
  user: User | null;
}

// export const AuthContext = React.createContext({
//   logIn: (userName: string, password: string) => {},
//   logOut: () => {},
// });

const authContextDefaultValues: AuthContextInterface = {
  setUser: () => {},
  user: null,
};

export const AuthContext = createContext<AuthContextInterface>(
  authContextDefaultValues,
);

type Props = {children: ReactNode};

export const AuthContextProvider: React.FC<Props> = ({children}) => {
  // const getData: User = async () => {
  //   const userToken = await AsyncStorage.getItem('userToken');
  //   const userName = await AsyncStorage.getItem('userName');

  //   const user = {
  //     name: userName ? userName : '',
  //     token: userToken ? userToken : '',
  //   };
  //   return user;
  // };
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    (async () => {
      const userName = await AsyncStorage.getItem('userName');
      const userToken = await AsyncStorage.getItem('userToken');
      if (userName && userToken) {
        setUser({
          name: userName,
          token: userToken,
        });
      } else {
        setUser(null);
      }
      //console.log('From context', user);
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        setUser,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
