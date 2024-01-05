import { Icon, Text } from '@ui-kitten/components';
import { format } from 'date-fns';
import React, { FC } from 'react';
import { Image, View } from 'react-native';

const TransactionCard: FC<{
  data: GetTransaksiResponse;
  type: 'Income' | 'Expense';
}> = ({ data, type }) => {
  console.log(data.transaksiKategori.icon);
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
      <Icon
        name="shopping-bag-outline"
        style={{
          width: 30,
          height: 30,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 8,
          backgroundColor: '#F7F7F7',
        }}
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
          <Text style={{ fontWeight: 700, fontSize: 18 }}>
            {data.name}
          </Text>
          <Text>
            {format(new Date(data.createdAt), 'dd MMMMM yyyy')}
          </Text>
        </View>
        <Text
          style={{
            color: type === 'Income' ? 'green' : 'red',
            fontWeight: 500,
          }}
        >
          {type === 'Income' ? '+ $' : '- $'}
          {data.amount}
        </Text>
      </View>
    </View>
  );
};

export default TransactionCard;
