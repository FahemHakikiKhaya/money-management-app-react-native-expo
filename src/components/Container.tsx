import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

export const Container: FC<
  PropsWithChildren & { style?: CSSProperties }
> = ({ children, style }) => {
  return (
    <View
      style={{
        maxWidth: 500,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 40,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default Container;
