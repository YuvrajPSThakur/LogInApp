import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {AuthContext} from '../../context';
import {HomePage, LoginForm} from '../pages';

export const AppNavigator = () => {
  const {user} = useContext(AuthContext);
  const AuthStack = createNativeStackNavigator();
  const NonAuthStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {user ? (
        <AuthStack.Navigator initialRouteName="Home">
          <AuthStack.Screen name="Home" component={HomePage} />
        </AuthStack.Navigator>
      ) : (
        <NonAuthStack.Navigator initialRouteName="LogIn">
          <NonAuthStack.Screen name="LogIn" component={LoginForm} />
        </NonAuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};
