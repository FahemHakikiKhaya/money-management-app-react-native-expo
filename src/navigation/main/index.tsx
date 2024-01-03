import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigationBar from './components/BottomNavigation';
import CreateWalletScreen from '../../screens/CreateWalletScreen';
import HomeStack from './navigation/Home';
import TransactionScreen from '../../screens/TransactionScreen';
import TransactionStack from './navigation/Transaction';

const { Navigator, Screen } = createBottomTabNavigator();

export type MainScreenNavigatorParamlist = {
  Home: undefined;
  Transaction: undefined;
};

const MainScreenNavigation = () => {
  return (
    <Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomNavigationBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Home" component={HomeStack} />
      <Screen name="Transaction" component={TransactionStack} />
    </Navigator>
  );
};

export default MainScreenNavigation;
