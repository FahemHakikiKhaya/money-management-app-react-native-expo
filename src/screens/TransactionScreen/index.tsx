import React from 'react';
import { Button, Text } from '@ui-kitten/components';
import Container from '../../components/Container';
import { View } from 'react-native';
import TransactionCard from '../../components/TransactionCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TransactionNavigatorParamList } from '../../navigation/main/navigation/Transaction';

const TransactionScreen = ({
  navigation,
}: NativeStackScreenProps<
  TransactionNavigatorParamList,
  'Transaction'
>) => {
  return (
    <Container>
      <Text style={{ fontSize: 22 }}>$125.499</Text>
      <Text>My Total Earnings</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}
      >
        <Text>All My Expense</Text>
        <Text>See All</Text>
      </View>
      <View
        style={{ flexDirection: 'column', rowGap: 10, marginTop: 20 }}
      >
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}
      >
        <Text>All My Income</Text>
        <Text>See All</Text>
      </View>
      <View
        style={{ flexDirection: 'column', rowGap: 10, marginTop: 20 }}
      >
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </View>
      <Button
        style={{ marginTop: 10 }}
        onPress={() => navigation.push('CreateTransaction')}
      >
        Create Transaction
      </Button>
    </Container>
  );
};

export default TransactionScreen;
