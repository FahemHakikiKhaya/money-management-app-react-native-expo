import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { AuthStackNavigatorParamList } from '../../navigation/auth';
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  View,
} from 'react-native';
import { Button, Input, Text } from '@ui-kitten/components';
import useAuthRegister from '../../features/auth/api/useAuthRegister';

const RegisterScreen = ({
  navigation,
}: NativeStackScreenProps<
  AuthStackNavigatorParamList,
  'Register'
>) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutateAsync } = useAuthRegister();

  const onRegister = async () => {
    await mutateAsync({ email, password, name });
  };

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#1b16c4',
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
            source={require('../../../assets/register-icon.png')}
            style={{
              width: 250,
              height: 250,
            }}
          />

          <Text
            style={{
              fontFamily: 'inter',
              color: 'white',
              fontSize: 35,
            }}
          >
            Register For Free!
          </Text>

          <Text
            style={{
              fontWeight: 20,
              color: 'white',
              fontSize: 16,
            }}
          >
            Fill the Following Form to Continue
          </Text>

          <Input
            textStyle={{ color: 'white' }}
            style={{
              borderRadius: 20,
              backgroundColor: 'transparent',
              width: '100%',
            }}
            placeholder="Name"
            value={name}
            onChangeText={(nextValue: string) => setName(nextValue)}
          />

          <Input
            textStyle={{ color: 'white' }}
            style={{
              borderRadius: 20,
              backgroundColor: 'transparent',
              width: '100%',
            }}
            placeholder="Email"
            value={email}
            onChangeText={(nextValue: string) => setEmail(nextValue)}
          />
          <Input
            textStyle={{ color: 'white' }}
            style={{
              borderRadius: 20,
              backgroundColor: 'transparent',
              width: '100%',
            }}
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={(nextValue: string) =>
              setPassword(nextValue)
            }
          />
          <Button
            appearance="filled"
            status="success"
            style={{ width: '100%', borderRadius: 20 }}
            onPress={onRegister}
          >
            Register
          </Button>

          <Pressable onPress={() => navigation.goBack()}>
            <Text
              style={{
                color: 'white',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Go Back to Login Screen
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;
