import { Text } from '@ui-kitten/components';
import React from 'react';
import { Image, View } from 'react-native';

const TransactionCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        columnGap: 16,
        width: '100%',
        height: 75,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 10,
      }}
    >
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={{ flex: 0.1, width: '100%', height: '100%' }}
        resizeMode="contain"
      />
      <View
        style={{
          flex: 0.9,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View style={{ flexDirection: 'column' }}>
          <Text>Rental Income</Text>
          <Text>14 July 2021</Text>
        </View>
        <Text>$-300.49</Text>
      </View>
    </View>
  );
};

export default TransactionCard;
