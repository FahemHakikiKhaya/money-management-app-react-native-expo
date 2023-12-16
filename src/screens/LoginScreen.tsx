import React, { FC, useState } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import usePallete from '../hooks/usePallete';
import { Input, Button } from '@ui-kitten/components';

const LoginScreen: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: usePallete().primary,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <KeyboardAvoidingView behavior="position">
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 15,
          }}
        >
          <Image
            source={require('../../assets/wallet-icon.png')}
            style={{
              width: 250,
              height: 250,
            }}
          />

          <Text
            style={{
              fontFamily: 'inter',
              color: 'white',
              fontSize: 40,
            }}
          >
            AturDompetKu
          </Text>
          <Text
            style={{
              fontFamily: 'Inter-thin',
              color: 'white',
              fontSize: 20,
            }}
          >
            Welcome Back
          </Text>

          <Text
            style={{
              fontFamily: 'inter-thin',
              color: 'white',
              fontSize: 16,
            }}
          >
            Please Log into your existing account
          </Text>

          <Input
            style={{ borderRadius: 20, backgroundColor: 'transparent' }}
            placeholder="Email"
            value={email}
            onChangeText={(nextValue: string) => setEmail(nextValue)}
          />
          <Input
            style={{ borderRadius: 20, backgroundColor: 'transparent' }}
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={(nextValue: string) => setPassword(nextValue)}
          />
          <Button appearance="filled" status="success" style={{ width: '100%', borderRadius: 20 }}>
            Log In
          </Button>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
