import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './auth';
import { useAuth } from '../provider/AuthProvider';
import MainScreenNavigation from './main';

const Navigation = () => {
  const { signed } = useAuth();

  return (
    <NavigationContainer>
      {signed ? <MainScreenNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
