import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          maxWidth: 500,
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 40,
        }}
      >
        {children}
      </View>
      ;
    </View>
  );
};

export default Container;
