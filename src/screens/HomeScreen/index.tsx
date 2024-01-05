import { Button, Text } from '@ui-kitten/components';
import React, { FC, useEffect, useMemo } from 'react';
import { Image, ScrollView, View } from 'react-native';
import Container from '../../components/Container';
import usePallete from '../../hooks/usePallete';
import WalletCard from '../../components/WalletCard';
import TransactionCard from '../../components/TransactionCard';
import { useGetWallet } from '../../features/wallet/api/useGetWallet';
import { MainScreenNavigatorParamlist } from '../../navigation/main';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackNavigatorParamList } from '../../navigation/main/navigation/Home';
import { useAuth } from '../../provider/AuthProvider';
import useGetTransaksi from '../../features/transaksi/api/useGetTransaksi';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<HomeStackNavigatorParamList, 'Home'>) => {
  const pallete = usePallete();

  const { data: dataWallets, refetch: refetchWallet } =
    useGetWallet();
  const {
    data: dataPreviousTransaction,
    refetch: refetchPreviousTransaction,
  } = useGetTransaksi({
    limit: 4,
  });
  const { user } = useAuth();

  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && refetchWallet();
  }, [isFocused]);

  const totalBalance = useMemo(() => {
    let totalBalanceCount = 0;
    dataWallets?.map((data) => (totalBalanceCount += data.amount));

    return totalBalanceCount;
  }, [dataWallets]);

  return (
    <Container>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 500,
          marginBottom: 16,
        }}
      >
        Welcome Back, {user.name || 'Guest'}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 400,
          marginBottom: 16,
        }}
      >
        Total Balance:
      </Text>
      <Text
        style={{
          fontSize: 40,
          fontWeight: 700,
        }}
      >
        ${totalBalance}
      </Text>
      {dataWallets?.length ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20 }}
        >
          <View style={{ flexDirection: 'row', columnGap: 20 }}>
            {React.Children.toArray(
              dataWallets?.map((wallet) => (
                <WalletCard {...wallet} />
              )),
            )}
          </View>
        </ScrollView>
      ) : (
        <Text style={{ marginTop: 20 }}>
          You don't have any wallet, Create your first wallet to track
          your financial life
        </Text>
      )}

      <Button
        style={{
          marginTop: 20,
        }}
        onPress={() => navigation.push('CreateWallet')}
      >
        Add Wallet
      </Button>
      <Text style={{ fontSize: 20, fontWeight: 500, marginTop: 16 }}>
        Previous Transaction
      </Text>
      <View
        style={{
          flexDirection: 'column',
          rowGap: 10,
          marginTop: 20,
        }}
      >
        {dataPreviousTransaction?.length ? (
          React.Children.toArray(
            dataPreviousTransaction?.map((data) => (
              <TransactionCard data={data} type="Expense" />
            )),
          )
        ) : (
          <Text>You don't have any transaction this month.</Text>
        )}
      </View>
    </Container>
  );
};

export default HomeScreen;
