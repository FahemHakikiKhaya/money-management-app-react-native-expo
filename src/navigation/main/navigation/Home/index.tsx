import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../../../screens/HomeScreen';
import CreateWalletScreen from '../../../../screens/CreateWalletScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export type HomeStackNavigatorParamList = {
  Home: undefined;
  CreateWallet: undefined;
};

const HomeStack = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen
        options={{ title: 'Create Wallet' }}
        name="CreateWallet"
        component={CreateWalletScreen}
      />
    </Navigator>
  );
};

export default HomeStack;
