import React from 'react';

export const AuthContext = React.createContext({
  logIn: (userName: string, password: string) => {},
  logOut: () => {},
});
