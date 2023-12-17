import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './auth';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApiClientProvider } from '../provider/ApiClientProvider';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Navigation;
