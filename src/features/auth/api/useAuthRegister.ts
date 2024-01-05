import { UseMutationOptions, useMutation } from 'react-query';
import { useApiClient } from '../../../provider/ApiClientProvider';
import { useAuth } from '../../../provider/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuthRegister = (
  options?: UseMutationOptions<
    AuthRegisterResponse,
    unknown,
    AuthRegisterProps,
    unknown
  >,
) => {
  const { axios, api } = useApiClient();
  const { setUser, setAccessToken } = useAuth();

  return useMutation(
    ['register-auth'],
    async (payload) => {
      const authLogin = await api<AuthRegisterResponse>(
        axios.post('auth/register', payload),
      );
      return authLogin;
    },
    {
      onSuccess: (data: AuthRegisterResponse) => {
        const { accessToken, ...user } = data;
        setUser(user);
        setAccessToken(accessToken);
        AsyncStorage.setItem('user', JSON.stringify(user));
        AsyncStorage.setItem('accessToken', accessToken);
      },
      ...options,
    },
  );
};

export default useAuthRegister;
