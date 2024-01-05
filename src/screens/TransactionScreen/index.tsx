import React, { useMemo } from 'react';
import {
  Button,
  IndexPath,
  Select,
  SelectItem,
  Text,
} from '@ui-kitten/components';
import Container from '../../components/Container';
import { View } from 'react-native';
import TransactionCard from '../../components/TransactionCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TransactionNavigatorParamList } from '../../navigation/main/navigation/Transaction';
import useGetTransaksi from '../../features/transaksi/api/useGetTransaksi';
import { format } from 'date-fns';

const tipeTransaksi: { id: number; name: string }[] = [
  { id: 2, name: 'Expense' },
  { id: 1, name: 'Income' },
];

const TransactionScreen = ({
  navigation,
}: NativeStackScreenProps<
  TransactionNavigatorParamList,
  'Transaction'
>) => {
  const [selectedTipeTransaksi, setSelectedTipeTransaksi] =
    React.useState<IndexPath>(new IndexPath(0));

  const {
    data: expenseTransaction,
    isLoading: expenseTransactionLoading,
  } = useGetTransaksi({ transaksiTipeId: 2 });

  const {
    data: incomeTransaction,
    isLoading: incomeTransactionLoading,
  } = useGetTransaksi({ transaksiTipeId: 1 });

  const monthlyTotalExpense = useMemo(() => {
    let count = 0;
    expenseTransaction?.map(({ amount }) => (count += amount));
    return count;
  }, [expenseTransaction]);

  const monthlyTotalIncome = useMemo(() => {
    let count = 0;
    incomeTransaction?.map(({ amount }) => (count += amount));
    return count;
  }, [incomeTransaction]);

  return (
    <Container style={{ height: '100%', position: 'relative' }}>
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 600,
            marginVertical: 'auto',
            textAlign: 'center',
          }}
        >
          Month: {format(new Date(), 'MMMM yyyy')}
        </Text>
        <View
          style={{
            marginTop: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 22, marginBottom: 8 }}>
              ${monthlyTotalExpense}
            </Text>
            <Text>My Total Expense</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 22,
                textAlign: 'right',
                marginBottom: 8,
              }}
            >
              ${monthlyTotalIncome}
            </Text>
            <Text style={{ textAlign: 'right' }}>
              My Total Income
            </Text>
          </View>
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 500,
            marginTop: 16,
          }}
        >
          Transaction Type
        </Text>
        <Select
          size="large"
          selectedIndex={selectedTipeTransaksi}
          onSelect={(index) => setSelectedTipeTransaksi(index)}
          value={tipeTransaksi[selectedTipeTransaksi.row]?.name}
          style={{ marginTop: 16 }}
        >
          {React.Children.toArray(
            tipeTransaksi.map(({ name }) => (
              <SelectItem title={name} />
            )),
          )}
        </Select>

        <Text style={{ marginTop: 30 }}>
          All {tipeTransaksi[selectedTipeTransaksi.row]?.name} This
          Month
        </Text>

        <View
          style={{
            flexDirection: 'column',
            rowGap: 10,
            marginTop: 20,
          }}
        >
          {React.Children.toArray(
            [
              ...((tipeTransaksi[selectedTipeTransaksi.row]?.id === 1
                ? incomeTransaction
                : expenseTransaction) ?? []),
            ].map((data) => (
              <TransactionCard data={data} type="Expense" />
            )),
          )}
        </View>
      </View>

      <Button
        style={{
          marginTop: 10,
          position: 'absolute',
          bottom: 16,
          width: 'calc(100% - 40px)',
        }}
        onPress={() => navigation.push('CreateTransaction')}
      >
        Create Transaction
      </Button>
    </Container>
  );
};

export default TransactionScreen;
