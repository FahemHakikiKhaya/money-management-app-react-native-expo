import { Button, Text } from '@ui-kitten/components';
import React, { FC, useMemo } from 'react';
import { Image, ScrollView, View } from 'react-native';
import Container from '../../components/Container';
import usePallete from '../../hooks/usePallete';
import WalletCard from '../../components/WalletCard';
import TransactionCard from '../../components/TransactionCard';
import { useGetWallet } from '../../features/wallet/api/useGetWallet';
import { MainScreenNavigatorParamlist } from '../../navigation/main';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackNavigatorParamList } from '../../navigation/main/navigation/Home';

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<HomeStackNavigatorParamList, 'Home'>) => {
  const pallete = usePallete();

  const { data: dataWallets } = useGetWallet();

  const totalBalance = useMemo(() => {
    let totalBalanceCount = 0;
    dataWallets?.map((data) => (totalBalanceCount += data.amount));

    return totalBalanceCount;
  }, [dataWallets]);

  return (
    <Container>
      <Text
        style={{
          fontFamily: 'inter-semibold',
          fontSize: 20,
          marginBottom: 16,
        }}
      >
        TOTAL BALANCE
      </Text>
      <Text
        style={{
          fontFamily: 'inter',
          fontSize: 40,
          color: pallete.primary,
        }}
      >
        ${totalBalance}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', columnGap: 20 }}>
          {React.Children.toArray(
            dataWallets?.map((wallet) => <WalletCard {...wallet} />),
          )}
        </View>
      </ScrollView>

      <Button
        style={{
          marginTop: 40,
        }}
        onPress={() => navigation.push('CreateWallet')}
      >
        Add Wallet
      </Button>
      <View style={{ flexDirection: 'column', marginTop: 70 }}>
        <Text style={{ marginBottom: 16 }}>
          Previous Transactions
        </Text>
        <TransactionCard />
      </View>
    </Container>
  );
};

export default HomeScreen;
