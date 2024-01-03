import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Button,
  IndexPath,
  Input,
  Radio,
  Select,
  SelectItem,
  Text,
} from '@ui-kitten/components';
import React from 'react';
import { TransactionNavigatorParamList } from '../../navigation/main/navigation/Transaction';
import Container from '../../components/Container';
import { Formik } from 'formik';
import usePallete from '../../hooks/usePallete';
import { ScrollView, View } from 'react-native';
import { useGetWallet } from '../../features/wallet/api/useGetWallet';
import WalletCard from '../../components/WalletCard';
import useGetTransaksiKategori from '../../features/transaksi-kategori/api/useGetTransaksiKategori';

const TransactionType: { id: number; name: string }[] = [
  { id: 1, name: 'Income' },
  { id: 2, name: 'Expense' },
];

const CreateTransactionScreen = ({
  navigation,
}: NativeStackScreenProps<
  TransactionNavigatorParamList,
  'CreateTransaction'
>) => {
  const { data: dataWallets } = useGetWallet();
  const { data: dataTransaksiKategori } = useGetTransaksiKategori();

  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(
    new IndexPath(0),
  );

  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
          amount: '',
          walletId: 0,
          typeId: 1,
          description: '',
        }}
        onSubmit={() => console.log('')}
      >
        {({ values, setFieldValue }) => (
          <View style={{ flexDirection: 'column', rowGap: 20 }}>
            <Text>Name</Text>
            <Input
              size="large"
              style={{
                borderRadius: 20,
                backgroundColor: 'transparent',
                borderColor: usePallete().primary,
                width: '100%',
              }}
              placeholder="Transaction Name"
              value={values.name}
              onChangeText={(nextValue: string) =>
                setFieldValue('name', nextValue)
              }
            />
            <Text>Amount</Text>
            <Input
              size="large"
              style={{
                borderRadius: 20,
                backgroundColor: 'transparent',
                borderColor: usePallete().primary,
                width: '100%',
              }}
              inputMode="numeric"
              placeholder="Transaction Amount"
              value={values.amount}
              onChangeText={(nextValue: string) =>
                setFieldValue('amount', nextValue)
              }
            />
            <Text>Select Wallet</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ flexDirection: 'row', columnGap: 20 }}>
                {React.Children.toArray(
                  dataWallets?.map((wallet) => (
                    <WalletCard {...wallet} />
                  )),
                )}
              </View>
            </ScrollView>
            <Text>Description</Text>
            <Input
              size="large"
              style={{
                borderRadius: 20,
                backgroundColor: 'transparent',
                borderColor: usePallete().primary,
                width: '100%',
              }}
              inputMode="numeric"
              placeholder="Transaction Description"
              value={values.description}
              onChangeText={(nextValue: string) =>
                setFieldValue('description', nextValue)
              }
            />
            <Text>Category</Text>
            <Select
              size="large"
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}
              value={
                (dataTransaksiKategori &&
                  dataTransaksiKategori[selectedIndex.row]?.name) ||
                ''
              }
            >
              {React.Children.toArray(
                dataTransaksiKategori?.map(({ name }) => (
                  <SelectItem title={name} />
                )),
              )}
            </Select>
            <Text>Type</Text>
            <View style={{ flexDirection: 'row', columnGap: 10 }}>
              {React.Children.toArray(
                TransactionType.map(({ id, name }) => (
                  <Radio
                    checked={values.typeId === id}
                    onChange={(nextChecked) =>
                      setFieldValue('typeId', id)
                    }
                  >
                    {name}
                  </Radio>
                )),
              )}
            </View>
            <Button>Create Transaction</Button>
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default CreateTransactionScreen;
