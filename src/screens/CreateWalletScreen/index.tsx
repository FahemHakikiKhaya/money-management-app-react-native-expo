import React, { useState } from 'react';
import { Button, Input, Text } from '@ui-kitten/components';
import { ScreenStackProps } from 'react-native-screens';
import { HomeStackNavigatorParamList } from '../../navigation/main/navigation/Home';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../components/Container';
import usePallete from '../../hooks/usePallete';
import { Image, View } from 'react-native';
import useCreateWallet from '../../features/wallet/api/useCreateWallet';
import { Formik } from 'formik';

const CreateWalletScreen = ({
  navigation,
}: NativeStackScreenProps<
  HomeStackNavigatorParamList,
  'CreateWallet'
>) => {
  const { mutateAsync } = useCreateWallet();

  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
          amount: '',
          accountNumber: '',
          image: '',
          description: '',
        }}
        onSubmit={async (values) => {
          await mutateAsync({
            ...values,
            accountNumber: Number(values.accountNumber),
            amount: Number(values.amount),
          });
        }}
      >
        {({ values, setFieldValue, handleSubmit }) => (
          <View style={{ flexDirection: 'column', rowGap: 20 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={{
                  uri:
                    values.image ||
                    'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
                }}
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: 'contain',
                  borderWidth: 2,
                  borderColor: usePallete().primary,
                  borderRadius: 20,
                }}
              />
            </View>
            <Text>Logo</Text>
            <Input
              size="large"
              style={{
                borderRadius: 20,
                borderColor: usePallete().primary,
                backgroundColor: 'transparent',
                width: '100%',
              }}
              placeholder="Copy the Wallet Logo Url Here"
              value={values.image}
              onChangeText={(nextValue: string) =>
                setFieldValue('image', nextValue)
              }
            />
            <Text>Name</Text>
            <Input
              size="large"
              style={{
                borderRadius: 20,
                borderColor: usePallete().primary,
                backgroundColor: 'transparent',
                width: '100%',
              }}
              placeholder="Wallet Name"
              value={values.name}
              onChangeText={(nextValue: string) =>
                setFieldValue('name', nextValue)
              }
            />
            <Text>Amoount</Text>
            <Input
              size="large"
              style={{
                borderRadius: 20,
                borderColor: usePallete().primary,
                backgroundColor: 'transparent',
                width: '100%',
              }}
              inputMode="numeric"
              placeholder="Wallet Amount"
              value={values.amount}
              onChangeText={(nextValue: string) =>
                setFieldValue('amount', nextValue)
              }
            />
            <Text>Account Number</Text>
            <Input
              size="large"
              style={{
                borderRadius: 20,
                borderColor: usePallete().primary,
                backgroundColor: 'transparent',
                width: '100%',
              }}
              inputMode="numeric"
              placeholder="Acoount Number"
              value={values.accountNumber}
              onChangeText={(nextValue: string) =>
                setFieldValue('accountNumber', nextValue)
              }
            />
            <Text>Description</Text>
            <Input
              size="large"
              style={{
                borderRadius: 20,
                borderColor: usePallete().primary,
                backgroundColor: 'transparent',
                width: '100%',
              }}
              placeholder="Description"
              value={values.description}
              onChangeText={(nextValue: string) =>
                setFieldValue('description', nextValue)
              }
            />
            <Button onPress={() => handleSubmit()}>Add Wallet</Button>
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default CreateWalletScreen;
