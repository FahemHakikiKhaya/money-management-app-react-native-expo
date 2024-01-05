import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionScreen from '../../../../screens/TransactionScreen';
import CreateTransaction from '../../../../screens/CreateTransactionScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export type TransactionNavigatorParamList = {
  Transaction: undefined;
  CreateTransaction: undefined;
};

const TransactionStack = () => {
  return (
    <Navigator>
      <Screen
        options={{ title: 'Transaction' }}
        name="Transaction"
        component={TransactionScreen}
      />
      <Screen
        options={{ title: 'Create Transaction' }}
        name="CreateTransaction"
        component={CreateTransaction}
      />
    </Navigator>
  );
};

export default TransactionStack;
