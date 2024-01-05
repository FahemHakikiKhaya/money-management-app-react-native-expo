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
import useCreateTransaksi from '../../features/transaksi/api/useCreateTransaksi';

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
  const { mutateAsync } = useCreateTransaksi();

  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(
    new IndexPath(0),
  );

  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
          amount: '',
          dompetId: 1,
          transaksiTipeId: 1,
          description: '',
        }}
        onSubmit={async (values) => {
          const transaksiKategoriId =
            (dataTransaksiKategori &&
              Number(dataTransaksiKategori[selectedIndex.row]?.id)) ||
            1;
          await mutateAsync({
            ...values,
            amount: Number(values.amount),
            transaksiKategoriId,
          });
        }}
      >
        {({ values, setFieldValue, handleSubmit }) => (
          <View style={{ flexDirection: 'column', rowGap: 20 }}>
            <Text style={{ fontWeight: 600 }}>Name</Text>
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
            <Text style={{ fontWeight: 600 }}>Amount</Text>
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
            <Text style={{ fontWeight: 600 }}>Select Wallet</Text>
            {dataWallets?.length ? (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                <View style={{ flexDirection: 'row', columnGap: 20 }}>
                  {React.Children.toArray(
                    dataWallets?.map((wallet) => (
                      <WalletCard
                        {...wallet}
                        onPress={() =>
                          setFieldValue('dompetId', wallet.id)
                        }
                        selected={wallet.id === values.dompetId}
                      />
                    )),
                  )}
                </View>
              </ScrollView>
            ) : (
              <Text>Please Create a Wallet first</Text>
            )}
            <Text style={{ fontWeight: 600 }}>Description</Text>
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
            <Text style={{ fontWeight: 600 }}>Category</Text>
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
            <Text style={{ fontWeight: 600 }}>Type</Text>
            <View style={{ flexDirection: 'row', columnGap: 10 }}>
              {React.Children.toArray(
                TransactionType.map(({ id, name }) => (
                  <Radio
                    checked={values.transaksiTipeId === id}
                    onChange={(nextChecked) =>
                      setFieldValue('transaksiTipeId', id)
                    }
                  >
                    {name}
                  </Radio>
                )),
              )}
            </View>
            <Button
              onPress={() => {
                handleSubmit();
                navigation.goBack();
              }}
            >
              Create Transaction
            </Button>
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default CreateTransactionScreen;
