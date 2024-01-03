import { Button, Text } from '@ui-kitten/components';
import React from 'react';
import { Image, View } from 'react-native';
import usePallete from '../hooks/usePallete';

const WalletCard: React.FC<Wallet> = ({
  amount,
  description,
  id,
  image,
  name,
  userId,
  accountNumber,
}) => {
  const pallete = usePallete();
  return (
    <View
      style={{
        width: 'auto',
        paddingVertical: 20,
        paddingRight: 40,
        paddingLeft: 20,
        borderColor: pallete.primary,
        borderWidth: 2,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        columnGap: 16,
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{ width: 60, height: 60, resizeMode: 'contain' }}
      />

      <View style={{ flexDirection: 'column' }}>
        <Text>{name}</Text>
        <Text style={{ marginBottom: 8 }}>{accountNumber}</Text>
        <Text>${amount}</Text>
      </View>
    </View>
  );
};

export default WalletCard;
