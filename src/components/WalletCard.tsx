import { Button, Text } from '@ui-kitten/components';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import usePallete from '../hooks/usePallete';

const WalletCard: React.FC<
  Wallet & { onPress: () => void } & { selected: boolean }
> = ({
  amount,
  description,
  id,
  image,
  name,
  userId,
  accountNumber,
  onPress,
  selected,
}) => {
  const pallete = usePallete();
  return (
    <TouchableOpacity onPress={onPress}>
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
          backgroundColor: selected === true ? '#CBC3E3' : 'inherit',
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
    </TouchableOpacity>
  );
};

export default WalletCard;
