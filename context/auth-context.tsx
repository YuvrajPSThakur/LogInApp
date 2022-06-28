import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, PropsWithChildren} from 'react';

interface User {
  name: string;
  token: string;
}

interface AuthContextInterface {
  setUser: (user?: User) => void;
  user?: User;
}

// export const AuthContext = React.createContext({
//   logIn: (userName: string, password: string) => {},
//   logOut: () => {},
// });

const authContextDefaultValues: AuthContextInterface = {
  setUser: () => {},
  user: undefined,
};

export const AuthContext = createContext<AuthContextInterface>(
  authContextDefaultValues,
);

export const AuthContextProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  // const getData: User = async () => {
  //   const userToken = await AsyncStorage.getItem('userToken');
  //   const userName = await AsyncStorage.getItem('userName');

  //   const user = {
  //     name: userName ? userName : '',
  //     token: userToken ? userToken : '',
  //   };
  //   return user;
  // };
  const [user, setUser] = React.useState<User>();

  React.useEffect(() => {
    (async () => {
      const userName = await AsyncStorage.getItem('userName');
      const userToken = await AsyncStorage.getItem('userToken');
      if (userName && userToken) {
        setUser({
          name: userName,
          token: userToken,
        });
      }
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
